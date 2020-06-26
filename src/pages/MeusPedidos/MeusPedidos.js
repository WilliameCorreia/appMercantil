import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import { cond } from 'react-native-reanimated';

export default function MeusPedidos() {

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
        <View style={styles.container}>
            <Text>Meus pedidos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
      },    
})
