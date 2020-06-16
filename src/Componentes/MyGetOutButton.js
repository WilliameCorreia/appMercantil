import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'

import auth from '@react-native-firebase/auth';

export default function MyGetOutButton( { navigation } ) {

    const logout = () => {
        Alert.alert('Mensagem', 'Deseja Realmente sair?', [
            {
              text: "Cancelar",
              onPress: () => console.log("OK Pressed"),
              style: "cancel"
            },
            { 
                text: "OK", 
                onPress: () => auth().signOut().then(() =>{
                    /* navigation.navigate('login'); */
                }).catch(error => {
                    Alert.alert('Erro', toString(error.code))
                })},
          ],
          { cancelable: true }
        )
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => logout()}>
                <Text style={styles.texto}>SAIR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    texto: {
        color:'#fff',
        fontWeight: "bold",
        fontSize: 16
    },
    btn: {
        
    }
})
