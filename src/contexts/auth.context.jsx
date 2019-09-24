import React from 'react'
import { auth } from '../firebase/firebase'

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [userData, setUserData] = React.useState(null)
    const [isAuth, setIsAuth] = React.useState(Boolean(userData))
    const [loading, setLoading] = React.useState(true)
    
    // const isAuth = Boolean(userData);
    // console.log('userData')
    // console.log(userData)

    React.useEffect(() => {
        auth.onAuthStateChanged(user => {
            // console.log('change...')
            // console.log(isAuth)
            if(user) {
                // console.log(user)
                setUserData({email: user.email, uid: user.uid, photoURL: user.photoURL , displayName: user.displayName, providerId: user.providerData[0].providerId /*,  emailVerified: user.emailVerified */});
                setIsAuth(true)
            } else {
                setUserData({});
                setIsAuth(false)
            }
            setLoading(false)
        })
    }, [isAuth])

    return (
        <AuthContext.Provider value={{userData: userData, isAuth: isAuth, loading: loading}}>
            {children}
        </AuthContext.Provider>
    )
}

