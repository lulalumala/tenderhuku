import styles from "./Section4.module.css"




const Section4 = () => {
    return (
        <div>
            {/* TENDERING FORMS */}
            <h2>TENDERING FORM</h2>
            <div>
                <h3>Form of tender</h3>
                <p>INSTRUCTION TO TENDERERS</p>

                <p>TENDERER INFORMATION FORM</p>
                <input className={styles.section4input} type="text" placeholder="Date of submission" />
                <input className={styles.section4input} type="text" placeholder="Tender name and identification" />
                <input className={styles.section4input} type="text" placeholder="Date of submission" />
                <input className={styles.section4input} type="text" placeholder="To" />
                <input className={styles.section4input} type="text" placeholder="Name of tenderer" />
                <input className={styles.section4input} type="text" placeholder="Name of person on behalf of tenderer" />
                <input className={styles.section4input} type="text" placeholder="Title" />
                <input className={styles.section4input} type="text" placeholder="Date" />
                <ul>
                    <li>We have examined and have no reservations to the tendering document, including Addenda issued in accordance with Instructions to Tenderers (ITT8);</li>
                    <li>We meet the eligibility requirements and have no conﬂict of interest in accordance with ITT4;</li>
                    <li>We have not been suspended nor declared ineligible by the Procuring Entity based on execution of Tender-SecuringDeclarationorProposal-SecuringDeclarationinKenyainaccordancewithITT4.8;</li>
                    <li>We offer to supply in conformity with the tendering document and in accordance with the Delivery Schedules speciﬁed in the Schedule of Requirements the following Goods: [insert a brief description of the Goods and Related Services];</li>

                </ul>
            </div>




            <div>
                <h3>TENDERER'SELIGIBILITY-CONFIDENTIALBUSINESSQUESTIONNAIRE</h3>
                <h3>Instruction to Tenderer</h3>
                <p>Tender is instructed to complete the particulars required in this Form, one form for each entity if Tender is a JV. Tenderer is further reminded that it is an offence to give false information on this Form.</p>
                <p>a. Tenderer's details</p>
                <table className={styles.table}>
                    <tr>
                        <th className={styles.td}> </th>
                        <th className={styles.td}>ITEM</th>
                        <th className={styles.td}>DESCRIPTION</th>
                    </tr>
                    <tr>
                        <th className={styles.td}>1</th>
                        <th className={styles.td}>Name of the Procuring Entity</th>
                        <th className={styles.td}></th>
                    </tr>
                    <tr>
                        <th className={styles.td}>2</th>
                        <th className={styles.td}>Reference Number of the Tender</th>
                        <th className={styles.td}></th>
                    </tr>
                    <tr>
                        <th className={styles.td}>3</th>
                        <th className={styles.td}>Date and Time of Tender Opening</th>
                        <th className={styles.td}></th>
                    </tr>
                    <tr>
                        <th className={styles.td}>4</th>
                        <th className={styles.td}>Name of the Tenderer</th>
                        <th className={styles.td}></th>
                    </tr>
                    <tr>
                        <th className={styles.td}>5</th>
                        <th className={styles.td}>Full Address and Contact Details of the Tenderer.</th>
                        <th className={styles.td}>
                            <ol>
                                <li>Country</li>
                                <li>City</li>
                                <li>Location</li>
                                <li>Building</li>
                                <li>Floor</li>
                                <li>Postal address</li>
                                <li>Name and email of contact person</li>
                            </ol>
                        </th>
                    </tr>
                    <tr>
                        <th className={styles.td}>6</th>
                        <th className={styles.td}>Current Trade License Registration Number and Expiring date</th>
                        <th className={styles.td}></th>
                    </tr>
                    <tr>
                        <th className={styles.td}>7</th>
                        <th className={styles.td}>Name, country and full address (postal and physical addresses, email, and telephone number) of Registering Body/Agency.</th>
                        <th className={styles.td}></th>
                    </tr>
                    <tr>
                        <th className={styles.td}>8</th>
                        <th className={styles.td}>Description of Nature of Business</th>
                        <th className={styles.td}></th>
                    </tr>
                    <tr>
                        <th className={styles.td}>9</th>
                        <th className={styles.td}>Maximum value of business which the Tenderer handles.</th>
                        <th className={styles.td}></th>
                    </tr>
                    <tr>
                        <th className={styles.td}>10</th>
                        <th className={styles.td}>State if Tenders Company is listed in stock exchange, give name and full address (postal and physical addresses, email, and telephone number) of
                            state which stock exchange</th>
                        <th className={styles.td}></th>
                    </tr>
                </table>
                <p>General and specific details</p>
                <p>b. Sole Proprietor, provide the following details.</p>
                <input className={styles.section4input} type="text" placeholder="Name in full" />
                <input className={styles.section4input} type="text" placeholder="Age" />
                <input className={styles.section4input} type="text" placeholder="Nationality" />
                <input className={styles.section4input} type="text" placeholder="Country of origin" />
                <input className={styles.section4input} type="text" placeholder="Citizenship" />
            </div>
        </div>
    )
}
export default Section4