import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import storage from '@react-native-firebase/storage';

import Styles from './style'

export default function DetalheOfertas({ route }) {
    const dados = route.params
    const quantidade = dados.quantidade == 0 ? "EM FALTA" : dados.quantidade

    console.log(dados)

    return (
        <View style={Styles.container}>
            <View style={Styles.box1}>
                <View style={Styles.item1}>
                    <View style={Styles.item1_1}>
                        <Text style={Styles.textCliente}>{dados.produto}</Text>
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
                        <TextInput style={Styles.item3_1Input} />
                    </View>
                    <View style={Styles.item3_2}>
                        <TextInput style={Styles.item3_2Input} />
                    </View>
                </View>
                <View style={Styles.item4}>
                    <View style={Styles.item4_1}>
                        <Text style={Styles.item4_1Text}>CATEGORIA</Text>
                    </View>
                </View>
                <View style={Styles.item5}>
                    <View style={Styles.item5_1}>
                        <TextInput style={Styles.item5_1Input} />
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
                        <TextInput style={Styles.item7_1Input} />
                    </View>
                </View>
                <View style={Styles.item8}>
                    <TouchableOpacity style={Styles.item8_1}>                        
                        <Text style={Styles.item8_1Text} >ALTERAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.box2}>
                <View style={Styles.item9}>
                    <TouchableOpacity style={Styles.item9_1}>
                        <Text style={Styles.item9_1Text} >ENCERRAR OFERTA</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
