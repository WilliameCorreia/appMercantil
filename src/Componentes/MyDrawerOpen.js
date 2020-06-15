import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Icon } from 'react-native-elements'
import { DrawerActions } from '@react-navigation/native';

export default function MyDrawerOpen( { navigation } ) {
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Icon
                    style={styles.icon}
                    raised
                    reverse={true}
                    name='md-menu'
                    type='ionicon'
                    color='transparent'
                    size={20}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
})
