import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

export default function MyBackButton() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => {navigation.goBack();}}>
                <Icon
                style={styles.icon}
                    raised
                    reverse={true}
                    name='md-arrow-round-back'
                    type='ionicon'
                    color='transparent'
                    size={30}
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
