import React, { useState, isValidElement } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator, StatusBar } from 'react-native'

import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth';

import styles from './style'

export default function login({ navigation }) {

    const [loading, setloading] = useState(false);
    const [usuario, setUsuario] = useState();
    const [password, setPassword] = useState();

    autenticar = () => {
        setloading(true)
        if (usuario && password) {
            auth()
                .signInWithEmailAndPassword(usuario, password)
                .then(() => {
                    navigation.navigate('DashBoard', { usuario: 'teste', teste: 'teste' });
                    setloading(false)
                })
                .catch(error => {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            Alert.alert('Login', 'Esse Email já está em uso!');
                            break;
                        case 'auth/invalid-email':
                            Alert.alert('Login', 'E-mail Inválido');
                            break;
                        case 'auth/operation-not-allowed':
                            Alert.alert('Login', 'Sua conta não foi ativada, Verifique seu Email!');
                            break;
                        case 'auth/weak-password':
                            Alert.alert('Login', 'A senha não for forte o suficiente!');
                            break;

                        default:
                            break;
                    }
                    setloading(false)
                    Alert.alert('Login', error.code);
                });
        } else {
            Alert.alert('Login', 'Dados inválidos');
            setloading(false)
        }
    }
    console.log("login")
    return (
        <View style={styles.container}>
            <Image source={require('../../Assets/logo.png')} style={styles.image_logo} />
            {loading ? <ActivityIndicator size={"large"} color={'#ffff'}></ActivityIndicator> : <Text></Text>}
            <View style={styles.SectionStyle}>
                <Icon
                    style={styles.icon}
                    reverse
                    name='ios-contact'
                    type='ionicon'
                    color='transparent'
                    size={40}
                />
                <TextInput
                    dataDetectorTypes={'address'}
                    style={styles.input}
                    placeholder={'USUÁRIO'}
                    placeholderTextColor={'#ffff'}
                    onChangeText={texto => setUsuario(texto)}
                />
            </View>
            <View style={styles.SectionStyle}>
                <Icon
                    style={styles.icon}
                    reverse
                    name='ios-lock'
                    type='ionicon'
                    color='transparent'
                    size={40}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'********'}
                    placeholderTextColor={'#ffff'}
                    secureTextEntry
                    onChangeText={texto => setPassword(texto)}
                />
                <TextInput />
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => autenticar()}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
            <StatusBar backgroundColor={'#FF7223'} barStyle='dark-content'/>
            <TouchableOpacity style={styles.textBtn}>
                <Text style={styles.text2}>Ainda não possui conta ?</Text>
                <Text style={styles.text2}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}
