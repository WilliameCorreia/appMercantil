import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import { cond } from 'react-native-reanimated';

import Styles from './style.js'

export default function MeusPedidos() {
    const [pedidos, setImages] = useState(
        [{id:'#000001', cliente:'João Marcos', status:'A CAMINHO'},
        {id:'#000002', cliente:'Williame', status:'A CAMINHO'},
        {id:'#000003', cliente:'Artur', status:'A CAMINHO'}
        ]
        )

    const reference = storage().ref('/Categorias');

    const listaImagens = (reference, pageToken) =>{
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
                    <View style={Styles.bordado}>
                        <View style={Styles.box1}>
                            <Text style={[Styles.textGrande, Styles.cinza]}>{order.cliente}</Text>
                            <Text style={[Styles.status, Styles.textPequeno]}>{order.status}</Text>
                        </View>
                        <View style={Styles.box1}>
                            <Text style={[Styles.textGrande, Styles.cinza]}>{order.id}</Text>                            
                        </View>
                    </View>
                    )}
            </View>
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
