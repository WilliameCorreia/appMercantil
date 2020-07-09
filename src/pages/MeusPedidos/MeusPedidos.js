import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'

import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import { cond } from 'react-native-reanimated';

import Styles from './style.js'

export default function MeusPedidos({ navigation }) {
    const [pedidos, setImages] = useState(
        [{ id: '#000001', cliente: 'João Marcos', status: 'A CAMINHO', endereco:"RUA OURO PRETO, 15, MARACANAÚ CEARÁ - BR, 619020-35", telefone:"(85) 987694480" },
        { id: '#000002', cliente: 'Williame', status: 'A CAMINHO' },
        { id: '#000003', cliente: 'Artur', status: 'A CAMINHO' }
        ]
    )

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
        <ScrollView style={Styles.container}>
            <View>
                {pedidos.map(order =>
                    <TouchableOpacity style={Styles.bordado}
                        onPress={() => navigation.navigate('DetalhePedidos', order )}
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
