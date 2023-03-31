
import { createContext, useState } from "react";

export const Context = createContext()

const States = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [next, setNext] = useState()
    const [emailState, setEmailState] = useState("")
    const [addressDetails, setAddressDetails] = useState({
        userEmail: "",
        address: {
            postal: "",
            code: "",
            physical: "",
            phone: "",
            email: "",
        },
        company: {
            logo: "",
            name: "",
            registration: "",
            licence: "",
            placeOfRegistration: "",
            profileComplete: false
        }
    })

    const [items, setItems] = useState({
        category: "",
        referenceNo: "",
        tenderName: "",
        lots: "",
        enquiryAddress: "",
        firmsProvidingConsultancy: "",
        tenderDescription: "",
        JVmax: "",
        openingDate: "",
        closingDate: "",
        company: {},
        address:{}
    })

    const [userIn, setUserIn]=useState(false)


    return (
        <Context.Provider value={{ user: [currentUser, setCurrentUser], address: [addressDetails, setAddressDetails], showNext: [next, setNext], mail: [emailState, setEmailState], currentItem: [items, setItems], userOn:[userIn, setUserIn] }}>
            {children}
        </Context.Provider>
    )
}

export default States