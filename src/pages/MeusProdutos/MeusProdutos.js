import React, { useContext, useState, useEffect } from 'react';

import ListaProdutos from '../../Services/ListaProdutos';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthContext from '../../Contexts/Auth';
import api from '../../Services/api';

import styles from './style';

export default function MeusProdutos({ route }) {

    const { Estabelecimento } = useContext(AuthContext);

    const [produtos, setProdutos] = useState({
        data: [],
        page: 1,
        loading: false,
    });

    const [texto, setTexto] = useState();

    const navigation = useNavigation();

    const categoriaId = route.params;

    console.log(`Produtos/Pesquisar/${Estabelecimento.id}/${categoriaId}/${1}`);

    const LoadListaProdutos = async () => {
        console.log("((((((((((((((((((((Buscar produtos 111111111))))))))))))))))))))");
        if (produtos.loading) return;

        const { page } = produtos;

        setProdutos({ loading: true });

        console.log(`Produtos/${categoriaId}/${Estabelecimento.id}/${produtos.page.toString()}`)

        api.get(`Produtos/${categoriaId}/${Estabelecimento.id}/${produtos.page}`).then(dados => {
            console.log("((((((((((((((((((((Buscar produtos 222222222222))))))))))))))))))))");
            console.log(dados.data)
            setProdutos({
                data: [...produtos.data, ...dados.data],
                page: produtos.page + 1,
                loading: false
            })
        }).catch(erro => {
            console.log("erro retorno da função listaProdutos")
            console.log(erro);
        });
    }

    useEffect(() => {
        console.log("((((((((((((((((((((Buscar produtos 3333333333))))))))))))))))))))");
        LoadListaProdutos()
        return () => {
            console.log("deu erro!")
        }
    }, [])

    const pesquisar = () => {
        if (texto) {
            console.log(`Produtos/Pesquisar/${Estabelecimento.id}/${categoriaId}/${texto}/${1}}`)
            api.get(`Produtos/Pesquisar/${Estabelecimento.id}/${categoriaId}/${texto}/${1}`).then(reponse => {
                console.log("<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
                console.log(reponse.data)
                setProdutos({
                    data: [...reponse.data],
                    page: produtos.page + 1,
                    loading: false
                })
            }
            ).catch(error => {
                console.log(error);
            })
        }
    }

    console.log("((((((((((((((((((((produtos renderizado))))))))))))))))))))");
    console.log('meus produtos => ' + produtos)
    return (
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <SearchBar
                    platform={'android'}
                    placeholder="Pesquise o produto"
                    containerStyle={styles.search}
                    inputStyle={styles.input}
                    placeholderTextColor={"#fff"}
                    onChangeText={text => setTexto(text)}
                    value={texto}
                />
                <TouchableOpacity onPress={pesquisar}><Text>Pesquisar</Text></TouchableOpacity>
            </View>
            <ListaProdutos navigation={navigation} Produtos={produtos.data ? produtos.data : []} LoadListaProdutos={LoadListaProdutos} loading={produtos.loading} />
        </View>
    )
}