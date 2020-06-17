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
import auth from '@react-native-firebase/auth';

export default function Cadastro( { navigation } ) {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();
    const [loading, setloading] = useState(false);

    

    const cadastrar = () => {
        setloading(true)
        if(!login || !password){
            Alert.alert('Cadastro', 'Insira valores válidos');
            setloading(false)
        }if(password != confPassword){
            Alert.alert('Cadastro', 'Senhas digitadas estão diferentes');
            setloading(false)
        }
        if(login && password && password == confPassword){
            auth()
         .createUserWithEmailAndPassword(login, password)
         .then(() =>{
             Alert.alert('Autenticação', 'Conta Criada com Sucesso!',[
                {
                    text: "OK", onPress: () => navigation.navigate('Login')
                }
             ]);
             setloading(false)
         }).catch(error => {
             if(error.code === 'auth/email-already-in-use'){
                Alert.alert('Autenticação', 'Email Já Está em Uso!')
             }
             if(error.code === 'auth/invalid-email'){
                 Alert.alert('Autenticação', 'Email Inválido!')
             }
             Alert.alert('Erro:', error.code);
             setloading(false)
         });
        }
     }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image source={require('../../Assets/person.png')} style={styles.image_person} />
            {loading ? <ActivityIndicator size={"large"} color={'#ffff'}></ActivityIndicator> : <Text></Text>}
            <TextInput
                style={styles.input}
                placeholder={'E-mail'}
                placeholderTextColor={'#ffff'}
                onChangeText={text => setLogin(text)}
            />
            <TextInput
                style={styles.input}
                placeholder={'Senha'}
                placeholderTextColor={'#ffff'}
                secureTextEntry
                onChangeText={text => setPassword(text)}
            />
            <TextInput
                style={styles.input}
                placeholder={'Confirmar Senha'}
                placeholderTextColor={'#ffff'}
                secureTextEntry
                onChangeText={text => setConfPassword(text)}
            />
            <TouchableOpacity onPress={cadastrar}>
                <Image style={styles.img} source={require('../../Assets/next.png')} />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
