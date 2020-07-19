import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Icon } from 'react-native-elements'

export default function MyDrawerOpen( { onPress } ) {
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={onPress}>
                <Icon
                    style={styles.icon}
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
