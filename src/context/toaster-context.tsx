import { createContext, useState } from "react"
import Toaster from "../components/ui/toaster"

const ToasterContext = createContext({
    toaster: {},
    // eslint-disable-next-line no-empty-pattern
    setToaster: ({}) => {

    }
})

const ToasterProvider = ({ children } : { children: React.ReactNode }) => {
    const [toaster, setToaster] = useState({})
    return (
        <ToasterContext.Provider value={{ toaster, setToaster }}>
            {Object.keys(toaster).length > 0 && <Toaster />}
            {children}
        </ToasterContext.Provider>
    )
}

export { ToasterProvider, ToasterContext }