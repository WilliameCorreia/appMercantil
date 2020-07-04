import React from 'react'
import { StyleSheet } from 'react-native'

import { Header } from 'react-native-elements'

export default function MyHeader({ title, leftButton, color }) {
    console.log('MyHeader')
    return (
        <Header
            statusBarProps={{ barStyle: 'light-content', backgroundColor: color }}
            barStyle="light-content"
            centerComponent={{ text: title, style: { color: '#fff', fontSize: 20, fontFamily: 'Montserrat-SemiBold', fontWeight: '600' } }}
            leftComponent={leftButton}
            containerStyle={{
                backgroundColor: color,
                justifyContent: 'space-around',
                borderBottomWidth: 0
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 50
    }
})
