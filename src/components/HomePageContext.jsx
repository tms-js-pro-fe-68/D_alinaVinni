import { createContext, useContext, useState } from "react";

const Context = createContext()

export const useHomePageContext = () => useContext(Context)

export default function HomePageContext({children, ...otherProps}){
    const [isInitialized, setInitialized] = useState(false)

    return <Context.Provider value={{isInitialized}}>
        {children}
    </Context.Provider>
}