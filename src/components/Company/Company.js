import styles from './Company.module.css'
import * as React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ImageIcon from '@mui/icons-material/Image';
import { ref, uploadString } from "firebase/storage";
import { storage } from "../../firebase";
import loader from "../../assets/load.gif"
import { Context } from '@/states';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';

const Company = () => {
    const [company, setCompany] = React.useState({
        logo: "",
        certificate: "",
        licence: "",
        place: "",
        name: ""
    })
    const [base64, setbase64] = React.useState({
        logo: "",
        certificate: "",
        licence: ""
    })
    const [loading, setLoading] = React.useState({
        logo: false,
        certificate: false,
        licence: false
    })

    const { showNext, address } = useContext(Context)
    const [next, setNext] = showNext
    const [text, setText] = useState("")
    const [addressDetails, setAddressDetails] = address


    const router = useRouter()

    const uploadImage = (e, destination) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        const storageRef = ref(storage, `${destination}/${file.name}`);
        reader.onload = () => {

            if (destination === "logos") {
                setLoading(prev => ({ ...prev, logo: true }))
            }
            if (destination === "Registration Certificate") {
                setLoading(prev => ({ ...prev, certificate: true }))
            }
            if (destination === "Business Licence") {
                setLoading(prev => ({ ...prev, licence: true }))
            }


            uploadString(storageRef, reader.result, 'data_url').then((snapshot) => {
                // console.log('Uploaded a data_url string!');
                destination === "logos" && setAddressDetails(prev => ({ ...prev, company: ({ ...prev.company, logo: `https://firebasestorage.googleapis.com/v0/b/tendarize-9ad09.appspot.com/o/logos%2F${file.name}?alt=media` }) }))
                setLoading(prev => ({ ...prev, logo: false }))

                destination === "Registration Certificate" && setAddressDetails(prev => ({ ...prev, company: { ...prev.company, certificate: `https://firebasestorage.googleapis.com/v0/b/tendarize-9ad09.appspot.com/o/logos%2F${file.name}?alt=media` } }))
                setLoading(prev => ({ ...prev, certificate: false }))

                destination === "Business Licence" && setAddressDetails(prev => ({ ...prev, company: ({ ...prev.company, licence: `https://firebasestorage.googleapis.com/v0/b/tendarize-9ad09.appspot.com/o/logos%2F${file.name}?alt=media` }) }))
                setLoading(prev => ({ ...prev, licence: false }))
            });
        }
    }

    const previousButton = () => {
        setNext(false)
    }

    const completeButton = async () => {
        setAddressDetails(prev=>({...prev.company, profileComplete:true}))
        try {
            if (!addressDetails.company.logo || !addressDetails.company.certificate || !addressDetails.company.licence || !addressDetails.company.placeOfRegistration || !addressDetails.company.name) {
                return setText("Enter all fields")
            } else {
                setText("")
                const fetchData = await fetch("http://localhost:3001/api/user/update/company", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(addressDetails)
                })
                const res = await fetchData.json()
                
                router.push("/home")
                return console.log(addressDetails)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={`${styles.company}`}>
            <h2 className={styles.h2} >COMPANY DETAILS</h2>
            {text && <p>{text}</p>}



            {/* materialui ui inputs */}
            <Box
                className={styles.box}
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '37ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <div>

                    <TextField
                        className={styles.text}
                        id="standard-password-input"
                        label="Company Name"
                        type="text"
                        variant="standard"
                        onChange={(e) => setAddressDetails(prev => ({ ...prev, company: { ...prev.company, name: e.target.value } }))}

                    />
                </div>

                <div>

                    <TextField
                        className={styles.text}
                        id="standard-password-input"
                        label="Place of registration"
                        type="text"
                        variant="standard"
                        onChange={(e) => (setAddressDetails(prev => ({ ...prev, company: { ...prev.company, placeOfRegistration: e.target.value } })))}
                    />
                </div>
            </Box>



            <div className={styles.itemsDiv} >
                {loading.logo ? <Image className={styles.loader} src={loader} alt="gif file" /> :
                    <div className={styles.div} >
                        {addressDetails.company.logo !== "" && <p className={styles.p}>Company Logo</p>}
                        <label htmlFor="logo" className={styles.label}
                        > {addressDetails.company.logo !== "" ?
                            <div className={styles.picLabel} >
                                {/* <p className={styles.p} >Company logo</p> */}
                                <Image width={100} height={100} className={styles.randomPic} src={addressDetails.company.logo} alt="logo img" />
                            </div> : <div className={styles.textLabel} > "Upload Company logo" <ImageIcon />
                            </div>}
                        </label>
                        <input id="logo"
                            onChange={(e) => uploadImage(e, "logos")}
                            className={styles.pic} type='file' />
                    </div>}
            </div>
            {/* <div className={styles.div} >
                <p>Name of your company</p>
                <input type='text' />
            </div> */}
            {/* <div className={styles.div} ><p>Constitution</p> <input type='file' /></div> */}
            {/* <div className={styles.div} ><p>Power of Attorney</p> <input type='file' /></div> */}

            <div className={styles.itemsDiv} >
                {loading.certificate ? <Image className={styles.loader} src={loader} alt="gif file" /> :
                    <div className={styles.div} >
                        {addressDetails.company.certificate !== "" && <p className={styles.p}>Company Certificate</p>}
                        <label htmlFor="cert" className={styles.label}>
                            {addressDetails.company.certificate !== "" ?
                                <div className={styles.picLabel} >
                                    {/* <p className={styles.p}>Registration Certificate</p> */}
                                    <Image width={100} height={100} className={styles.randomPic} src={addressDetails.company.certificate} alt="certificate" />
                                </div> : <div className={styles.textLabel}>
                                    "Upload Registration Certificate"
                                    <ImageIcon />
                                </div>}
                        </label>
                        <input type='file' id="cert" className={styles.pic}
                            onChange={(e) => uploadImage(e, "Registration Certificate")} />
                    </div>}
            </div>


            {/* licence */}
            <div className={styles.itemsDiv} >
                {loading.licence ? <Image className={styles.loader} src={loader} alt="gif file" /> :
                    <div className={styles.div} >
                        {addressDetails.company.licence !== "" && <p className={styles.p}>Company Certificate</p>}

                        <label htmlFor="licence" className={styles.label}>
                            {addressDetails.company.licence !== "" ?
                                <div className={styles.picLabel} >
                                    <Image width={100} height={100} className={styles.randomPic} src={addressDetails.company.licence} alt="licence" />
                                </div> :
                                <div className={styles.textLabel}>"Upload Business License"
                                    <ImageIcon />
                                </div>}
                        </label>
                        <input type='file' id="licence" className={styles.pic}
                            onChange={(e) => uploadImage(e, "Business Licence")} />
                    </div>}
            </div>



            <div className={styles.buttons} >

                <button onClick={previousButton}
                    className={`${styles.button} ${styles.previousButton}`} >PREVIOUS</button>
                <button className={`${styles.button} ${styles.completeButton}`} onClick={completeButton}>COMPLETE</button>
            </div>



        </div>
    )
}
export default Company