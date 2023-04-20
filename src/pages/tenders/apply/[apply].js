import styles from '../../../styles/Apply.module.css'
import Nav from '@/components/Nav/Nav'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';


//import sections
import Section1 from '@/sections/Section1';
import Section2 from '@/sections/Section2';
import Section3 from '@/sections/Section3';
import Section4 from '@/sections/Section4';
import Section5 from '@/sections/Section5';
import Section6 from '@/sections/Section6';
import Section7 from '@/sections/Section7';
import {useTenders} from '@/hooks';

const Apply = () => {
    const [expand, setExpand] = useState({
        arrow: false,
        arrow2: false,
        arrow3: false,
        arrow4: false,
        arrow5: false,
        arrow6: false,
        arrow7: false
    })
    useTenders()

    return (
        <div>
            <Nav />
           
            <div className={styles.section} onClick={() => setExpand(prev => ({ ...prev, arrow: !prev.arrow }))}>
                <p>SECTION I: INSTRUCTION TO TENDERERS </p>
                <div className={styles.arrowdiv}  >
                    {expand.arrow ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>
            {/* components */}
            {expand.arrow && <div className={styles.section} >
                <Section1 />
            </div>}

            <div className={styles.section}
                onClick={() => setExpand(prev => ({ ...prev, arrow2: !prev.arrow2 }))}>
                <p>SECTION II: TENDER DATA SHEET </p>
                <div className={styles.arrowdiv}  >{expand.arrow2 ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>
            {/* components */}
            {expand.arrow2 && <div className={styles.section} >
                <Section2 />
            </div>}

            <div className={styles.section} onClick={() => setExpand(prev => ({ ...prev, arrow3: !prev.arrow3 }))}>
                <p>SECTION III: EVALUATION AND QUALIFICATIONS CRITERIA </p>
                <div className={styles.arrowdiv}  >{expand.arrow3 ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}</div>
            </div>
            {/* components */}
            {expand.arrow3 && <div className={styles.section} >
                <Section3 />
            </div> }


            <div className={styles.section} onClick={() => setExpand(prev => ({ ...prev, arrow4: !prev.arrow4 }))} >
                <p>SECTION IV: TENDER FORMS </p>
                <div className={styles.arrowdiv} >{expand.arrow4 ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>
            {/* components */}
            {expand.arrow4 && <div className={styles.section} >
                <Section4 />
            </div>}

            <div className={styles.section} onClick={() => setExpand(prev => ({ ...prev, arrow5: !prev.arrow5 }))} >
                <p>SECTION V: SCHEDULE OF REQUIREMENTS </p>
                <div className={styles.arrowdiv} >{expand.arrow5 ? <KeyboardArrowUpIcon className={styles.icon} /> : <KeyboardArrowDownIcon className={styles.icon} />}
                </div>
            </div>
            {/* components */}
            {expand.arrow5 && <div className={styles.section} >
                <Section5 />
            </div>}
            
            
        </div>
    )
}

export default Apply