import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
const windowWidth = Dimensions.get('window').width / 100
const windowHeight = Dimensions.get('window').height / 100

export default function ProfilePhoto() {
    return (
        <View style={styles.box1}>
            <TouchableOpacity onPress={() => EscolherImagem()}>
                <Image style={styles.img} source={require('../Assets/person.png')} />
                {/* <Image style={Styles.img} source={{ uri: 'https://appmercantilestabelecimento.s3.us-east-2.amazonaws.com/images/8rHnabDY3XMbq3l5Q9jsAh8mYam2.jpeg' }} /> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#fff"
     },
     box1: {
         height: windowHeight * 25,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: "#B32728",
         elevation: 10
     },
     img: {
        width: 120,
        height: 120,
    }
})
