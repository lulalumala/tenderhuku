import styles from './Categories.module.css'
import SearchIcon from '@mui/icons-material/Search';

const Categories = () => {
    return (
        <div className={styles.topcategories}>
            <h2 className={styles.top}>Top Categories</h2>
            <div className={styles.categories} >
                <div className={styles.div}><p>Manufacturing</p> </div>
                <div className={styles.div}><p>Consultancy</p></div>
                <div className={styles.div}><p>Educational</p></div>
                <div className={styles.div}><p>Technology</p></div>
                <div className={styles.div}><p>Government</p></div>
            </div>
            <div className={styles.search} >
                <input className={styles.input} placeholder='search' />
                <SearchIcon className={styles.icon } />
            </div>
        </div>
    )
}
export default Categories