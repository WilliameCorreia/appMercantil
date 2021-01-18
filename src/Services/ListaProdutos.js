import React, { useState, useEffect, Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
} from 'react-native'

import { FlatList } from 'react-native-gesture-handler';

export default function listaProdutos({ Produtos, loading, navigation, LoadListaProdutos, limpa}) {

    const _renderItem = ({ item }) => (
        <View>
            <TouchableOpacity
                style={styles.cards}
                onPress={() => navigation.navigate('Produto', [item, limpa])}
            >
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <Text style={styles.nomeProduto}>{item._Produto}</Text>
                        <Text style={styles.texto}>Preço: R$ {item.preco}</Text>
                        <Text style={styles.texto}>Quantidade: {item.quantidade}</Text>
                    </View>
                    <View style={styles.box2}>
                        <Image
                            style={styles.prodImg} source={{ uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/ImagensPng/png/${item.fotoPng}?${new Date()}` }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text style={styles.dispon}>DISPONIVEL</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

    const renderFooter = () => {
        if (!loading) return null;
        return (
            <View style={styles.footerLoading}>
                <ActivityIndicator style={styles.loading} size={"large", 20} color={'#000'} />
            </View>
        )
    }

    const RenderEmpty = () => {
        return (
            <View style={styles.msn}>
                <Text style={styles.textMsn}>Nenhum produto Encontrado</Text>
            </View>
        )
    }

    return (
        <View>
            {<FlatList
            data={Produtos}
            renderItem={_renderItem}
            keyExtractor={item => item.codbar}
            //onEndReached={Produtos.length >= 5 ? LoadListaProdutos : null}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={RenderEmpty}
        />}
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    box: {
        flex: 1,
        flexDirection: 'row',
    },
    cards: {
        backgroundColor: '#ffff',
        margin: 15,
        // height: 160,
        minHeight: 210,
        elevation: 6
    },
    box1: {
        flex: 2,
        padding: 10,
        justifyContent: 'center',
    },
    box2: {
        flex: 1.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    prodImg: {
        height: 90,
        width: 80,
        marginBottom: 5,
    },
    nomeProduto: {
        width: '100%',
        fontSize: 20,
        color: '#999999',
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600',
    },
    texto: {
        fontSize: 16,
        letterSpacing: 2,
        color: '#999999',
        borderWidth: 2,
        borderColor: '#999999',
        borderRadius: 30,
        paddingLeft: 10,
        marginVertical: 5,
        width: '100%',
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600',
    },
    dispon: {
        backgroundColor: '#f23132',
        paddingHorizontal: 15,
        borderRadius: 30,
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600'
    },
    active: {
        justifyContent: 'center',
        marginTop: 250
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    msn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMsn: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600'
    }

})

