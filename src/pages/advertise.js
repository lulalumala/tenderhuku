import styles from '../styles/Advertise.module.css'
import Nav from '@/components/Nav/Nav'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

// mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// sections
import Section1 from '@/sections/Section1';
import Section2 from '@/sections/Section2';
import Section3 from '@/sections/Section3';
import Section4 from '@/sections/Section4';
import Section5 from '@/sections/Section5';

const Advertise = () => {
    const [expand, setExpand] = useState({
        arrow: false,
        arrow2: false,
        arrow3: false,
        arrow4: false,
        arrow5: false
    })

    const [fields, setFields] = useState({
        referenceNo: "",
        tenderName: "",
        tenderDescription: "",
        enquiryAddress: "",
        firmsProvidingConsultancy: "",
        JVmax: "",
        openingDate: "",
        closingDate: ""
    })

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
                            onChange={(e) => (setFields(prev => ({ ...prev, openingDate:  e.target.value  })))}
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
<button className={styles.button}  onClick={()=>console.log(fields)}>Publish</button>


        </div>
    )
}
export default Advertise