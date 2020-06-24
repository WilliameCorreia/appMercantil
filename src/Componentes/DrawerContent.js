import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Alert } from 'react-native'

import auth from '@react-native-firebase/auth';

import { CommonActions } from '@react-navigation/native';

export default function DrawerContent({ navigation }) {

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
                <Image style={styles.img} source={require('../Assets/user.png')} />
            </View>
            <View style={styles.box2}>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.opacity} onPress={() => navigation.dispatch(
                        CommonActions.navigate({
                            name:'DashBoard'
                        })
                    )}>
                        <Image style={styles.imgIcone} source={require('../Assets/home.png')} />
                        <Text style={styles.text}>Inicio</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.opacity} onPress={() => navigation.navigate('Usuario')}>
                        <Image style={styles.imgIcone} source={require('../Assets/user.png')} />
                        <Text style={styles.text}>Perfil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.opacity} onPress={() => logout()}>
                        <Image style={styles.imgIcone2} source={require('../Assets/opcoes.png')} />
                        <Text style={styles.text}>Sair</Text>
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
        fontWeight: 'bold',
        letterSpacing: 1
    },
    box1: {
        flex: 1,
        alignItems: 'center'
    },
    box2: {
        flex: 3,
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#fff',
    },
    img: {
        width: 150,
        height: 150,
    },
    imgIcone: {
        width: 50,
        height: 50,
    },
    imgIcone2: {
        width: 50,
        height: 50,
    },
    opacity: {
        flexDirection: 'row',
        alignItems: "center"
    },
    item:{
    }
})
