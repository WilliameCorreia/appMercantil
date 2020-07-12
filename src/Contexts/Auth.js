import React, { createContext, useState, useEffect } from 'react'

import auth from '@react-native-firebase/auth'
import Api from '../Services/api'
//import * as auth from '../Services/Auth'

const AuthContext = createContext({ signed: false })

export const AuthProvider = ({ children }) => {

    const [usuario, SetUsuario] = useState({ email: '', token: '' });
    const [loading, SetLoading] = useState(true);
    const [estabelecimento, setEstabelecimento] = useState();

    async function signIn(user) {
        setTimeout(() =>{
            if (user) {
                const { email, uid } = user
                SetUsuario({ email, uid })
            }else{
                SetLoading(false)
                SetUsuario({email: undefined})
                console.log("entro aqui")
            }
        },2000)
    }

    async function GetEstabelecimento(){
        Api.get("Estabelecimento/Index").then(response =>{
            let id = response.data[0];
            setEstabelecimento( id )
            console.log(id)
        }).catch(
            erro =>{
                console.log(erro);
            }
        );
    }

    useEffect(() => {
        const subscriber = auth().onUserChanged(signIn);
        GetEstabelecimento();
        return () => {
            subscriber; // unsubscribe on unmount
        }
    }, []);

    console.log("authContext => " + usuario.email)

    return (
        <AuthContext.Provider value={{ signed: Boolean(usuario.email), signIn, usuario, loading, estabelecimento }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext