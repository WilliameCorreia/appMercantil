import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function WaitRow() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}> Aguarde a liberação do sistema </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: "gray"
    },
    texto:{
        backgroundColor: '#fff',
        color: 'red',
        padding: '10%',
        fontSize: 22,
        paddingHorizontal: '7%'
    }
})
