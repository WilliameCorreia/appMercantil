import React, { createContext, useState } from 'react'

import * as auth from '../Services/Auth'

const AuthContext = createContext({signed: false})

export const AuthProvider = ( { children } ) => {

    const [usuario, SetUsuario] = useState(null)

    async function signIn(){
       const response = auth.SignIn().then(dados =>{
           console.log(dados)
       })
       SetUsuario(response)
    }

    return(
        <AuthContext.Provider value={{ signed: Boolean(usuario),  signIn, usuario}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext