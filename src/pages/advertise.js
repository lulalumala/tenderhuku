import styles from '../styles/Advertise.module.css'
import Nav from '@/components/Nav/Nav'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';



const Advertise = () => {
    const [expand, setExpand] = useState({
        arrow: false,
        arrow2: false,
        arrow3: false,
        arrow4: false,
        arrow5: false
    })

    return (
        <div>

            <Nav />
            <div className={styles.section}
                onClick={() => setExpand(prev => ({ ...prev, arrow: !prev.arrow }))} >
                <p>SECTION I: INSTRUCTION TO TENDERERS </p>
                <div className={styles.arrowdiv}
                >{expand.arrow ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>


            <div className={styles.section} onClick={() => setExpand(prev => ({ ...prev, arrow2: !prev.arrow2 }))}>
                <p>SECTION II: TENDER DATA SHEET </p>
                <div className={styles.arrowdiv}
                >{expand.arrow2 ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>


            <div className={styles.section} onClick={() => setExpand(prev =>({...prev, arrow3: !prev.arrow3}))} >
                <p>SECTION III: EVALUATION AND QUALIFICATIONS CRITERIA </p>
                <div className={styles.arrowdiv}
                    >{expand.arrow3 ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>


            <div className={styles.section}  onClick={() => setExpand(prev =>({prev, arrow4: !prev.arrow4}))}>
                <p>SECTION IV: TENDER FORMS </p>
                <div className={styles.arrowdiv}
                    >{expand.arrow4 ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>


            <div className={styles.section} onClick={() => setExpand(prev => ({...prev, arrow5: !prev.arrow5}))}>
                <p>SECTION V: SCHEDULE OF REQUIREMENTS </p>
                <div className={styles.arrowdiv}
                    >{expand.arrow5 ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>

            {/* section I; instruction to tenderers */}

        </div>
    )
}
export default Advertise