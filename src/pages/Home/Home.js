import React, { useEffect, useState } from 'react'
import { Text, View, ImageBackground, TouchableOpacity, Image, ActivityIndicator } from 'react-native'

import styles from './style'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';

export default function Home({ navigation }) {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    async function onAuthStateChanged(user) {
        setTimeout(function () {
            if (initializing) setInitializing(false);
            if (user) {
                setUser(user);
                let { uid } = user._user
                database()
                    .ref('/Estabelecimento/' + uid)
                    .once('value')
                    .then(snapshot => {
                        console.log(snapshot.exists())
                        if (snapshot.exists()) {
                            navigation.navigate('DashBoard')
                        } else {
                            navigation.navigate('Estabelecimento', { token: uid })
                        }
                    })
            } else {
                navigation.navigate('Home');
            }
        }, 2000)
    }

    useEffect(() => {
        const subscriber = auth().onUserChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    return (
        <ImageBackground source={require('../../Assets/backHome.jpeg')} style={styles.container}>
            <View style={styles.box1}>
                <Image source={require('../../Assets/logo32.png')} style={styles.image_logo} />
                <Image source={require('../../Assets/nomeLogo.png')} style={styles.image_logoNome} />
            </View>
            {initializing ?
                <View style={[styles.box2, styles.boxLoad]}>
                    <ActivityIndicator style={[styles.load]} size={"large", 100} color={'#000'} />
                </View>
                :
                <View style={styles.box2}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.text}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.text2}>Cadastrar Estabelecimento</Text>
                    </TouchableOpacity>
                </View>
            }
        </ImageBackground>
    )
}

