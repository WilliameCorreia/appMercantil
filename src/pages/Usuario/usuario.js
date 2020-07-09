import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function usuario() {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.item1}></View>
                <View style={styles.item2}></View>
            </View>
            <View style={styles.box2}>
                <View style={styles.item1}></View>
                <View style={styles.item2}></View>
                <View style={styles.item4}></View>
                <View style={styles.item5}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       backgroundColor: 'green'
    },
    box1:{
       backgroundColor: 'pink'
    },
    box2:{
        backgroundColor: 'red'
    }
})
