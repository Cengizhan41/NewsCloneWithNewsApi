import { createContext, useState } from "react";


const SiteContext=createContext();

function SiteContextProvider({children}){
    const apiKey=import.meta.env.VITE_NEWS_API_KEY

    const[control,setControl]=useState(false);
    const[alert,setAlert]=useState(false)


    return(
        <SiteContext.Provider value={{
            apiKey,
            control,
            setControl,
            alert,
            setAlert}}>
            {children}
        </SiteContext.Provider>
    )
}

export {SiteContextProvider,SiteContext}