import styles from './Nav.module.css'


const Nav = () => {
    return (
        <div className={styles.nav} >
            <div className={styles.navContainer} >
                <div className={styles.logo} >
                    <p>Tendarize</p>
                </div>
                <div className={styles.menu} >
                    <ul className={styles.ul} >
                        <li>About</li>
                        <li>Apply for tender</li>
                        <li>Advertise tender</li>
                        <li>Login</li>
                        <li>Sign up</li>
                        <li>Contact us</li>
                    </ul>
                    <select>
                        <option>Apply/Advertise</option>
                        <option>Apply</option>
                        <option>Advertise</option>

                    </select>
                </div>
            </div>
        </div>
    )
}
export default Nav