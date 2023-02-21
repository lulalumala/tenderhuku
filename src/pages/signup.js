import { useState } from 'react'
import Nav from "@/components/Nav/Nav"
import Image from "next/image"
import styles from '../styles/Signup.module.css'

// icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';

// pic
import pic2 from '../pics/mikono.webp'
import pic3 from '../pics/pic1.webp'
import pic4 from '../pics/pic2.webp'

const Signup = () => {
    const [show, setShow] = useState(false)
    const [confirmShow, setConfirmShow] = useState(false)


    return (
        <div>
            <Nav />
            <div className={styles.maindiv} >
                <Image className={styles.pic} src={pic2} alt='login pic' />
                <form className={styles.form} >
                    <h2 className={styles.h2} >Sign Up</h2>
                    <div className={styles.user} >
                        <EmailIcon />
                        <input className={styles.input} placeholder='Email' type='email' />
                    </div>
                   
                    <div className={styles.user} >
                        <Person2Icon />
                        <input className={styles.input} placeholder='Username' type='text' />
                    </div>
                    <div className={styles.password} >
                        <LockIcon />
                        <input className={styles.input} placeholder='Password' type={show ? 'text' : 'password'} />
                        <div onClick={() => setShow(prev => !prev)}> {show ? <VisibilityIcon /> : <VisibilityOffIcon />}</div>
                    </div>
                    <div className={styles.password} >
                        <LockIcon />
                        <input className={styles.input} placeholder='Confirm Password' type={confirmShow ? 'text' : 'password'} />
                        <div onClick={() => setConfirmShow(prev => !prev)}> {confirmShow ? <VisibilityIcon /> : <VisibilityOffIcon />}</div>
                    </div>

                    <div className={styles.boxlabel} >
                        <input className={styles.box} type='checkbox' />
                        <label className={styles.label} >Remember me?</label>
                    </div>

                    <button className={`${styles.lbutton} ${styles.button}`} >Sign Up</button>
                    <button className={`${styles.sbutton} ${styles.button}`}>Login</button>
                    <p className={styles.reset} >Forgot Password?</p>
                </form>
            </div>
        </div>
    )
}

export default Signup