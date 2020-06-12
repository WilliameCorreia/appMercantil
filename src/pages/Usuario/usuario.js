import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function usuario() {
    return (
        <View style={styles.container}>
            <Text>asdfasdfasdf</Text>
            <Text>asdfasdfasdf</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       backgroundColor: 'green'
    },
    user:{
        width: 50,
        height: 50
    }
})
