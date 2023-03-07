import Nav from "@/components/Nav/Nav"
import styles from '../styles/About.module.css'
import pic from '../pics/pic2.webp'
import Image from "next/image"
import curve from '../pages/contactbg.svg'

const About = () => {
    return (
        <div>
            <Nav />
            <div className={styles.curve}>
                <div className={styles.aboutdiv} >
                    <h2 className={styles.aboutus} >ABOUT US</h2>
                    <p>Tendarize is a start up company located in Kenya.
                        We aim to make it easy for tender applications to both applicants and procurement entity, by providing a platform where such processess will be online.
                    </p>
                </div>
                <div className={styles.aboutpic} >
                    <Image className={styles.aboutim} src={pic} alt='' />
                </div>
            </div>
            <div className={styles.whyus} >
                <h2>WHY US</h2>
                <div className={styles.pickus} >
                    <div className={styles.pickdiv} >
                        <h3>   Transparent</h3>
                        <p>All tenders whose company will use this platform will be posted online,
                            and will be accessible to this page immediately they are published.</p>
                    </div>
                    <div className={styles.pickdiv}>
                        <h3>Time Saving</h3>
                        <p>Users will be able to fill their details, once they have completed filling their profiles, they will not have to be filling in again in forms</p>
                    </div>
                    <div className={styles.pickdiv}>
                        <h3>Fairness</h3>
                        <p>Equal opportunities will be provided to all.</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomcurve} >

            </div>

        </div>
    )
}
export default About