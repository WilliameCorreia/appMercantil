import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    SafeAreaView,
    VirtualizedList,
    ActivityIndicator,
    StyleSheet,
} from 'react-native'

import database from '@react-native-firebase/database';

import { useNavigation } from '@react-navigation/native';

export default ({ categoria }) => {

    console.log('listaProdutos => ' + categoria)
    const navigation = useNavigation();

    const reference = database().ref('/Produtos');

    const [listProdutos, setListProdutos] = useState([]);
    const [loading, setLoading] = useState(true);

    const listarProdutos = async () => {

        const listaProdutos = await reference.orderByChild('categoria').equalTo(categoria).once('value').then(snapshot => {
            let lista = []
            snapshot.forEach((child) => {
                lista.push(child.val())
            })
            setLoading(false)
            return lista
        })
        return listaProdutos
    }

    useEffect(() => {
        listarProdutos().then(lista => {
            setListProdutos(lista)
        })
    }, [])


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
        return valor;
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
                        style={styles.prodImg} source={require('../Assets/bombril.jpg')}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Text style={styles.dispon}>Disponível</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
    console.log(listProdutos.length)
    return (
        <SafeAreaView style={styles.container}>
            {loading ? <ActivityIndicator style={styles.loading} size={"large", 100} color={'#000'} /> :
                listProdutos.length !== 0 ?
                    <VirtualizedList
                        data={listProdutos}
                        initialNumToRender={4}
                        renderItem={({ item }) => <_renderItem title={item} />}
                        keyExtractor={item => item.key.toString()}
                        getItemCount={getItemCount}
                        getItem={getItem}
                        windowSize={10}
                        maxToRenderPerBatch={4}
                    /> :
                    <View style={styles.msn}>
                        <Text style={styles.textMsn}>Não existem produtos cadastrado nessa categoria</Text>
                    </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    cards: {
        backgroundColor: '#ffff',
        borderColor: '#9a9696',
        borderWidth: 3,
        borderRadius: 10,
        margin: 15,
        flexDirection: 'row',
        height: 160
    },
    box1: {
        flex: 3,
        padding: 10,
        justifyContent: 'center',
    },
    box2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    prodImg: {
        height: 90,
        width: 80,
        marginBottom: 5
    },
    nomeProduto: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 16,
        letterSpacing: 2
    },
    dispon: {
        backgroundColor: '#469b19',
        padding: 10,
        borderRadius: 30
    },
    active: {
        justifyContent: 'center',
        marginTop: 250
    },
    loading:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    msn:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMsn:{
        fontSize: 20,
        textAlign: 'center'
    }

})