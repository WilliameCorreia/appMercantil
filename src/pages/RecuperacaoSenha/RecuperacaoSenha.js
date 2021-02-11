import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native'

import styles from './style'
import MyModal from '../../Componentes/MyModal'
import auth from '@react-native-firebase/auth';

export default function RecuperacaoSenha({ navigation }) {

    const [login, setLogin] = useState();
    const [loading, setloading] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    const RecuperacaoSenha = () => {
        setloading(true)
        if (!login) {
            setMsnModal('Informe Seu e-mail!')
            setModalActive(true)
            setloading(false)
        } else {
            auth().sendPasswordResetEmail(login)
                .then(() => {
                    setMsnModal('Fique atento, em breve você receberá um email de redefinição!')
                    setModalActive(true)
                    setloading(false)
                    setTimeout(() => {
                        navigation.navigate('Home');
                    }, 4000);
                }).catch(error => {
                    console.log(error.code)
                    switch (error.code) {
                        case 'auth/user-not-found':
                            setMsnModal('Ops! não encontramos nenhuma conta vinculada a esse e-mail.')
                            setModalActive(true)
                            break;
                        case 'auth/invalid-email':
                            setMsnModal('Formato Inválido de E-mail')
                            setModalActive(true)
                            break;
                        case 'auth/weak-password':
                            setMsnModal('Sua senha precisa ter pelo menos 8 caracteres')
                            setModalActive(true)
                            break;
                        default:
                            setMsnModal(error.code)
                            setModalActive(true)
                            break;
                    }
                    setModalActive(true)
                    setloading(false)
                });
        }
    }

    return (
        <KeyboardAvoidingView
            contentContainerStyle={styles.teste}
            style={styles.container}
            behavior={'position'} >
            <View style={styles.box1}>
                <Image source={require('../../Assets/person.png')} style={styles.image_person} />
            </View>
            <View style={styles.box2}>
                {loading ? <ActivityIndicator size={"large"} color={'#ffff'}></ActivityIndicator> : <Text></Text>}
                <TextInput
                    returnKeyType={'next'}
                    autoCapitalize={'none'}
                    style={styles.input}
                    placeholder={'E-mail'}
                    placeholderTextColor={'#ffff'}
                    onChangeText={text => setLogin(text)}
                />
                <TouchableOpacity onPress={RecuperacaoSenha}>
                    <Image style={styles.btn} source={require('../../Assets/next.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.box3}>
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} navigation />
            </View>
        </KeyboardAvoidingView>
    )
}
