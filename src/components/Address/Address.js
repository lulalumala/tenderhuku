import styles from './Address.module.css'

const Address = () => {
    return (
        <div>
            <div className={styles.div} ><p>Postal Address</p> <input /></div>
            <div className={styles.div} ><p>Postal Code</p> <input/></div>
            <div className={styles.div} ><p>Physical Address</p> <input/></div>
            <div className={styles.div} ><p>Telephone Number</p> <input/></div>
            <div className={styles.div} ><p>Email Address</p> <input/></div>

        </div>
    )
}
export default Address