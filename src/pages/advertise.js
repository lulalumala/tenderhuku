import styles from '../styles/Advertise.module.css'
import Nav from '@/components/Nav/Nav'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';



const Advertise = () => {
    const [arrow, setArrow] = useState(false)

    return (
        <div>

            <Nav />
            <div className={styles.section} >
                <p>SECTION I: INSTRUCTION TO TENDERERS </p>
                <div className={styles.arrowdiv}
                    onClick={() => setArrow(prev => !prev)} >{arrow ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>
            <div className={styles.section}>
                <p>SECTION II: TENDER DATA SHEET </p>
                <div className={styles.arrowdiv}
                    onClick={() => setArrow(prev => !prev)} >{arrow ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>
            <div className={styles.section}>
                <p>SECTION III: EVALUATION AND QUALIFICATIONS CRITERIA </p>
                <div className={styles.arrowdiv}
                    onClick={() => setArrow(prev => !prev)} >{arrow ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>
            <div className={styles.section}>
                <p>SECTION IV: TENDER FORMS </p>
                <div className={styles.arrowdiv}
                    onClick={() => setArrow(prev => !prev)} >{arrow ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>
            <div className={styles.section}>
                <p>SECTION V: SCHEDULE OF REQUIREMENTS </p>
                <div className={styles.arrowdiv}
                    onClick={() => setArrow(prev => !prev)} >{arrow ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>

            {/* section I; instruction to tenderers */}

        </div>
    )
}
export default Advertise