import React, { createContext, useState,useEffect, useContext } from 'react';

import api from '../Services/api'
import AuthContext from './Auth';


export const ProdutosContext = createContext();

const ProdutosProvider = ({ children }) => {

    const {token} = useContext(AuthContext);

    const [categorias, setCategorias] = useState([]);

    const [teste, setTest] = useState();

    const LoadCategorias = async () => {
        console.log("entrou em load categorias")
        const getCategorias = await api.get("v1/Categorias", {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const {result} =  response.data
            setCategorias(result)
            console.log(result)
        }).catch(error => {
            console.log(error);
        })
    }

    const testando =  valor => {
        console.log(valor);
        setTest(valor);
    }

    useEffect(() => {
        LoadCategorias();
        return () => {
        }
    }, [])

    return (
        <ProdutosContext.Provider value={{categorias, testando, LoadCategorias}} >
            {children}
        </ProdutosContext.Provider>
    )

}

export default ProdutosProvider