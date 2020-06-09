import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function Produto ({route, navigation}){
    const item = route.params
    return (
        <View>
            <Text> Produto: {JSON.stringify(item.produto)} </Text>
        </View>
    )
}
