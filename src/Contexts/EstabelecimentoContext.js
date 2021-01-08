import React, { createContext, useState,useEffect, useContext } from 'react';

import api from '../Services/api'
import AuthContext from '../Contexts/Auth'

export const EstabelecimentosContext = createContext();

const EstabelecimentoProvider = ({ children }) => {

    const [Estabelecimento, setEstabelecimento] = useState([]);
    const [Catestabelecimento, setCatestabelecimento] = useState([]);
    const { usuario, token } = useContext(AuthContext);

    

    const LoadEstabelecimentos = async () => {       
        const GetEstabelecimento = await api.get(`v1/Estabelecimentos/Token/${usuario.uid}`, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const {result} =  response.data
            setEstabelecimento(result)
        }).catch(error => {
            console.log(error);
        })
    }
    const getCatestabelecimento = () => {
        api.get("v1/TipoEstabelecimentos", {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } = response.data;
            setCatestabelecimento(result)
        }).catch(erro => {
            console.log(erro);
        });
    }
    const EditaFotoEstabelecimento = async (fotoName) => {
        api.put(`v1/Estabelecimentos/${Estabelecimento.id}`, {
            // Id: Estabelecimento.id,
            Token: Estabelecimento.token,
            Email: Estabelecimento.email,
            Estabelecimento: Estabelecimento.estabelecimento,
            RazaoSocial: Estabelecimento.razaoSocial,
            Cnpj: Estabelecimento.cnpj,
            Ativo: true,
            Telefones: Estabelecimento.telefone,
            enderecos: Estabelecimento.enderecos,
            fotoName: fotoName
        }, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(dados => {
            setEstabelecimento(dados.data)            
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        LoadEstabelecimentos();
        getCatestabelecimento();
        return () => {
        }
    }, [])

    return (
        <EstabelecimentosContext.Provider value={{Estabelecimento, setEstabelecimento, EditaFotoEstabelecimento, Catestabelecimento}} >
            {children}
        </EstabelecimentosContext.Provider>
    )

}

export default EstabelecimentoProvider