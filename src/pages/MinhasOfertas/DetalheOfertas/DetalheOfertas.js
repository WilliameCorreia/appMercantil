import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'

import storage from '@react-native-firebase/storage';

import Styles from './style'

export default function DetalheOfertas({ route }) {
    const dados = route.params
    const quantidade = 0 == 0 ? "EM FALTA" : dados.quantidade

    console.log(dados)


    // function somar() {
    //     let total = 0;
    //     dados.itens.map(
    //         item => { total += item.preco }
    //     )
    //     return total
    // }


    return (
        <View style={Styles.container}>
            <View style={Styles.box1}>
                <View style={Styles.item1}>
                    <View style={Styles.item1_1}>
                        {/* <Text style={Styles.textCliente}>{dados.cliente}</Text> */}
                        {/* <Text style={Styles.textPedido}>{dados.id}</Text> */}
                    </View>
                    <View style={Styles.item1_2}>
                        <Text style={Styles.StatusPedidoP}>{quantidade}</Text>
                    </View>
                </View>
                <View style={Styles.item2}>
                    <View style={Styles.item2_1}>
                        <Image source={require("../../../Assets/11.png")} style={Styles.ImgLoction}></Image>
                    </View>
                    <View style={Styles.item2_2}>
                        {/* <Text style={Styles.TextEndereco}>{dados.endereco}</Text> */}
                        {/* <Text style={Styles.TextTelefone}>{dados.telefone}</Text> */}
                    </View>
                </View>
                <View style={Styles.item3}>
                    <View style={Styles.item3_1}>
                        <Image source={require("../../../Assets/12.png")} style={Styles.item3_1Img}></Image>
                        <Text style={Styles.item3_1Text}>Qnt.</Text>
                    </View>
                    <View style={Styles.item3_2}>
                        <Text style={Styles.item3_2Text}>Produto</Text>
                    </View>
                    <View style={Styles.item3_3}>
                        <Text style={Styles.item3_3Text}>Preço</Text>
                    </View>
                </View>
                <View style={Styles.item4}>
                    {/*dados.map(item =>
                        <View style={Styles.item4_1}>
                            <View style={Styles.item4_1_A}>
                                <Text style={Styles.item4_1_AText}>{item.id}</Text>
                            </View>
                            <View style={Styles.item4_1_B}>
                                <Text style={Styles.item4_1_BText}>{item.produto}</Text>
                            </View>
                            <View style={Styles.item4_1_C}>
                                <Text style={Styles.item4_1_CText}>{item.preco}</Text>
                            </View>
                        </View>
                    )*/}
                    <View style={Styles.item4_1}>
                        <View style={Styles.item4_1_A}>
                            <Text style={Styles.item4_1_AText}>{dados.id}</Text>
                        </View>
                        <View style={Styles.item4_1_B}>
                            <Text style={Styles.item4_1_BText}></Text>
                        </View>
                        <View style={Styles.item4_1_C}>
                            <Text style={Styles.item4_1_CText}></Text>
                        </View>
                    </View>
                </View>
                <View style={Styles.item5}>
                    <View style={Styles.item5_1}>
                        <Text style={Styles.item5_1Text}>TOTAL</Text>
                    </View>
                    <View style={Styles.item5_2}>
                        {/* <Text style={Styles.item5_2Text}>R$ {somar()}</Text> */}
                    </View>
                </View>
            </View>
            <View style={Styles.box2}>
                <View style={Styles.item6}>
                    <View style={Styles.item6_1}>
                        <Text style={Styles.item6_1Text}>STATUS</Text>
                    </View>
                    <View style={Styles.item6_2}>
                        {/* <Text style={Styles.item6_2Text}>{dados.status}</Text> */}
                    </View>
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
