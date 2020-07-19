import React, { createContext, useState, useEffect } from 'react'
import { Alert } from 'react-native'

import auth from '@react-native-firebase/auth'
import Api from '../Services/api'

const AuthContext = createContext({ signed: false })

export const AuthProvider = ({ children }) => {

    const [usuario, SetUsuario] = useState({ email: '', token: '' })
    const [loading, SetLoading] = useState(true)
    const [Estabelecimento, setEstabelecimento] = useState(false);

    async function signIn(user) {
        setTimeout(() => {
            if (user) {
                GetEstabelecimento(user);
            } else {
                SetLoading(false)
                SetUsuario({ email: undefined })
            }
        }, 2000)
    }

    async function GetEstabelecimento(user) {
        const { email, uid } = user;
        console.log(uid)
        Api.get(`Estabelecimento/${uid}`).then(response => {
            let estabelecimento = response.data;
            if (Boolean(estabelecimento)) {
                setEstabelecimento(estabelecimento)
            } else {
                setEstabelecimento(Boolean(estabelecimento));
            }
            SetUsuario({ email, uid })
        }).catch(
            erro => {
                Alert.alert("não estabelecer conexão com a base de dados");
                SetLoading(false)
            }
        );
    }

    useEffect(() => {
        const subscriber = auth().onUserChanged(signIn);
        return () => {
            //subscriber
            // unsubscribe on unmount
        }
    }, []);

    console.log("authContext => " + Boolean(usuario.email))
    console.log("estabelecimento => " + Estabelecimento)
    return (
        <AuthContext.Provider value={{ signed: Boolean(usuario.email), signIn, usuario, loading, Estabelecimento }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext