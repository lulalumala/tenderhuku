import styles from './Company.module.css'

const Company = () => {
    return (
        <div>
            <div className={styles.div} ><p>Name of your company</p> <input type= 'text'/></div>
            <div className={styles.div} ><p>Constitution</p> <input type= 'file'/></div>
            <div className={styles.div} ><p>Power of Attorney</p> <input type= 'file'/></div>
            <div className={styles.div} ><p>Registration Certificate</p> <input type= 'file'/></div>
            <div className={styles.div} ><p>Business License</p> <input type= 'file'/></div>
            <div className={styles.div} ><p>Place of Registration</p> <input type= 'text'/></div>
            <div className={styles.div} ><p>Principal place of Business</p> <input type= 'text'/></div>
            <div className={styles.div} ><p>Total annual volume</p> <input type= 'text'/></div>

      </div>
  )  
}
export default Company