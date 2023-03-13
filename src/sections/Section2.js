import styles from "./Section2.module.css"




const Section2 = () => {
    return (
        <div>
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
                            <input type='text' className={styles.section2Input} />
                        </p>

                        <p>The Procuring Entity is:
                            <input type='text' className={styles.section2Input} />
                        </p>

                        <p>The name of the Contract is:
                            <input type='text' className={styles.section2Input} />
                        </p>

                        <p>The number and identification of lots (contracts) comprising this Invitation for Tenders is: <input className={styles.section2Input} type='text' /></p>

                    </td>
                </tr>
                <tr className={styles.tr}>
                    <th className={styles.td}>ITT 2.1(a)</th>
                    <td className={styles.td}>
                        <p>[delete if not applicable]</p>
                        <p>Electronic –Procurement System</p>
                        <p>The Procuring Entity shall use the following electronic-procurement system to manage this Tendering process:<input className={styles.section2Input} placeholder='Name or address of link' /></p>

                        <p>The electronic-procurement system shall be used to manage the following aspects of the Tendering process:</p>
                        <p>[list aspects here and modify the relevant parts of the TDS accordingly e.g., issuing Tendering document, submissions of Tenders, opening of Tenders]</p>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <th className={styles.td}>ITT 3.3</th>
                    <td className={styles.td}>
                        <p>The firms that provided consulting services for the contract being tendered for are:</p>
                        <input className={styles.section2Input} type='text' />
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <th className={styles.td}>ITT 4.1</th>
                    <td className={styles.td}><p>Maximum number of members in the Joint Venture (JV) shall be:<input className={styles.section2Input} type='text' /> </p></td>
                </tr>
                <tr className={styles.tr}>
                    <th className={styles.td} colSpan={2}>B. Contents of Tendering Document
                    </th>
                </tr>
                <tr className={styles.tr}>
                    <th className={styles.td} >ITT 7.1</th>
                    <td className={styles.td}>
                        <p>The contact address is:</p>
                        <p>Attention <input className={styles.section2Input} placeholder='FullName' /></p>
                        <p>Postal Address: <input className={styles.section2Input} type='text' /></p>
                        <p>Physical address <input className={styles.section2Input} type='text' /></p>
                        <p>Telephone: <input className={styles.section2Input} type='text' /></p>
                        <p>Electronic mail address: <input className={styles.section2Input} type='text' /></p>
                    </td>
                </tr>

            </table>

        </div>
    )
}
export default Section2