import React, { createContext, useState,useEffect, useContext } from 'react';

import api from '../Services/api'
import AuthContext from '../Contexts/Auth'

export const EstabelecimentosContext = createContext();

const EstabelecimentoProvider = ({ children }) => {

    const [Estabelecimento, setEstabelecimento] = useState([]);
    const {usuario} = useContext(AuthContext);

    

    const LoadEstabelecimentos = async () => {       
        const GetEstabelecimento = await api.get(`Estabelecimento/${usuario.uid}`).then(response => {
            setEstabelecimento(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        LoadEstabelecimentos();
        return () => {
        }
    }, [])

    return (
        <EstabelecimentosContext.Provider value={{Estabelecimento, setEstabelecimento}} >
            {children}
        </EstabelecimentosContext.Provider>
    )

}

export default EstabelecimentoProvider