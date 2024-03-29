import styles from './Address.module.css'
import { useState, useContext, useEffect } from 'react'
import { Context } from '@/states';


// mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Address = () => {
    const { user, showNext, mail, address } = useContext(Context)
    const [next, setNext] = showNext
    const [currentUser, setCurrentUser] = user
    const [addressDetails, setAddressDetails] = address
    
    

    const [text, setText] = useState("")

    const tester = () => {
        setAddressDetails(prev => ({ ...prev, userEmail: currentUser.email }))
        console.log(addressDetails.userEmail)
    }


    const nextButton = async () => {
        try {
            if (!addressDetails.address.postal || !addressDetails.address.code || !addressDetails.address.physical || !addressDetails.address.phone || !addressDetails.address.email) {
                return setText("Fill all details")
            }

            const fetchData = await fetch("http://localhost:3001/api/user/update/address", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(addressDetails)
            })
                .catch((error) => {
                console.log(error)
            })

            const res = await fetchData.json()
            if (res) {
               // get user from local storage
                const user = JSON.parse(localStorage.getItem("currentUser"))
                if (user) {
                    const updatedUser = { ...user, ...addressDetails }
                  //  Update localstorage
                    localStorage.setItem("currentUser", JSON.stringify(updatedUser))
                }
                setNext(true)
                console.log(addressDetails)
            }
            

            console.log(fetchData)
            console.log(addressDetails)

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className={`${styles.addressContainer}`} >
            <h2 className={styles.h2} >ADDRESS</h2>
            

            {/* mui inputs */}
            <div className={styles.flexAddress}>

                <div>
                    {console.log(currentUser)}
                    <p className={styles.error}>{text}</p>
                    <Box
                        className={styles.box}
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '40ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                className={styles.text}
                                id="standard-password-input"
                                label="Physical Address"
                                type="text"
                                variant="standard"
                                onChange={(e) => (setAddressDetails(prev => ({ ...prev, address: { ...prev.address, physical: e.target.value } })))}
                            />
                        </div>

                        <div>
                            <TextField
                                className={styles.text}
                                id="standard-password-input"
                                label="Postal Address"
                                type="text"
                                variant="standard"
                                onChange={(e) => setAddressDetails(prev => ({ ...prev, address: { ...prev.address, postal: e.target.value } }))}

                            />
                        </div>

                        <div>
                            <TextField
                                className={styles.text}
                                id="standard-password-input"
                                label="Postal Code"
                                type="text"
                                variant="standard"
                                onChange={(e) => setAddressDetails(prev => ({ ...prev, address: { ...prev.address, code: e.target.value } }))}

                            />
                        </div>
                        <div>
                            <TextField
                                className={styles.text}
                                id="standard-password-input"
                                label="Phone Number"
                                type="text"
                                variant="standard"
                                onChange={(e) => setAddressDetails(prev => ({ ...prev, address: { ...prev.address, phone: e.target.value } }))}

                            />
                        </div>
                        <div>
                            <TextField
                                className={styles.text}
                                id="standard-password-input"
                                label="Email"
                                type="email"
                                variant="standard"
                                onChange={(e) => setAddressDetails(prev => ({ ...prev, address: { ...prev.address, email: e.target.value } }))}

                            />
                        </div>


                    </Box>
                </div>

                <div>
                    <button className={styles.button} onClick={() => nextButton()} > NEXT</button></div>
            </div>
        </div>
    )
}
export default Address