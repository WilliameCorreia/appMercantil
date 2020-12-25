import React, { useState, useContext } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from 'react-native'

import styles from './style'

import AuthContext from '../../Contexts/Auth'

export default function Home({ navigation }) {

    const { loading } = useContext(AuthContext)

    return (
        <ImageBackground source={require('../../Assets/backHome.jpeg')} style={styles.container}>
            <View style={styles.box1}>
                <Image source={require('../../Assets/logoInicio1.png')} style={styles.image_logo} />
                <Image source={require('../../Assets/nomeLogo.png')} style={styles.image_logoNome} />
            </View>
            {loading ?
                <View style={[styles.box2, styles.boxLoad]}>
                    <ActivityIndicator style={[styles.load]} size={"large", 100} color={'#000'} />
                </View>
                :
                <View style={styles.box2}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.text}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.text2}>Cadastrar Estabelecimento</Text>
                    </TouchableOpacity>
                </View>
            }
        </ImageBackground>
    )
}

