import React, { useContext, useState, useEffect } from 'react';

import ListaProdutos from '../../Services/ListaProdutos';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthContext from '../../Contexts/Auth';
import ProdutoContext, { ProdutosContext } from '../../Contexts/ProdutoContext'
import api from '../../Services/api';

import styles from './style';

export default function MeusProdutos({ route }) {

    const { Estabelecimento, token } = useContext(AuthContext);

    const { LoadCategorias } = useContext(ProdutosContext);

    const [produtos, setProdutos] = useState({
        data: [],
        page: 1,
        loading: false,
    });

    const [texto, setTexto] = useState();

    const navigation = useNavigation();

    const categoriaId = route.params;


    const LoadListaProdutos = async () => {
       
        if (produtos.loading) return;

        const { page } = produtos;

        setProdutos({ loading: true });

       
        api.get(`v1/Produtos/${categoriaId}/${Estabelecimento.id}/${produtos.page}`, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } = response.data;
            setProdutos({
                data: [...result],
                page: produtos.page,
                loading: false
            })
        }).catch(erro => {
            console.log("erro retorno da função listaProdutos")
            console.log(erro);
        });
    }

    useEffect(() => {
        LoadListaProdutos()
        return () => {
            console.log("deu erro!")
        }
    }, [LoadCategorias])

    const pesquisar = () => {
        if (texto) {
            api.get(`v1/Produtos/pesquisar/${Estabelecimento.id}/${categoriaId}/${texto}/${1}`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                const { result } = response.data;
                setProdutos({
                    data: [...result],
                    page: produtos.page /* + 1 */,
                    loading: false
                })
            }
            ).catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <SearchBar
                    platform={'android'}
                    placeholder="Pesquise o produto"
                    containerStyle={styles.search}
                    inputStyle={styles.input}
                    placeholderTextColor={"#fff"}
                    onChangeText={text => text.length < 1 ? LoadListaProdutos() && setTexto(text): setTexto(text)}
                    value={texto}
                />
                <TouchableOpacity onPress={pesquisar} style={styles.btnPesquisar}><Text style={styles.textPesquisar}>Pesquisar</Text></TouchableOpacity>
            </View>
            <ListaProdutos navigation={navigation} Produtos={produtos.data ? produtos.data : []} LoadListaProdutos loading={produtos.loading}/>
        </View>
    )
}