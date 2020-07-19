import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native'

import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import { cond } from 'react-native-reanimated';

import Styles from './style.js'

export default function MinhasOfertas({ navigation }) {
    const [ofertas, setOfertas] = useState(
        [
            {
                id: '#000001', produto: 'Arroz Branco', quantidade:0
            },
            {
                id: '#000002', produto: 'Feijão Preto', quantidade:0
            },
            {
                id: '#000003', produto: 'Alcatra', quantidade:0
            },
            {
                id: '#000004', produto: 'Laranja Pera', quantidade:0
            }
        ]
    )

    return (
        <ScrollView style={Styles.container}>
            <ScrollView>
                {ofertas.map(order =>
                    <TouchableOpacity style={Styles.box1}
                        onPress={() => navigation.navigate('DetalheOfertas', order)}
                    >
                        <View style={Styles.box1_1}>
                            <Text style={Styles.box1_1Text}>{order.produto}</Text>                            
                            <Text style={Styles.box1_1TextPedido}>{order.id}</Text>
                        </View>
                        <View style={Styles.box1_2}>
                            <Image source={require("../../Assets/Ofertas.png")} style={Styles.box1_2Img} />
                        </View>
                    </TouchableOpacity>
                )}
            </ScrollView>
            <TouchableOpacity>

            </TouchableOpacity>
        </ScrollView>
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
