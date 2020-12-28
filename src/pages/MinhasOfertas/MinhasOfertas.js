import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator, Image, FlatList } from 'react-native'


import Styles from './style.js'
import api from '../../Services/api.js';
import AuthContext from '../../Contexts/Auth.js';

export default function MinhasOfertas({ navigation }) {
    const [page, setPage] = useState (1)
    const [load, setLoad] = useState(false)
    const [lastPage, setLastPage] = useState(false);
    const [ofertas, setOfertas] = useState([]);
    const { Estabelecimento, token } = useContext(AuthContext);

    const getOfertas = () => {
        if (!lastPage) {
            setLoad(true);
            api.get(`v1/Produtos/${Estabelecimento.id}/${page}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                const { result } = response.data;
                if (result.length < 1) {
                    setLastPage(true); setLoad(false);
                } 
                else {
                    const emOferta = result.filter(oferta => oferta.oferta === true)
                    setOfertas(emOferta); setPage(page+1); setLoad(false);                  
                }
            }).catch(erro => {
                console.log(erro);
            });
        }

    }

    useEffect(() => {
        getOfertas()

    }, [])

    const _renderItem = ({ item }) => (
        <TouchableOpacity style={Styles.box1}
        onPress={() => navigation.navigate('DetalheOfertas', item)}
        >
            <View style={Styles.box1_1}>
                <Text style={Styles.box1_1Text}>{item._Produto.length > 16 ? `${item._Produto.substring(0, 16)}...` : item._Produto}</Text>
                <Text style={Styles.box1_1TextPedido}>{item.id.toString().length < 2 ? `#0${item.id}` : `#${item.id}`}</Text>
            </View>
            <View style={Styles.box1_2}>
                <Image source={require("../../Assets/Ofertas.png")} style={Styles.box1_2Img} />
            </View>
        </TouchableOpacity>
    )
    
    const renderFooter = () => {
        if (!load) return null;
        return (
            <View >
                <ActivityIndicator size="large" color="#000" />
            </View>
        )
    }
    
    const RenderEmpty = () => {
        return (
            <View >
                <Text >Nenhum produto Encontrado</Text>
            </View>
        )
    }
    
    return (
        <View style={Styles.container}>
            <FlatList
                data={ofertas}
                renderItem={_renderItem}
                keyExtractor={item => item.codeBar}
                onEndReached={() => getOfertas()}
                onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            // ListEmptyComponent={RenderEmpty}
            />
        </View>
    )
}
