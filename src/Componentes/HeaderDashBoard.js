import React from 'react'

import { Header } from 'react-native-elements'
import MyDrawerOpen from '../Componentes/MyDrawerOpen'

export default function HeaderDashBoard({ title, leftButton, rightButton, color}) {
    return (
        <Header
        statusBarProps={{ barStyle: 'light-content', backgroundColor: color }}
            barStyle="light-content"
            leftComponent={leftButton}
            rightComponent={rightButton}
            centerComponent={{text: title, style:{color: '#fff', fontSize: 20}}}
            containerStyle={{
                backgroundColor: color,
                justifyContent: 'space-around',
            }}
        />
    )
}