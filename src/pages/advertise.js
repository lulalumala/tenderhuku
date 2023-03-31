import styles from '../styles/Advertise.module.css'
import Nav from '@/components/Nav/Nav'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Advertise = () => {
    
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
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("currentUser"))
        setFields(prev => ({ ...prev, userId: user._id }))
        setFields(prev => ({ ...prev, address: user.address }))
        setFields(prev=>({...prev, company: user.company}))
                
    }, [])
    
    const router=useRouter()

    const advertiseButton = async() => {
        const fetchData = await fetch("http://localhost:3001/api/user/tender/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fields)

        })  
        console.log(fields)
       router.push("/") 
    }

    return (
        <div>
            <Nav />

            <div className={styles.add} >
                <Box
                    className={styles.box}
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '80ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <div>
                        <TextField
                            className={styles.text}
                            id="standard-password-input"
                            label="Category"
                            type="text"
                            variant="standard"
                            onChange={(e) => (setFields(prev => ({ ...prev, category: e.target.value })))}
                        />
                    </div>

                    <div>
                        <TextField
                            className={styles.text}
                            id="standard-password-input"
                            label="Reference number"
                            type="text"
                            variant="standard"
                            onChange={(e) => (setFields(prev => ({ ...prev, referenceNo: e.target.value })))}
                        />
                    </div>

                    <div>
                        <TextField
                            className={styles.text}
                            id="standard-password-input"
                            label="Tender name"
                            type="text"
                            variant="standard"
                            onChange={(e) => setFields(prev => ({ ...prev, tenderName: e.target.value }))}
                        />
                    </div>

                    <div>
                        <TextField
                            className={styles.text}
                            id="standard-password-input"
                            label="Number of lots"
                            type="text"
                            variant="standard"
                            onChange={(e) => setFields(prev => ({ ...prev, lots: e.target.value }))}
                        />
                    </div>

                    <div>
                        <TextField
                            className={styles.text}
                            id="standard-password-input"
                            label="Tender description"
                            type="text"
                            variant="standard"
                            onChange={(e) => (setFields(prev => ({ ...prev, tenderDescription: e.target.value })))}
                        />
                    </div>

                    <div>
                        <TextField
                            className={styles.text}
                            id="standard-password-input"
                            label="Enquiry address"
                            type="text"
                            variant="standard"
                            onChange={(e) => (setFields(prev => ({ ...prev, enquiryAddress: e.target.value })))}
                        />
                    </div>


                    <div>
                        <TextField
                            className={styles.text}
                            id="standard-password-input"
                            label="Firm providing consultancy"
                            type="text"
                            variant="standard"
                            onChange={(e) => (setFields(prev => ({ ...prev, firmsProvidingConsultancy: e.target.value })))}
                        />
                    </div>



                    <div>
                        <TextField
                            className={styles.text}
                            id="standard-password-input"
                            label="Maximum number of joint venture"
                            type="text"
                            variant="standard"
                            onChange={(e) => (setFields(prev => ({ ...prev, JVmax: e.target.value })))}
                        />
                    </div>

                    <div>
                        <TextField
                            className={styles.text}
                            id="standard-password-input"
                            label="Opening date"
                            type="text"
                            variant="standard"
                            onChange={(e) => (setFields(prev => ({ ...prev, openingDate: e.target.value })))}
                        />
                    </div>

                    <div>
                        <TextField
                            className={styles.text}
                            id="standard-password-input"
                            label="Closing date"
                            type="text"
                            variant="standard"
                            onChange={(e) => (setFields(prev => ({ ...prev, closingDate: e.target.value })))}
                        />
                    </div>

                </Box>
            </div>
            <button className={styles.button} onClick={advertiseButton}>Publish</button>


        </div>
    )
}
export default Advertise