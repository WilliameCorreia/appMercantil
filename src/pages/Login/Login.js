import React, { useState, isValidElement } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator  } from 'react-native'

import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth';

import styles from './style'

export default function login({ navigation }) {

    const [logar, setLogar] = useState(false);
    const [usuario, setUsuario ] = useState();
    const [password, setPassword ] = useState();


    autenticar = user => {
        setLogar(true)
         if( usuario && password ){
            auth()
            .signInWithEmailAndPassword(usuario, password)
            .then(() => {
                navigation.navigate('MeusProdutos', {usuario: 'teste', teste: 'teste'});
                setLogar(false)
            })
            .catch(error => {
                Alert.alert('Login', error.code);
            });
         }else{
            Alert.alert('Login', 'Dados inválidos');
         }
     }

    return (
        <View style={styles.container}>
            <Image source={require('../../Assets/logo.png')} style={styles.image_logo}/>
            {logar ? <ActivityIndicator size={"large"} color={'#ffff'}></ActivityIndicator> : <Text></Text>}
            <View style={styles.SectionStyle}>
                <Icon
                    style={styles.icon}
                    reverse
                    name='ios-american-football'
                    type='ionicon'
                    color='transparent'
                />
                <TextInput
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
                    name='ios-american-football'
                    type='ionicon'
                    color='transparent'
                />
                <TextInput
                    style={styles.input}
                    placeholder={'********'}
                    placeholderTextColor={'#ffff'}
                    secureTextEntry
                    onChangeText={texto => setPassword(texto)}
                />
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => autenticar()}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
