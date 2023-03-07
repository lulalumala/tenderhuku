import { useRouter } from 'next/router'
import { useState, useContext } from 'react'

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
    const [text, setText] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    // const [currentuser, setCurrentuser] = useState("")

    const router = useRouter()


    const context = useContext(Context)
    const { user } = context
    const [currentUser, setcurrentUser] = user


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
            console.log(res)
            if (!res.userName) {
                return setText(res.error)
            }
            if (res.userName) {
                router.push("/home")
                if (rememberMe) {
                setcurrentUser(loginUser.userName)
                localStorage.setItem("currentUser", JSON.stringify(loginUser.userName))
                }
            }
            console.log(currentUser)
            console.log(loginUser)
        } catch (error) {
            setText(error)
        }
    }


    return (
        <div>
            {/* {console.log(text)} */}
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
                        {/* <Link href="/signup"> */}
                        Sign Up
                        {/* </Link> */}
                    </button>
                    <p className={styles.reset} >Forgot Password?</p>
                </form>
            </div>
        </div>
    )
}
export default Login