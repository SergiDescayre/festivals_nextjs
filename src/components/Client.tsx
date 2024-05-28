'use client'

import ContextProvider from "@/context/FestivalContext"

export const Client = ({children} : {children:React.ReactNode}) => {
    return <ContextProvider>
        {children}
        </ContextProvider>
}