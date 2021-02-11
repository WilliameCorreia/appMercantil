import React, { createContext, useState, useEffect, useContext } from 'react';

import api from '../Services/api'
import AuthContext from '../Contexts/Auth'
import oneSiganl from 'react-native-onesignal'

export const EstabelecimentosContext = createContext();

const EstabelecimentoProvider = ({ children }) => {

    const [Estabelecimento, setEstabelecimento] = useState([]);
    const [Catestabelecimento, setCatestabelecimento] = useState([]);
    const { usuario, token } = useContext(AuthContext);



    const LoadEstabelecimentos = async () => {
        const GetEstabelecimento = await api.get(`v1/Estabelecimentos/Token/${usuario.uid}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } = response.data
            setEstabelecimento(result)
        }).catch(error => {
            console.log(error);
        })
    }
    const getCatestabelecimento = () => {
        api.get("v1/TipoEstabelecimentos", {
            headers: {
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
        // console.log(Estabelecimento)
        // console.log(fotoName)
        if (Estabelecimento.fotoName !== fotoName) {
            console.log("era diferente")
            api.put(`v1/Estabelecimentos/${Estabelecimento.id}`, {
                token: Estabelecimento.token,
                email: Estabelecimento.email,
                _Estabelecimento: Estabelecimento.estabelecimentoR,
                razaoSocial: Estabelecimento.razaoSocial,
                cnpj: Estabelecimento.cnpj,
                ativo: true,
                tipoEstabId: Estabelecimento.tipoEstabId,
                tipoEstabelecimento: Estabelecimento.tipoEstabelecimento,
                telefones: Estabelecimento.telefone,
                enderecos: Estabelecimento.enderecos,
                fotoName: fotoName,
                tipo_Estabelecimento: Estabelecimento.tipo_Estabelecimento
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(dados => {
                setEstabelecimento(dados.data.result)
                // console.log("**********************************************")     
                // console.log(dados.data.result)     
            }).catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        LoadEstabelecimentos();
        getCatestabelecimento();
        return () => {
        }
    }, [])
    useEffect(() => {
        if(Estabelecimento.id){
            oneSiganl.setExternalUserId(Estabelecimento.id.toString());
        }else{
            oneSiganl.removeExternalUserId();
        }
    }, [Estabelecimento, usuario])

    return (
        <EstabelecimentosContext.Provider value={{ Estabelecimento, setEstabelecimento, EditaFotoEstabelecimento, Catestabelecimento }} >
            {children}
        </EstabelecimentosContext.Provider>
    )

}

export default EstabelecimentoProvider