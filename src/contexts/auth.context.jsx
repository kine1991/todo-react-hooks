import React from 'react'
import { auth } from '../firebase/firebase'

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [userData, setUserData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const isAuth = Boolean(userData);
    // console.log(isAuth)

    React.useEffect(() => {
        auth.onAuthStateChanged(user => {
            // console.log(user.email, user.uid)
            setUserData({email: user.email, uid: user.uid})
            setLoading(false)
        })
    }, [])

    return (
        <AuthContext.Provider value={{userData: userData, isAuth: isAuth, loading: loading}}>
            {children}
        </AuthContext.Provider>
    )
}

