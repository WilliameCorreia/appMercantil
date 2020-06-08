import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native'
import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth'
import styles from '../teste/style'

export default function teste() {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const [usuario, setUsuario] = useState();
    const [password, setPassword] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    function autenticar () {
        if( usuario && password ){
           auth()
           .signInWithEmailAndPassword(usuario, password)
           .then(() => {
               
           })
           .catch(error => {
               Alert.alert('Login', error.code);
           });
        }else{
           Alert.alert('Login', 'Dados inválidos');
        }
    }

    if (initializing) return null;

    if (!user) {
        return (
            <View style={styles.container}>
                <Image source={require('../../Assets/logo.png')} style={styles.image_logo} />
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

    if(user){
        return (
            <View>
              <Text>Welcome {user.email}</Text>
            </View>
          );
    }

    
}
