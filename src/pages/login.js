import { useRouter } from 'next/router'
import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'

import pic from '../pics/mkono.webp'
import Image from 'next/image'
import Nav from '@/components/Nav/Nav'
import styles from '../styles/Login.module.css'

// icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import Person2Icon from '@mui/icons-material/Person2';
import { Context } from '@/states'

const Login = () => {

    const [show, setShow] = useState(false)
    const [loginUser, setLoginUser] = useState({
        userName: "",
        password: ""
    })

    const { user, mail, userOn } = useContext(Context)
    const [currentUser, setCurrentUser] = user
    const [userIn, setUserIn]= userOn
    const [text, setText] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [emailState, setEmailState] = mail

    const router = useRouter()



    useEffect(() => {
        console.log(emailState)

    }, [emailState])


    const handleLogin = async (e) => {
        e.preventDefault()
        try {


            if ((loginUser.userName == "") || (loginUser.password == "")) {
                return setText("Enter all fields")
            }
            const connectBackend = await fetch("http://localhost:3001/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginUser)
            })

            const res = await connectBackend.json()
            // console.log(res)
            if (!res.userName) {
                return setText(res.error)
            }
            if (res.userName) {
                // router.push("/home")
                console.log(res)
                console.log("1-2 mic")
                setEmailState(res.email)
                console.log(res.email)
                console.log(emailState)

                //    if (rememberMe) {
                setCurrentUser(loginUser.userName)
                const {password, ...others} = res
                localStorage.setItem("currentUser", JSON.stringify(others))
                router.push("/home")
                setUserIn(true)
                // }

            }

        } catch (error) {
            setText(error)
        }
    }


    return (
        <div>
            <Nav />
            <div className={styles.maindiv} >
                <Image className={styles.pic} src={pic} alt='login pic' />
                <form className={styles.form} >
                    <h2 className={styles.h2} >Login</h2>
                    <div className={styles.user} >
                        <Person2Icon />
                        <input className={styles.input} placeholder='Username' type='text' onChange={(e) => setLoginUser(prev => ({ ...prev, userName: e.target.value }))} />
                    </div>

                    <div className={styles.password} >
                        <LockIcon />
                        <input className={styles.input} placeholder='Password' type={show ? 'text' : 'password'} onChange={(e) => setLoginUser(prev => ({ ...prev, password: e.target.value }))} />
                        <div onClick={() => setShow(prev => !prev)}> {show ? <VisibilityIcon /> : <VisibilityOffIcon />}</div>
                    </div>


                    {/* error */}
                    <p className={styles.error} >{text}</p>

                    <div className={styles.boxlabel} >
                        <input className={styles.box} type='checkbox' onClick={() => setRememberMe(prev => !prev)} />
                        <label className={styles.label} >Remember me?</label>
                    </div>

                    <button className={`${styles.lbutton} ${styles.button}`} onClick={handleLogin} >Login</button>
                    <button className={`${styles.sbutton} ${styles.button}`}>
                        <Link className={styles.link} href="/signup">Sign Up</Link>
                    </button>
                    <p className={styles.reset} >Forgot Password?</p>
                </form>
            </div>
        </div>
    )
}
export default Login