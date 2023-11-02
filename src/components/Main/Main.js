import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Main.module.css'



const Main = () => {
const[tenders, setTenders]=useState([])

    useEffect(() => {
        const getTenders = async () => {
          
                const data = await fetch("http://localhost:3001/api/user/tenders")
                const res = await data.json()
                                   setTenders(res)
            
            
        }
        getTenders()
    }, [])

    const [fields, setFields] = useState({
        referenceNo: "",
        tenderName: "",
        category: "",
        lots: "",
        tenderDescription: "",
        enquiryAddress: "",
        firmsProvidingConsultancy: "",
        JVmax: "",
        openingDate: "",
        closingDate: "",
        userId: "",
        address: {},
        company: {}
    })

return (
    <div className={styles.main} >
        <h2 className={styles.h2} >Active Tenders</h2>
        <div className={styles.main80} >
            {tenders.length !==undefined &&
                tenders.map(items => {
                    return (
                        <div>
                            <div className={styles.maincard}>
                              <div className={styles.top}>
                                <img className={styles.topim} src={items.company.logo} />
                                <h3 className={styles.name}>{items.company.name}</h3></div>
                                <p>Tender Name: {items.tenderName}</p>
                                <p className={styles.p}>Reference No: {items.referenceNo} </p>
                                <p className={styles.category}>Category:{items.category} </p>
                                <p className={styles.p}> Lots: { items.lots}</p>
                                <p className={styles.open}>Opening date:{items.openingDate} </p>
                                <p className={styles.close}>Closing date: { items.closingDate}</p>
                                <p className={styles.p}>Required applications: {items.JVmax} </p>
                              <Link href={`tenders/${items._id}`}>  <button className={styles.button}>View tender</button></Link>
                            </div>
                        </div>
                    )
                })
                
            }   
            
        </div>
        <button className={styles.all}>SHOW ALL TENDERS</button>
    </div>
)
}
export default Main