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
                    <h2>ABOUT US</h2>
                    <p>Tendarize is a company located in Kenya with the aim of reducing paperworks and make it able to complete tender application as well as save documents online to make it easier to apply even further from home</p>
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
                    </div>
                    <div className={styles.pickdiv}>Time Saving</div>
                    <div className={styles.pickdiv}>Fairness</div>
                </div>
            </div>
            <div className={styles.bottomcurve} >

            </div>

        </div>
    )
}
export default About