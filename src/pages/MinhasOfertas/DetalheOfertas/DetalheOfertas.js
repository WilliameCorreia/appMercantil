import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import storage from '@react-native-firebase/storage';

import Styles from './style'
import AuthContext from '../../../Contexts/Auth';
import { ProdutosContext } from '../../../Contexts/ProdutoContext';

export default function DetalheOfertas({ route, navigation }) {    
    const { categorias } = useContext(ProdutosContext);
    const dados = route.params
    const quantidade = dados.quantidade == 0 ? "EM FALTA" : dados.quantidade 

    const EncerraOferta = () => {
        console.log("vai encerrar");
        navigation.navigate('Ofertas'); 

    //     api.put(`v1/Produtos/${dados.id}`, {

    //     }, { 
    //         headers: {
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }).then(response => {
    //         const { result } = response.data;
    //         const emOferta = result.filter(oferta => oferta.oferta === true)
    //         setOfertas({
    //             data: emOferta,
    //             page: ofertas.page,
    //             loading: true
    //         })    
    //     }).catch(erro => {
    //         console.log(erro);
    //     });

    }

    return (
        <KeyboardAwareScrollView style={Styles.container}>
            <View style={Styles.box1}>
                <View style={Styles.item1}>
                    <View style={Styles.item1_1}>
                        <Text style={Styles.textCliente}>{dados._Produto.length > 16 ? `${dados._Produto.substring(0,16)}...` : dados._Produto }</Text>
                        <Text style={Styles.textPedido}>{dados.id}</Text>
                    </View>
                    <View style={Styles.item1_2}>
                        <Text style={Styles.StatusPedidoP}>{quantidade}</Text>
                    </View>
                </View>
                <View style={Styles.item2}>
                    <View style={Styles.item2_1}>
                        <Text style={Styles.item2_1Text}>QTD</Text>
                    </View>
                    <View style={Styles.item2_2}>
                        <Text style={Styles.item2_2Text}>PREÇO</Text>
                    </View>
                </View>
                <View style={Styles.item3}>
                    <View style={Styles.item3_1}>
                        <TextInput style={Styles.item3_1Input} value={dados.quantidade.toString()} />
                    </View>
                    <View style={Styles.item3_2}>
                        <TextInput style={Styles.item3_2Input} value={dados.preco}/>
                    </View>
                </View>
                <View style={Styles.item4}>
                    <View style={Styles.item4_1}>
                        <Text style={Styles.item4_1Text}>CATEGORIA</Text>
                    </View>
                </View>
                <View style={Styles.item5}>
                    <View style={Styles.item5_1}>
                        <TextInput style={Styles.item5_1Input} value={categorias.find(cat => cat.id === dados.categoriaId).nome} />                         
                    </View>
                    <View style={Styles.item5_2}>
                        <TextInput style={Styles.item5_2Input} />
                    </View>
                </View>
                <View style={Styles.item6}>
                    <View style={Styles.item6_1}>
                        <Text style={Styles.item6_1Text}>DETALHES</Text>
                    </View>
                </View>
                <View style={Styles.item7}>
                    <View style={Styles.item7_1}>
                        <TextInput style={Styles.item7_1Input} value={dados._Produto.length > 16 ? `${dados._Produto.substring(16,64)}...` : dados._Produto }/>
                    </View>
                </View>
                {/* desativei pois nao vejo necessidade de alterar o produto em minhas ofertas */}
                {/* acho mais convieniente redirecionar o usuário até meus produtos */}
                {/* <View style={Styles.item8}>
                    <TouchableOpacity style={Styles.item8_1}>                        
                        <Text style={Styles.item8_1Text} >ALTERAR</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
            <View style={Styles.box2}>
                <View style={Styles.item9}>
                    <TouchableOpacity style={Styles.item9_1} onPress={EncerraOferta}>
                        <Text style={Styles.item9_1Text} >ENCERRAR OFERTA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#F5FCFF"
//       },    
// })
