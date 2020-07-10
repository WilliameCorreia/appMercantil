import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'

import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import { cond } from 'react-native-reanimated';

import Styles from './style.js'

export default function DetalhePedidos({ route }) {
    const dados = route.params
    // console.log(dados)


    const reference = storage().ref('/Categorias');

    const listaImagens = (reference, pageToken) => {
        return reference.list({ pageToken }).then(result => {
            result.items.forEach(ref => {
                ref.getDownloadURL().then(dados => console.log(dados))
            });
        })
    }

    useEffect(() => {
        listaImagens(reference).then(dados => {
            console.log(dados)
        })
    }, [])

    return (
        <View style={Styles.container}>
            <View style={Styles.box1}>
                <View style={Styles.item1}>
                    <View style={Styles.item1_1}>
                        <Text style={Styles.textCliente}>{dados.cliente}</Text>
                        <Text style={Styles.textPedido}>{dados.id}</Text>
                    </View>
                    <View style={Styles.item1_2}>
                        <Text style={Styles.StatusPedidoP}>{dados.status}</Text>
                    </View>
                </View>
                <View style={Styles.item2}>
                    <View style={Styles.item2_1}>
                        <Image source={require("../../../Assets/11.png")} style={Styles.ImgLoction}></Image>
                    </View>
                    <View style={Styles.item2_2}>
                        <Text style={Styles.TextEndereco}>{dados.endereco}</Text>
                        <Text style={Styles.TextTelefone}>{dados.telefone}</Text>
                    </View>
                </View>
                <View style={Styles.item3}>
                    <View style={Styles.item3_1}>
                        <Text style={Styles.TextHeader}>Qnt.</Text>
                    </View>
                    <View style={Styles.item3_2}>
                        <Text style={Styles.TextHeader}>Produto</Text>
                    </View>
                    <View style={Styles.item3_3}>
                        <Text style={Styles.TextHeader}>Preço</Text>
                    </View>
                </View>
                <View style={Styles.item4}>
                    <View style={Styles.item4_1}>
                        <View style={Styles.item4_1_A}>
                        </View>
                        <View style={Styles.item4_1_B}>
                        </View>
                        <View style={Styles.item4_1_C}>
                        </View>
                    </View>
                    <View style={Styles.item4_1}>
                        <View style={Styles.item4_1_A}>
                        </View>
                        <View style={Styles.item4_1_B}>
                        </View>
                        <View style={Styles.item4_1_C}>
                        </View>
                    </View>
                    <View style={Styles.item4_1}>
                        <View style={Styles.item4_1_A}>
                        </View>
                        <View style={Styles.item4_1_B}>
                        </View>
                        <View style={Styles.item4_1_C}>
                        </View>
                    </View>
                    <View style={Styles.item4_1}>
                        <View style={Styles.item4_1_A}>
                        </View>
                        <View style={Styles.item4_1_B}>
                        </View>
                        <View style={Styles.item4_1_C}>
                        </View>
                    </View>
                    <View style={Styles.item4_1}>
                        <View style={Styles.item4_1_A}>
                        </View>
                        <View style={Styles.item4_1_B}>
                        </View>
                        <View style={Styles.item4_1_C}>
                        </View>
                    </View>
                    <View style={Styles.item4_1}>
                        <View style={Styles.item4_1_A}>
                        </View>
                        <View style={Styles.item4_1_B}>
                        </View>
                        <View style={Styles.item4_1_C}>
                        </View>
                    </View>
                </View>
            </View>
            <View style={Styles.box2}>
                <View style={Styles.item6}>
                    <View style={Styles.item6_1}>
                        <Text style={Styles.item6_1Text}>STATUS</Text>
                    </View>
                    <View style={Styles.item6_2}>
                        <Text style={Styles.item6_2Text}>{dados.status}</Text>
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
