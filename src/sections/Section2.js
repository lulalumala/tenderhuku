import { useState, useContext } from "react"
import styles from "./Section2.module.css"

import { Context } from "@/states"


const Section2 = () => {

    const context = useContext(Context)
    const { currentItem } = context
    const [items, setItems] = currentItem



    const fetchItems = async () => {
        const id = "641a9d2e57c4f472ef5a04da"
        const add = await fetch(`http://localhost:3001/api/user/tenders`)
        const res = await add.json()
        // setItems(res)
        console.log(res)
    }

    return (
        <div>
            <button onClick={fetchItems}>fetch
            </button>
            {/*section II; Tender data sheet */}
            <h3 className={styles.h3} >SECTION II – TENDER DATA SHEET (TDS)</h3>
            <table className={styles.table} >
                <tr className={styles.tr}>
                    <th className={styles.td}>ITT Reference</th>
                    <th className={styles.td}>Particulars Of Appendix To Instructions To Tenders</th>
                </tr>
                <tr className={styles.tr} >
                    <th colSpan='2' className={styles.td}>A. General</th>
                </tr>
                <tr className={styles.tr}>
                    <th className={styles.td}>ITT 1.1</th>
                    <td className={styles.td}>
                        <p>The reference number of the Invitation for Tenders is:
                            {/* <input type='text' className={styles.section2Input} readOnly defaultValue={items.referenceNo} /> */}
                            <span className={styles.span}>{items.referenceNo}</span>
                        </p>

                        <p>The Procuring Entity is:
                            {/* <input type='text' className={styles.section2Input} /> */}
                            <span className={styles.span}></span>
                        </p>

                        <p>The name of the Contract is:
                            {/* <input type='text' className={styles.section2Input} readOnly defaultValue={items.tenderName} /> */}
                            <span className={styles.span}>{items.tenderName}</span>
                        </p>

                        <p>The number and identification of lots (contracts) comprising this Invitation for Tenders is:
                            {/* <input className={styles.section2Input} type='text' readOnly defaultValue={items.lots} /> */}
                            <span className={styles.span}>{items.lots} </span>
                        </p>

                    </td>
                </tr>
                <tr className={styles.tr}>
                    <th className={styles.td}>ITT 2.1(a)</th>
                    <td className={styles.td}>
                        <p>[delete if not applicable]</p>
                        <p>Electronic –Procurement System</p>
                        <p>The Procuring Entity shall use the following electronic-procurement system to manage this Tendering process:
                            {/* <input className={styles.section2Input} placeholder='Name or address of link' defaultValue={items.enquiryAddress} /> */}
                            <span className={styles.span}>{items.enquiryAddress} </span>
                        </p>

                        <p>The electronic-procurement system shall be used to manage the following aspects of the Tendering process:</p>
                        <p>[list aspects here and modify the relevant parts of the TDS accordingly e.g., issuing Tendering document, submissions of Tenders, opening of Tenders]</p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <th className={styles.td}>ITT 3.3</th>
                    <td className={styles.td}>
                        <p>The firms that provided consulting services for the contract being tendered for are:</p>
                        {/* <input className={styles.section2Input} type='text' defaultValue={items.firmsProvidingConsultancy}/> */}
                        <span className={styles.span}>{items.firmsProvidingConsultancy} </span>

                    </td>
                </tr>
                <tr className={styles.tr}>
                    <th className={styles.td}>ITT 4.1</th>
                    <td className={styles.td}><p>Maximum number of members in the Joint Venture (JV) shall be:
                        {/* <input className={styles.section2Input} type='text' defaultValue={items.JVmax} /> */}
                    
                    <span className={styles.span}>{items.JVmax} </span>
                    </p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <th className={styles.td} colSpan={2}>B. Contents of Tendering Document
                    </th>
                </tr>

                <tr className={styles.tr}>
                    <th className={styles.td} >ITT 7.1</th>
                    <td className={styles.td}>
                        <p>The contact address is:</p>
                        <p>Attention
                            <input className={styles.section2Input} placeholder='FullName' />
                            <span className={styles.span}></span>
                        </p>
                        <p>Postal Address:
                            <input className={styles.section2Input} type='text' />
                            <span className={styles.span}></span>
                        </p>
                        <p>Physical address:
                            <input className={styles.section2Input} type='text' />
                            <span className={styles.span}></span>
                        </p>
                        <p>Telephone:
                            <input className={styles.section2Input} type='text' />
                            <span className={styles.span}></span>
                        </p>
                        <p>Electronic mail address:
                            <input className={styles.section2Input} type='text' />
                            <span className={styles.span}></span>
                        </p>
                    </td>
                </tr>

            </table>

        </div>
    )
}
export default Section2