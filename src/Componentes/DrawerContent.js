import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native'

import auth from '@react-native-firebase/auth';
import SomenteImageP from './SomenteImageP';

export default function DrawerContent({ navigation, Estabelecimento }) {

    const logout = () => {
        Alert.alert('Mensagem', 'Deseja Realmente sair?', [
            {
              text: "Cancelar",
              onPress: () => console.log("OK Pressed"),
              style: "cancel"
            },
            { 
                text: "OK", 
                onPress: () => auth().signOut().then(() =>{
                   // navigation.navigate('Login');
                }).catch(error => {
                    Alert.alert('Erro', toString(error.code))
                })},
          ],
          { cancelable: true }
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                {/* <Image style={styles.img} source={require('../Assets/person.png')} /> */}
                <SomenteImageP Estabelecimento={Estabelecimento} />
            </View>
            <View style={styles.box2}>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate('DashBoard')}>
                        <Image style={styles.imgIcone} source={require('../Assets/home.png')} />
                        <Text style={styles.text}>inicio</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate('Usuario')}>
                        <Image style={styles.imgIcone} source={require('../Assets/user.png')} />
                        <Text style={styles.text}>perfil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.opacity} onPress={() => logout()}>
                        <Image style={styles.imgIcone} source={require('../Assets/logout.png')} />
                        <Text style={styles.text}>sair  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    text: {
        fontSize: 20,
        marginLeft: 20,
        color: '#B32728',
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600',
        letterSpacing: 1
    },
    box1: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box2: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    img: {
        width: 120,
        height: 120,
    },
    imgIcone: {
        width: 40,
        height: 40,
    },
    opacity: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:'flex-start',
        borderColor: '#999999',
        borderBottomWidth: 3,
        padding: 10,
        
    },
    item:{
       marginVertical: 10,
    }
})
