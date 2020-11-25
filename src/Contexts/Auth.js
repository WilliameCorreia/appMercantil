import React, { createContext, useState, useEffect } from 'react'
import { Alert } from 'react-native'

import auth from '@react-native-firebase/auth'
import Api from '../Services/api'
import { credencias } from '../credenciais'

const AuthContext = createContext({ signed: false })

export const AuthProvider = ({ children }) => {

    const [usuario, SetUsuario] = useState({ email: '', token: '' })
    const [loading, SetLoading] = useState(true);
    const [Estabelecimento, setEstabelecimento] = useState(false);
    const [token, setToken] = useState("");



    /* function Reload(params) {
        setTest(!params)
    } */

    async function signIn(user) {
        console.log("@@@@@@@@@@@@@@@@@SignIn@@@@@@@@@@@@@@@@@@@@@@@")
        setTimeout(() => {
            if (user) {
                GetEstabelecimento(user);
            } else {
                SetLoading(false)
                SetUsuario({ email: undefined })
            }
        }, 2000)
    }

    function getAuth() {
        Api.post("Auth/login", credencias).then(
            response => {
                const { token } = response.data
                setToken(token)
                console.log(token)

            }
        ).catch(error => console.log(error))
    }



    async function GetEstabelecimento(user) {
        if (token) {
            const { email, uid } = user;
            console.log(uid)
            // console.log(token)
            Api.get(`v1/Estabelecimentos/Token/${uid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {

                const { result } = response.data;
                if (Boolean(result)) {
                    setEstabelecimento(result)
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

    }

    useEffect(() => {
        getAuth();
        const subscriber = auth().onUserChanged(signIn);
    }, [token]);

    // useEffect(() => {
    //     const subscriber = auth().onUserChanged(signIn);
    //     // getAuth();
    // }, [token]);

    console.log("authContext => " + Boolean(usuario.email))
    console.log("estabelecimento => " + Estabelecimento)
    return (
        <AuthContext.Provider value={{ signed: Boolean(usuario.email), signIn, usuario, loading, Estabelecimento, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext