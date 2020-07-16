import React, { useState, useEffect, Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
} from 'react-native'

import Api from '../Services/api'
import { FlatList } from 'react-native-gesture-handler';

export default class listaProdutos extends Component {

    state={
        data: [],
        page: 1,
        loading: false
    }

    componentDidMount(){
       this.LoadListaProdutos();
       console.log("-----------------------------------------------------------------------------------------")
       console.log(this.props);
    }

    LoadListaProdutos = async () => {

        if (this.state.loading) return;

        const { page } = this.state;

        this.setState({ loading: true });

        console.log(`Produtos/${this.props.estabelecimentoId}/${this.props.categoriaId}/${page.toString()}`)

        const listaProdutos = await Api.get(`Produtos/${this.props.categoria}/${this.props.estabelecimentoId}/${page.toString()}`).then(dados => {
            console.log(dados.data)
            this.setState({
                data: [...this.state.data, ...dados.data],
                page: this.state.page + 1,
                loading: false
            })

        }).catch(erro => {
            console.log("erro retorno da função listaProdutos")
            console.log(erro);
        });

    }

    _renderItem = ({ item }) => (
        <View>
            <TouchableOpacity
                style={styles.cards}
                onPress={() => this.props.navigation.navigate('Produto', item)}
            >
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <Text style={styles.nomeProduto}>{item.produto}</Text>
                        <Text style={styles.texto}>Preço: R$ {item.preco}</Text>
                        <Text style={styles.texto}>Quantidade: {item.quantidade}</Text>
                    </View>
                    <View style={styles.box2}>
                        <Image
                            style={styles.prodImg} source={{uri: 'https://appmercantilimagens.s3.us-east-2.amazonaws.com/ImagensPng/png/' + item.fotoPng}}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text style={styles.dispon}>DISPONIVEL</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )

     renderFooter = () => {
         if (!this.state.loading) return null;
         return (
             <View style={styles.footerLoading}>
                 <ActivityIndicator style={styles.loading} size={"large", 20} color={'#000'} />
             </View>
         )
     }
 
    /*  RenderEmpty = () => {
         return (
             <View style={styles.msn}>
                 <Text style={styles.textMsn}>Não existem produtos cadastrado nessa categoria</Text>
             </View>
         )
     } */

    render(){
        return (
            <FlatList
                data={this.state.data}
                renderItem={this._renderItem}
                keyExtractor={item => item.codbar}
                onEndReached={this.LoadListaProdutos}
                onEndReachedThreshold={0.1}
                ListFooterComponent={this.renderFooter}
                //ListEmptyComponent={this.RenderEmpty}
            />
        )
    }
    
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
        height: 160,
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