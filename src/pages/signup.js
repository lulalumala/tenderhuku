import { useState } from 'react'
import Nav from "@/components/Nav/Nav"
import Image from "next/image"
import styles from '../styles/Signup.module.css'
import { useRouter } from 'next/router'


// icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';

import DoneIcon from '@mui/icons-material/Done';


// pic
import pic2 from '../pics/mikono.webp'
import { PostAdd, SettingsInputComponent } from '@mui/icons-material';
import { redirect } from 'next/dist/server/api-utils'


const Signup = () => {
    const [show, setShow] = useState(false)
    const [confirmShow, setConfirmShow] = useState(false)
    const [text, setText] = useState("")
    const [emptyFields, setEmptyFields] = useState([])
    const [newUser, setNewUser] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const router = useRouter()
    const [strong, setStrong] = useState({
        lowercase: false,
        uppercase: false,
        length: false,
        num: false,
        specialChar: false
    })

    const smallLetters = "abcdefghijklmnopqrstuvwxyz"
    const specialChar = "!@#$%^&*()_+'?><,./`"
    const num = "0123456789"


    const validatemail = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)



    const passwordInputSet = (e) => {

        const passwordInput = e.target.value
        console.log(passwordInput.length)


        // declare special chars in regex
        const numbers = new RegExp(/[0-9]/)
        const pattern = new RegExp(/["!@#$%^&*()_+'?><,./`]/)
        const lowercaseRegex = new RegExp(/[a-z]/)
        const uppercaseRegex = new RegExp(/[A-Z]/)


        // check using loop
        // for (let i of passwordInput) {
        //     smallLettersSplit.includes(i) ? setStrong(prev => ({ ...prev, lowercase: true })) : setStrong(prev => ({ ...prev, lowercase: false }))
        // capitalLetters.includes(i) ? setStrong(prev => ({ ...prev, uppercase: true })) : setStrong(prev => ({ ...prev, uppercase: false }))
        //     numSplit.includes(i) ? setStrong(prev => ({ ...prev, num: true })) : setStrong(prev => ({ ...prev, num: false }))
        //     charsplit.includes(i) ? setStrong(prev => ({ ...prev, specialChar: true })) : setStrong(prev => ({ ...prev, specialChar: false }))
        // }

        // Check using regex
        lowercaseRegex.test(passwordInput) ? setStrong(prev => ({ ...prev, lowercase: true })) : setStrong(prev => ({ ...prev, lowercase: false }))
        uppercaseRegex.test(passwordInput) ? setStrong(prev => ({ ...prev, uppercase: true })) : setStrong(prev => ({ ...prev, uppercase: false }))
        pattern.test(passwordInput) ? setStrong(prev => ({ ...prev, specialChar: true })) : setStrong(prev => ({ ...prev, specialChar: false }))
        numbers.test(passwordInput) ? setStrong(prev => ({ ...prev, num: true })) : setStrong(prev => ({ ...prev, num: false }))

        // if (!validatemail.test(newUser.email)) {setText("Enter a valid email address")        }

        passwordInput.length >= 7 ? setStrong(prev => ({ ...prev, length: true })) : setStrong(prev => ({ ...prev, length: false }))
        setNewUser(prev => ({ ...prev, password: passwordInput }))
    }




    const create = async (e) => {
        e.preventDefault()


        if (newUser.userName == "" || newUser.email == "" || newUser.password == "") {
            return setText("Please fill all details")
        }

        if (newUser.userName == "") {
            setEmptyFields(prev => [...prev, "username"])
        }

        if (newUser.email == "") {
            setEmptyFields(prev => [...prev, "email"])
        }
        if (newUser.password == "") {
            setEmptyFields(prev => [...prev, "password"])
        }
        if ((!strong.lowercase) || (!strong.uppercase) || (!strong.length) || (!strong.num) || (!strong.specialChar)) {
            return setText("Enter a strong password")
        }



        if (newUser.password !== newUser.confirmPassword) { return setText("Passwords do not match") }

        if (!validatemail.test(newUser.email)) { return setText("Enter a valid email") }

        const addUser = await fetch("http://localhost:3001/api/user/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        })

        const jsonUser = await addUser.json()
        if (jsonUser.userName) {
            router.push("/login")
            localStorage.setItem("currentUser", JSON.stringify(newUser.userName))

            console.log(`You are reistered`)
        }
        if (!jsonUser.ok) {
            setText(jsonUser.error)
        }
        console.log(jsonUser)

    }

    return (
        <div>
            <Nav />
            <div className={styles.maindiv} >
                <Image className={styles.pic} src={pic2} alt='login pic' />
                <form className={styles.form} >
                    <h2 className={styles.h2} >Sign Up</h2>
                    <p className={styles.errorText} >{text} </p>

                    <div className={emptyFields.includes("username") ? `${styles.user} ${styles.error}` : styles.user} >
                        <Person2Icon />
                        <input className={styles.input} placeholder='Username' type='text'
                            onChange={(e) => setNewUser(prev => ({ ...prev, userName: e.target.value }))} />
                    </div>

                    <div className={emptyFields.includes("email") ? `${styles.user} ${styles.error}` : styles.user} >
                        <EmailIcon />
                        <input className={styles.input} placeholder='Email' type='email'
                            onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value.trim() }))} />
                    </div>

                    <div className={styles.password} >
                        <LockIcon />
                        <input className={styles.input} placeholder='Password' type={show ? 'text' : 'password'}
                            onChange={(e) => passwordInputSet(e)} />
                        <div onClick={() => setShow(prev => !prev)}> {show ? <VisibilityIcon /> : <VisibilityOffIcon />}</div>
                    </div>
                    <div className={styles.password} >
                        <LockIcon />
                        <input className={styles.input} placeholder='Confirm Password' type={confirmShow ? 'text' : 'password'}
                            onChange={(e) => { setNewUser(prev => ({ ...prev, confirmPassword: e.target.value })) }} />
                        <div onClick={() => setConfirmShow(prev => !prev)}> {confirmShow ? <VisibilityIcon /> : <VisibilityOffIcon />}</div>
                    </div>
                    <div className={styles.passwordrequirements} >
                        <p>Your password should contain at least:</p>
                        <div className={styles.passwordreqcontainer} >
                            <div className={styles.passwordcheck} >
                                <p className={strong.lowercase ? styles.success : styles.textError} >Small letter</p>
                                <p className={strong.uppercase ? styles.success : styles.textError} >Capital letter</p></div>
                            <div className={styles.passwordcheck}>
                                <p className={strong.num ? styles.success : styles.textError} >A number</p>
                                <p className={strong.specialChar ? styles.success : styles.textError} >Special character</p> </div>
                            <div className={styles.passwordcheck}>
                                <p className={strong.length ? styles.success : styles.textError} >Seven characters</p></div>
                        </div>
                    </div>
                    <div className={styles.boxlabel} >
                        <input className={styles.box} type='checkbox' />
                        <label className={styles.label} >Remember me?</label>
                    </div>
                    <button className={`${styles.lbutton} ${styles.button}`} onClick={(e) => create(e)} >Sign Up</button>
                    <button type='submit' className={`${styles.sbutton} ${styles.button}`}>Login</button>
                    <p className={styles.reset} >Forgot Password?</p>
                </form>
            </div>
        </div>
    )
}

export default Signup