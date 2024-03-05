import { createContext, useState } from "react";

const GeneralContext = createContext()

export const GeneralProvider = ({children}) => {

    const [header, setHeader] = useState(false)
    const [animateHeader, setAnimateHeader] = useState(true);
    const changeHeader = (state) => {
        setHeader(state);
        setAnimateHeader(true);
    }

    const changeHeaderAnimation = (state) => {
        setAnimateHeader(state);
    }

    const [name, setName] = useState("")
    const changeName = (e) => {
        setName(e.target.value)
    }

    const [password, setPassword] = useState("")
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    return <GeneralContext.Provider value={{
        header, animateHeader, changeHeaderAnimation, changeHeader, name,changeName, password, changePassword
    }}>
        {children}
    </GeneralContext.Provider>
}

export default GeneralContext