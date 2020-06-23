import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function MeusPedidos() {

    
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
