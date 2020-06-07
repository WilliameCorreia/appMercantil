import React from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'

import { Icon } from 'react-native-elements'

import styles from './style'

export default function login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../../Assets/logo.png')} style={styles.image_logo}/>
            <View style={styles.SectionStyle}>
                <Icon
                    style={styles.icon}
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='transparent'
                />
                <TextInput
                    style={styles.input}
                    placeholder={'USUÁRIO'}
                    placeholderTextColor={'#ffff'}
                />
                
            </View>
            <View style={styles.SectionStyle}>
                <Icon
                    style={styles.icon}
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='transparent'
                />
                <TextInput
                    style={styles.input}
                    placeholder={'********'}
                    placeholderTextColor={'#ffff'}
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MeusProdutos')}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
