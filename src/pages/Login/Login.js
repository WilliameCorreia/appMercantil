import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import styles from './style'

export default function login(){
    return (
        <View style={styles.container}>
           <TextInput
                style={styles.input}
                placeholder={'USUÁRIO'}
                placeholderTextColor={'#ffff'}    
           />
             <TextInput
                style={styles.input}
                placeholder={'********'} 
                placeholderTextColor={'#ffff'}
                secureTextEntry
           />
           <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
