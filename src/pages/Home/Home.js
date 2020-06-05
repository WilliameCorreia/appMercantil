import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'

import styles from './style'

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../Assets/backHome.png')} style={styles.image_back}>
                <Image source={require('../../Assets/logo.png')} style={styles.image_logo}/>
                
            </ImageBackground>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.text2}>Cadastrar Estabelecimento</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
