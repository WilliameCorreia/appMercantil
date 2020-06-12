import React from 'react'
import { StyleSheet } from 'react-native'

import { Header } from 'react-native-elements'
import MyGetOutButton from '../Componentes/MyGetOutButton'
import MyDrawerOpen from '../Componentes/MyDrawerOpen'

export default function HeaderDashBoard({ title, leftButton, style, color, navigation}) {
    return (
        <Header
        statusBarProps={{ barStyle: 'light-content', backgroundColor: color }}
            barStyle="light-content"
            leftComponent={<MyDrawerOpen navigation={navigation}/>}
            centerComponent={{text: title, style:{color: '#fff', fontSize: 25}}}
            rightComponent={<MyGetOutButton/>}
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
