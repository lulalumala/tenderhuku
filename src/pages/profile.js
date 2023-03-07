import Nav from "@/components/Nav/Nav"
import styles from '../styles/Profile.module.css'
import Company from "@/components/Company/Company"
import Address from "@/components/Address/Address"
import { Context } from "@/states"
import { useContext } from "react"

const Profile = () => {
    const { showNext } = useContext(Context)
    const [next, setNext] = showNext
    return (
        <div>
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