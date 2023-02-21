import { useState } from 'react'
import pic from '../pics/mkono.webp'
import Image from 'next/image'
import Nav from '@/components/Nav/Nav'
import styles from '../styles/Login.module.css'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import Person2Icon from '@mui/icons-material/Person2';

const Login = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <Nav />
            <div className={styles.maindiv} >
                <Image className={styles.pic} src={pic} alt='login pic' />
                <form className={styles.form} >
                    <h2 className={styles.h2} >Login</h2>
                    <div className={styles.user} >
                        <Person2Icon />

                        <input className={styles.input} placeholder='Username' type='text' />

                    </div>
                    <div className={styles.password} >
                        <LockIcon />
                        <input className={styles.input} placeholder='Password' type={show ? 'text' : 'password'} />
                        <div onClick={() => setShow(prev => !prev)}> {show ? <VisibilityIcon /> : <VisibilityOffIcon />}</div>
                    </div>

                    <div className={styles.boxlabel} >
                        <input className={styles.box} type='checkbox' />
                        <label className={styles.label} >Remember me?</label>
                    </div>

                    <button className={`${styles.lbutton} ${styles.button}`} >Login</button>
                    <button className={`${styles.sbutton} ${styles.button}`}>Sign Up</button>
                    <p className={styles.reset} >Forgot Password?</p>
                </form>
            </div>
        </div>
    )
}
export default Login