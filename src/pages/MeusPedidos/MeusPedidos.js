import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'

import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import { cond } from 'react-native-reanimated';

import Styles from './style.js'

export default function MeusPedidos({ navigation }) {
    const [pedidos, setImages] = useState(
        [{
            id: '#000001', cliente: 'João Marcos', status: 'A CAMINHO',
            endereco: "RUA 17, 70, Pacatuba CEARÁ - BR, 61814-524", telefone: "(85) 987694480",
            itens:
                [
                    { produto: 'ALCACHOFRA', preco: 5.90, qnt: '1KG' },
                    { produto: 'COCA COLA', preco: 7.90, qnt: '1' },
                    { produto: 'ARROZ BRANCO', preco: 2.19, qnt: '1' }
                ]
        },
        {
            id: '#000002', cliente: 'Williame', status: 'A CAMINHO',
            endereco: "RUA OURO PRETO, 15, MARACANAÚ CEARÁ - BR, 619020-35", telefone: "(85) 987694480",
            itens:
                [
                    { produto: 'ALCACHOFRA', preco: 5.90, qnt: '1KG' },
                    { produto: 'COCA COLA', preco: 7.90, qnt: '1' },
                    { produto: 'ARROZ BRANCO', preco: 2.19, qnt: '1' }
                ]
        },
        {
            id: '#000003', cliente: 'Artur', status: 'A CAMINHO',
            endereco: "RUA OURO PRETO, 15, MARACANAÚ CEARÁ - BR, 619020-35", telefone: "(85) 987694480",
            itens:
                [
                    { produto: 'ALCACHOFRA', preco: 52.00, qnt: '1KG' },
                    { produto: 'COCA COLA', preco: 7.00, qnt: '1' },
                    { produto: 'ARROZ BRANCO', preco: 2.00, qnt: '1' }
                ]
        }
        ]
    )
    
    return (
        <ScrollView style={Styles.container}>
            <View>
                {pedidos.map(order =>
                    <TouchableOpacity style={Styles.item}
                        onPress={() => navigation.navigate('DetalhePedidos', order)}
                    >
                        <View style={Styles.box1}>
                            <Text style={[Styles.textGrande, Styles.cinza]}>{order.cliente}</Text>
                            <Text style={[Styles.status, Styles.textPequeno]}>{order.status}</Text>
                        </View>
                        <View style={Styles.box1}>
                            <Text style={[Styles.textGrande, Styles.cinza]}>{order.id}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
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
