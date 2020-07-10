import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'

import storage from '@react-native-firebase/storage';

import Styles from './style.js'

export default function DetalhePedidos({ route }) {
    const dados = route.params


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
                    <View style={Styles.item1_1}></View>
                </View>
                <View style={Styles.item2}>
                    <View style={Styles.item2_1}></View>
                    <View style={Styles.item2_2}></View>
                </View>
                <View style={Styles.item3}>
                    <View style={Styles.item3_1}></View>
                    <View style={Styles.item3_2}></View>
                    <View style={Styles.item3_3}></View>
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
