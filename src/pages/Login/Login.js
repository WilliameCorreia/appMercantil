import React, { useState } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    ActivityIndicator,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native'

import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth'
import MyModal from '../../Componentes/MyModal'

import styles from './style'

export default function login({ navigation }) {

    const [loading, setloading] = useState(false);
    const [usuario, setUsuario] = useState();
    const [password, setPassword] = useState();
    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    autenticar = () => {
        setloading(true)
        if (usuario && password) {
            auth()
                .signInWithEmailAndPassword(usuario, password)
                .then(() => {
                    console.log('autenticado')
                })
                .catch(error => {
                    switch (error.code) {
                        case 'auth/invalid-email':
                            setMsnModal('Formato Inválido de E-mail')
                            setModalActive(true)
                            break;
                        case 'auth/operation-not-allowed':
                            setMsnModal('Sua conta não foi ativada, Verifique seu Email!')
                            setModalActive(true)
                            break;
                        case 'auth/weak-password':
                            setMsnModal('Sua senha precisa ter pelo menos 8 caracteres')
                            setModalActive(true)
                            break;
                        case 'auth/user-not-found':
                            setMsnModal('Usuário não encontrado !')
                            setModalActive(true)
                            break;
                        case 'auth/wrong-password':
                            setMsnModal('Senha Inválida !')
                            setModalActive(true)
                            break;
                        default:
                            setMsnModal(error.code)
                            setModalActive(true)
                            break;
                    }
                    setloading(false)
                });
        } else {
            setMsnModal('Informe Usuario/Senha valídos')
            setModalActive(true)
            setloading(false)
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={80} behavior={"position"}>
            <View style={styles.box1}>
                <Image source={require('../../Assets/logo322.png')} style={styles.image_logo} />
                <Image source={require('../../Assets/nomeLogo2.png')} style={styles.name_logo} />
            </View>
            <View style={styles.box2}>
                {loading ? <ActivityIndicator size={"large"} color={'#ffff'}></ActivityIndicator> : <Text></Text>}
                <View style={styles.SectionStyle}>
                    <Icon
                        style={styles.icon}
                        name='ios-contact'
                        type='ionicon'
                        size={40}
                        color={'#fff'}
                    />
                    <TextInput
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        dataDetectorTypes={'address'}
                        style={styles.input}
                        placeholder={'USUÁRIO'}
                        placeholderTextColor={'#ffff'}
                        onChangeText={texto => setUsuario(texto)}
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <Icon
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        style={styles.icon}
                        name='ios-lock'
                        type='ionicon'
                        size={40}
                        color={'#fff'}
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
                <StatusBar backgroundColor={'#FF7223'} barStyle='dark-content' />
                    <TouchableOpacity onPress={() => { navigation.navigate('RecuperacaoSenha') }} style={styles.textBtn}>
                        <Text style={styles.text2}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('Cadastro') }} style={styles.textBtn}>
                        <Text style={styles.text2}>Cadastre-se</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.box3}>
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} />
            </View>

        </KeyboardAvoidingView>
    )
}
