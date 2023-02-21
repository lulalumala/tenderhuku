import Nav from '@/components/Nav/Nav';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

import styles from '../styles/Contact.module.css'

const Contact = () => {
    return (
        <div>
            <Nav />
            <div className={styles.contactus} >
                {/* <h2 className={styles.contacttitle} >CONTACT US</h2> */}
                <div className={styles.contact} >
                    <div className={styles.iconcontactsdiv} >
                        <div className={styles.iconcontacts} >
                            <div className={styles.icon} >
                                <HomeIcon className={styles.icons} />
                            </div>
                            <div className={styles.contactinfo}>
                                <h3 className={styles.p}>Location</h3>
                                <p className={styles.p}>P.O Box 21706-00505</p>
                                <p className={styles.p}>Mashimoni, Nairobi</p>
                            </div>
                        </div>

                        <div className={styles.iconcontacts} >
                            <div className={styles.icon} ><CallIcon className={styles.icons} /></div>
                            <div className={styles.contactinfo}>
                                <h3 className={styles.p}>Phone</h3>
                                <p className={styles.p}>0712123456</p>
                                <p className={styles.p}>0734345678</p>
                            </div>
                        </div>

                        <div className={styles.iconcontacts} >
                            <div className={styles.icon} ><MailIcon className={styles.icons} /></div>
                            <div className={styles.contactinfo}>
                                <h3 className={styles.p}>Email</h3>
                                <p className={styles.p}>admin@tendarize.com</p>
                                <p className={styles.p}>info@tendarize.com</p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.contactform} >
                        <form className={styles.form} >
                            <input placeholder='NAME' type='text' className={styles.input} />
                            <input placeholder='EMAIL' type='text' className={styles.input} />
                            <textarea placeholder='MESSAGE' className={styles.textarea} />
                            <button className={styles.button} >SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact