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
    const EditaFotoEstabelecimento = async (FotoName) => {
        console.log("vai editar a img lá no banco")  
        console.log(FotoName)  
        api.put("Estabelecimento", {
            Id: Estabelecimento.id,
            Token: Estabelecimento.token,
            Email: Estabelecimento.email,
            Estabelecimento: Estabelecimento.estabelecimento,
            RazaoSocial: Estabelecimento.razaoSocial,
            Cnpj: Estabelecimento.cnpj,
            Ativo: true,
            Telefones: Estabelecimento.telefone,
            enderecos: Estabelecimento.enderecos,
            FotoName: FotoName
        }).then(dados => {
            setEstabelecimento(dados.data)            
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
        <EstabelecimentosContext.Provider value={{Estabelecimento, setEstabelecimento, EditaFotoEstabelecimento}} >
            {children}
        </EstabelecimentosContext.Provider>
    )

}

export default EstabelecimentoProvider