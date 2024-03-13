import React,  { useState } from "react"

export const AuthContext = React.createContext()

export const AuthContextProvider = (props) =>{
const [auth, setAuth] = useState({
    isAuth: false,
    token: ""
})


    return(
        
            <AuthContext.Provider value="{{auth, setAuth}}">
            {props.children}
        </AuthContext.Provider>
        
    )
}