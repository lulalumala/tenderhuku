import styles from "../styles/View.module.css"


const View = () => {
    return (
        <div className={styles.view} >
            <div className={styles.title}>
                <p>Tender Details</p>
            </div>
            <h3>PE:<input type="text" className={styles.viewinput} /> </h3>
            <h3>Tender: <input type="text" className={styles.viewinput} /> </h3>
            <div className={styles.title}>
                <p>Tender notice details</p>
            </div>
            <p>Tender No: <input type="text" className={styles.inputp} /> </p>
            <p>Financial year: <input type="text" className={styles.inputp} /> </p>
            <p>Procurement method: <input type="text" className={styles.inputp} /> </p>
            <p>Category: <input type="text" className={styles.inputp} /> </p>
            <p>Published date: <input type="text" className={styles.inputp}/> </p>
            <p>Closing date: <input type="text" className={styles.inputp} /> </p>
            <p>Closing time: <input type="text" className={styles.inputp} /> </p>
            
        </div>
    )
}
export default View