import styles from './Categories.module.css'
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import FactoryIcon from '@mui/icons-material/Factory';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import GavelIcon from '@mui/icons-material/Gavel';

const Categories = () => {
    return (
        <div className={styles.topcategories}>
            <h2 className={styles.top}>Top Categories</h2>
            <div className={styles.categories} >
                <div className={styles.div}><FactoryIcon className={styles.icon} /><p> Manufacturing</p> </div>
                <div className={styles.div}><BusinessCenterRoundedIcon className={styles.icon}/> <p>Consultancy</p></div>
                <div className={styles.div}><SchoolIcon className={styles.icon}/><p> Educational</p></div>
                <div className={styles.div}><ComputerIcon className={styles.icon}/> <p>Technology</p></div>
                <div className={styles.div}><GavelIcon className={styles.icon}/> <p>Government</p></div>
            </div>
    
        </div>
    )
}
export default Categories