import React, { createContext, useState, useContext} from 'react'
import { useEffect } from 'react';

export const AuthContext = createContext()
export default function AuthProvider({children}){
    const initialAuthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    )

    useEffect(() => {
        if (authUser) {
          localStorage.setItem("Users", JSON.stringify(authUser));
        } else {
          localStorage.removeItem("Users"); // Optional: Clean up if user logs out
        }
      }, [authUser]);


    return(
      <AuthContext.Provider value = {[authUser, setAuthUser]}>
      {children}
       </AuthContext.Provider>
    )

}
export const useAuth = () => useContext(AuthContext)