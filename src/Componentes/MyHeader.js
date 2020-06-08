import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function MyHeader({ title, leftButton, style }) {
    return (
        <View {...style}>
            <Text>{title}</Text>
            {leftButton}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        height: 50
    }
})
