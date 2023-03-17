import styles from './Nav.module.css'
import Link from 'next/link'
import { useContext, useEffect } from 'react'

import { Context } from '@/states'

const Nav = () => {

    const context = useContext(Context)
    const { user, address } = context
    const [currentUser, setCurrentUser] = user
    const [addressDetails, setAddressDetails] = address


    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("currentUser"))
        if (savedUser) {
            setCurrentUser(savedUser)
            setAddressDetails(prev => ({ ...prev, userEmail: savedUser.email }))

        }

        console.log(savedUser)

    }, [])

    return (
        <div className={styles.nav} >
            {console.log(`The current user is ${currentUser.email}`)}
            <div className={styles.navContainer} >
                <div className={styles.logo} >
                    <Link href="/home"><p>Tendarize</p></Link>
                </div>
                <div className={styles.menu} >
                    <ul className={styles.ul} >
                        <Link href="/about"><li>About Us</li></Link>
                        {/* <li>Apply for tender</li>
                        <li>Advertise tender</li> */}
                        <Link href="/login">      <li> Login </li></Link>
                        <Link href="/signup">     <li> Register </li></Link>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Nav