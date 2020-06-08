import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function MyBackButton({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>teste</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        height: 100
    }
})
