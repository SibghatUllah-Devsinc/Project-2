import React from "react"


const newContext = React.createContext({
    isLoggedIn: false,
    userId:""
})

export default newContext