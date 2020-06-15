import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function Produto ({route, navigation}){
    const item = route.params
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> Produto: {JSON.stringify(item.produto)} </Text>
        </View>
    )
}
