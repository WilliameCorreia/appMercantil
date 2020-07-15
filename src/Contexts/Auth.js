import React, { createContext, useState, useEffect } from 'react'

import auth from '@react-native-firebase/auth'
import Api from '../Services/api'
//import * as auth from '../Services/Auth'

const AuthContext = createContext({ signed: false })

export const AuthProvider = ({ children }) => {

    const [usuario, SetUsuario] = useState({ email: '', token: '' });
    const [loading, SetLoading] = useState(true);
    const [estabelecimento, setEstabelecimento] = useState(false);

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
            console.log(response.data)
            let estabelecimento = response.data;
            if (estabelecimento.ativo) {
                setEstabelecimento(estabelecimento) 
                console.log("1111111111111111111111")
            }else{
                setEstabelecimento(null);
                console.log("2222222222222222222222")
            }
            SetUsuario({ email, uid })
        }).catch(
            erro => {
                console.log("333333333333333333333")
                console.log(erro);
            }
        );
    }

    useEffect(() => {
        const subscriber = auth().onUserChanged(signIn);
        return () => {
            subscriber; // unsubscribe on unmount
        }
    }, []);

    console.log("authContext => " + usuario.email)
    console.log("estabelecimento => " + estabelecimento)
    return (
        <AuthContext.Provider value={{ signed: Boolean(usuario.email), signIn, usuario, loading, estabelecimento }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext