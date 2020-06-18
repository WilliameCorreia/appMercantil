import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import Styles from './style'

export default class NewOferta extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={[Styles.box1, Styles.bordado]}>
                    <View style={Styles.margin}>
                        <Text style={Styles.text}> Arroz Branco </Text>
                        <Text style={Styles.text}> #00001 </Text>
                    </View>
                    <View style={Styles.margin}>
                        <TouchableOpacity style={Styles.button} >
                            <Text style={Styles.text}>EM FALTA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Styles.box2}>
                    <TouchableOpacity >
                        <Text >Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
