import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'

import styles from './style'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../Assets/back.jpg')} style={styles.image}>

                </ImageBackground>
            </View>
        )
    }
}
