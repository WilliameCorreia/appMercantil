import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
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
            console.log(lista)
        })
    }, [])


    const getItem = (data, index) => {
        if (data) {
            return {
                key: index,
                produto: data[index].produto_acento,
                preco_medio: data[index].preco_medio,
                quantidade: data[index].quantidade_embalagem
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
        <TouchableOpacity
            style={styles.cards}
            onPress={() => navigation.navigate('Produto', title)}
        >
            <View style={styles.box}>
                <View style={styles.box1}>
                    <Text style={styles.nomeProduto}>{title.produto}</Text>
                    <Text style={styles.texto}>Preço: R$ {title.preco_medio}</Text>
                    <Text style={styles.texto}>Quantidade: {title.quantidade}</Text>
                </View>
                <View style={styles.box2}>
                    <Image
                        style={styles.prodImg} source={require('../Assets/Arroz.png')}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <Text style={styles.dispon}>Em Falta</Text>
                </View>
            </View>
        </TouchableOpacity>
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
    box:{
        flexDirection: 'row',
    },
    cards: {
        backgroundColor: '#ffff',
        margin: 15,
        height: 160,
        elevation: 6
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
        marginRight: 10
    },
    prodImg: {
        height: 90,
        width: 80,
        marginBottom: 5,
    },
    nomeProduto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#999999'
    },
    texto: {
        fontSize: 20,
        letterSpacing: 2,
        color: '#999999',
        borderWidth: 2,
        borderColor: '#999999',
        borderRadius: 30,
        paddingLeft: 10,
        marginVertical: 5,
        width: '80%'
    },
    dispon: {
        backgroundColor: '#f23132',
        paddingHorizontal: 15,
        borderRadius: 30,
        color: '#fff'
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