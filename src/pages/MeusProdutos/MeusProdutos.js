import React, { useState } from 'react'
import { 
    Text, 
    View, 
    Image, 
    TouchableHighlight, 
    SafeAreaView, 
    VirtualizedList, 
    ActivityIndicator
 } from 'react-native'

import database from '@react-native-firebase/database';
import styles from './style'


export default function MeusProdutos({ navigation }) {

    const reference = database().ref('/produtos');

    const [listProdutos, setListProdutos] = useState();

    reference
        .once('value')
        .then(snapshot => {
            let lista_produtos = snapshot.val()
            setListProdutos(lista_produtos);
        })

    const getItem = (data, index) => {
        if (data) {
            return {
                key: index,
                produto: data[index].produto,
                categoria: data[index].categoria,
                marca: data[index].marca,
                preco_medio: data[index].preco_medio
            }
        } else {
            return {
                key: index,
                produto: '',
                categoria: '',
                marca: '',
                preco_medio: ''
            }
        }
    }

    const getItemCount = (data) => {
        let valor;
        data ? valor = data.length : valor = 0
        /* console.log(x) */
        return valor;
    }

    const Item = ({ title }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{title.teste1}</Text>
            </View>
        );
    }

    const _renderItem = ({ title }) => (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Produto', title)}
        >
            <View style={styles.cards}>
                <View style={styles.box1}>
                    <Text style={[styles.texto, styles.nomeProduto]}>{title.produto}</Text>
                    <Text style={styles.texto}>Categoria: {title.categoria}</Text>
                    <Text style={styles.texto}>Marca: {title.marca}</Text>
                    <Text style={styles.texto}>Preço {title.preco_medio}</Text>
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
            <VirtualizedList
                data={listProdutos}
                initialNumToRender={4}
                renderItem={({ item }) => <_renderItem title={item} />}
                keyExtractor={item => item.key}
                getItemCount={getItemCount}
                getItem={getItem}
                windowSize={10}
            />
        </SafeAreaView>
    )
}
