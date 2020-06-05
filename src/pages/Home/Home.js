import React, { Component } from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'

import styles from './style'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../Assets/back.jpg')} style={styles.image}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.text}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2}>
                        <Text style={styles.text2}>Cadastrar Estabelecimento</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}
