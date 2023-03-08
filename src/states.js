
import { createContext, useState } from "react";

export const Context = createContext()

const States = ({ children }) => {
    const [currentUser, setcurrentUser] = useState({})
    const [next, setNext] = useState()
    const [emailState, setEmailState]=useState("")
    return (
        <Context.Provider value={{ user: [currentUser, setcurrentUser], showNext: [next, setNext], mail: [emailState, setEmailState] }}>
            {children}
        </Context.Provider>
    )
}

export default States