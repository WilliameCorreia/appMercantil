import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';

export default props => {

    const ButtonStyle = [styles.container]
    if (props.cor1) ButtonStyle.push(styles.cor1)
    if (props.cor2) ButtonStyle.push(styles.cor2)
    if (props.cor3) ButtonStyle.push(styles.cor3)

    return (
        <TouchableOpacity onPress={props.onclick}>
            <Text style={ButtonStyle}>{props.texto}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    cor1: {
        color: 'green'
    },
    cor2: {
        color: 'red'
    },
    cor3: {
        color: 'blue'
    }
});


