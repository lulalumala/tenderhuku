import Nav from "@/components/Nav/Nav"
import styles from '../styles/Profile.module.css'
import Company from "@/components/Company/Company"
import Address from "@/components/Address/Address"
import { Context } from "@/states"
import { useContext } from "react"

const Profile = () => {
    const { showNext, mail, user, profile } = useContext(Context)
    const [profileComplete, setProfileComplete]=profile
    const [next, setNext] = showNext
    const [emailState, setEmailState] = mail
    const [currentUser, setCurrentUser] = mail
    return (
        <div>
            {console.log(currentUser.email)}
            <Nav />
            <div className={styles.profile} >
                {
                    next ? <Company /> : <Address />
                }


            </div>
        </div>
    )
}
export default Profile