
import { createContext, useState } from "react";

export const Context = createContext()

const States = ({ children }) => {
    const [currentUser, setcurrentUser] = useState({})
    const [next, setNext] = useState()
    return (
        <Context.Provider value={{ user: [currentUser, setcurrentUser], showNext: [next, setNext] }}>
            {children}
        </Context.Provider>
    )
}

export default States