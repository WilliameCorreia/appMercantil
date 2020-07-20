import React, { createContext, useState,useEffect } from 'react';

import api from '../Services/api'

export const ProdutosContext = createContext();

const ProdutosProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);

    const LoadCategorias = async () => {

        const getCategorias = await api.get("Categorias").then(response => {
            setCategorias(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        LoadCategorias();
        return () => {
        }
    }, [])

    return (
        <ProdutosContext.Provider value={{categorias}} >
            {children}
        </ProdutosContext.Provider>
    )

}

export default ProdutosProvider