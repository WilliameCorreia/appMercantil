import React, { useEffect, useState } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from 'react-native'

import styles from './style'
import auth from '@react-native-firebase/auth'


export default function Home({ navigation }) {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    async function onAuthStateChanged(user) {
        setTimeout(function(){
            setUser(user);
            if (initializing) setInitializing(false);
            if(user){
                navigation.navigate('MeusProdutos');
            }else{
                navigation.navigate('Home');
            }
        }, 3000)
       
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return(
        <View style={styles.container}>
            <ImageBackground source={require('../../Assets/backHome.png')} style={styles.image_back}>
                <Image source={require('../../Assets/logo.png')} style={styles.image_logo} />
            </ImageBackground>
            {initializing ? <ActivityIndicator style={[styles.container2, styles.load]} size={"large", 100} color={'#000'}></ActivityIndicator> : 
                <View style={styles.container2}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.text2}>Cadastrar Estabelecimento</Text>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
}
