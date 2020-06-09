import React, { useState } from 'react'
import { Text, View, FlatList, TouchableHighlight, SafeAreaView} from 'react-native'

import database from '@react-native-firebase/database';
import styles from './style'
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

export default function MeusProdutos({ navigation }) {

    const reference = database().ref('/produtos');

    const [teste, setTeste] = useState();

    reference
        .limitToFirst(10)
        .once('value')
        .then(snapshot => {
            let teste = snapshot.val()
            setTeste(teste);
        })

    const _renderItem = ({ item }) => (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Produto', item)}
        >
            <View style={styles.cards}>
                <View style={styles.box1}>
                    <Text style={[styles.texto, styles.nomeProduto]}>{item.produto}</Text>
                    <Text style={styles.texto}>Categoria: {item.categoria}</Text>
                    <Text style={styles.texto}>Marca: {item.marca}</Text>
                    <Text style={styles.texto}>Preço {item.preco_medio}</Text>
                </View>
                <View style={styles.box2}>
                    <Image 
                        style={styles.prodImg} source={require('../../Assets/bombril.jpg')}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Text style={styles.dispon}>Disponível</Text>
                </View>
            </View>
        </TouchableHighlight>
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={teste}
                renderItem={_renderItem}
                keyExtractor={item => item.codbar}
            />
        </SafeAreaView>
    )
}
