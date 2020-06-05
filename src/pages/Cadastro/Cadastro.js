import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'

import styles from './style'

export default function Cadastro( { navigation } ) {
    return (
        <View style={styles.container}>
            <Image source={require('../../Assets/person.png')} style={styles.image_person} />
            <TextInput
                style={styles.input}
                placeholder={'Nome'}
                placeholderTextColor={'#ffff'}
            />
            <TextInput
                style={styles.input}
                placeholder={'E-mail'}
                placeholderTextColor={'#ffff'}
            />
            <TextInput
                style={styles.input}
                placeholder={'Senha'}
                placeholderTextColor={'#ffff'}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder={'Confirmar Senha'}
                placeholderTextColor={'#ffff'}
                secureTextEntry
            />
            <TouchableOpacity onPress={() => navigation.navigate('Estabelecimento')}>
                <Image style={styles.img} source={require('../../Assets/next.png')} />
            </TouchableOpacity>
        </View>
    )
}
