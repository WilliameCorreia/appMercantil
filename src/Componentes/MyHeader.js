import React from 'react'
import { StyleSheet } from 'react-native'

import { Header } from 'react-native-elements'
import MyBackButton from '../Componentes/MyBackButton'

export default function MyHeader({ title, leftButton, style, color}) {
    return (
        <Header
        statusBarProps={{ barStyle: 'light-content', backgroundColor: color }}
            barStyle="light-content"
            centerComponent={{text: title, style:{color: '#fff', fontSize: 25}}}
            leftComponent={<MyBackButton/>}
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
