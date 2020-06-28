import React, { createContext, useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'

//import * as auth from '../Services/Auth'

const AuthContext = createContext({ signed: false })

export const AuthProvider = ({ children }) => {

    const [usuario, SetUsuario] = useState({ email: '', token: '' })
    //const [token, SetToken] = useState(null)

    async function signIn(user) {
        if (user) {
            const { email, uid } = user

            SetUsuario({ email, uid })
        }else{
            SetUsuario(null)
        }
    }

    useEffect(() => {
        const subscriber = auth().onUserChanged(signIn);
        return () => {
            subscriber; // unsubscribe on unmount
        }
    }, []);

    console.log(usuario)

    return (
        <AuthContext.Provider value={{ signed: Boolean(usuario), signIn, usuario }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext