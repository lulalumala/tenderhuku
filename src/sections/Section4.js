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
                <input type="text" placeholder="Date of submission" />
                <input type="text" placeholder="Tender name and identification" />
                <input type="text" placeholder="Date of submission" />
                <input type="text" placeholder="To" />
                <input type="text" placeholder="Name of tenderer" />
                <input type="text" placeholder="Name of person on behalf of tenderer" />
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Date" />
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
                <table>
                    <tr>
                        <th></th>
                        <th>ITEM</th>
                        <th>DESCRIPTION</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>Name of the Procuring Entity</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Reference Number of the Tender</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>Date and Time of Tender Opening</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th>Name of the Tenderer</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th>Full Address and Contact Details of the Tenderer.</th>
                        <th>
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
                        <th>6</th>
                        <th>Current Trade License Registration Number and Expiring date</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>7</th>
                        <th>Name, country and full address (postal and physical addresses, email, and telephone number) of Registering Body/Agency.</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>8</th>
                        <th>Description of Nature of Business</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>9</th>
                        <th>Maximum value of business which the Tenderer handles.</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>10</th>
                        <th>State if Tenders Company is listed in stock exchange, give name and full address (postal and physical addresses, email, and telephone number) of
                            state which stock exchange</th>
                        <th></th>
                    </tr>
                </table>
                <p>General and specific details</p>
                <p>b. Sole Proprietor, provide the following details.</p>
                <input type="text" placeholder="Name in full" />
                <input type="text" placeholder="Age" />
                <input type="text" placeholder="Nationality" />
                <input type="text" placeholder="Country of origin" />
                <input type="text" placeholder="Citizenship" />
            </div>
        </div>
    )
}
export default Section4