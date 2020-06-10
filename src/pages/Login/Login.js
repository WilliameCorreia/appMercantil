import React, { useState, isValidElement } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator  } from 'react-native'

import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth';

import styles from './style'

export default function login({ navigation }) {

    const [loading, setloading] = useState(false);
    const [usuario, setUsuario ] = useState();
    const [password, setPassword ] = useState();

    autenticar = user => {
        setloading(true)
         if( usuario && password ){
            auth()
            .signInWithEmailAndPassword(usuario, password)
            .then(() => {
                navigation.navigate('MeusProdutos', {usuario: 'teste', teste: 'teste'});
                setloading(false)
            })
            .catch(error => {
                setloading(false)
                Alert.alert('Login', error.code);
            });
         }else{
            Alert.alert('Login', 'Dados inválidos');
            setloading(false)
         }
     }

    return (
        <View style={styles.container}>
            <Image source={require('../../Assets/logo.png')} style={styles.image_logo}/>
            {loading ? <ActivityIndicator size={"large"} color={'#ffff'}></ActivityIndicator> : <Text></Text>}
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
                <TextInput />
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => autenticar()}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
