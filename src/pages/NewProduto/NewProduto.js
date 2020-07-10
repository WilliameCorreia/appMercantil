import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'

import { SearchBar } from 'react-native-elements';
import Api from '../../Services/api'
import Styles from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function Produto({ navigation, route }) {

    const [produto, setProduto] = useState({
        produto: '',
        qtn: '',
        preco: '',
        categoria: '',
        detalhes: ''
    });

    useEffect(() => {
        if (route.params) {
            let { produto } = route.params
            setProduto({
                produto: produto.produto,
                qtn: produto.quantidadeEmbalagem,
                preco: produto.precoMedio,
                categoria: produto.categoria,
                detalhes: produto.produtoAcento
            })
            console.log(route.params.produto)
        }
    }, [route.params])

    const getProduto = (codbar) => {
        const produto = Api.get(`ProdutosDb/codbar/${codbar}`).then(response => {
            setProduto(response.data);
        }).catch(erro => {
            console.log(erro);
        });
    }

    return (
        <KeyboardAwareScrollView style={Styles.container}>
            <View style={Styles.box1}>
                <Image source={require('../../Assets/Arroz.png')} style={Styles.prodImg} />
                <View style={Styles.Codbar}>
                    <TouchableOpacity style={Styles.codbarItem} onPress={() => navigation.navigate('Mycamera', getProduto)}>
                        <Image source={require('../../Assets/codbar.png')} style={Styles.codbarImg} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.box2}>
                <View style={[Styles.containerForm]}>
                    <View style={Styles.containerSearch}>
                        <SearchBar
                            style={Styles.search}
                            placeholder="Digite o codigo de barras"
                            platform={'android'}
                            containerStyle={Styles.search}
                            onChangeText={getProduto}
                        /* value={search} */
                        />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>PRODUTO</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput
                            style={[Styles.tamanhoInputFull, Styles.inputs,]}
                            value={produto.produto}
                            onChangeText={text => setProduto({ produto: text })}
                            placeholder={"PRODUTO"}
                        />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>QTD</Text>
                        <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel2]}>PREÇO</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput
                            style={[Styles.tamanhoInputMetade, Styles.inputs]}
                            value={produto.qtn}
                            placeholder={"QTD"}
                        />
                        <TextInput
                            style={[Styles.tamanhoInputMetade, Styles.inputs]}
                            value={produto.preco ?? null}
                            placeholder={"PREÇO"}
                        />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>CATEGORIA</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput
                            style={[Styles.tamanhoInputFull, Styles.inputs,]}
                            value={produto.categoria}
                            placeholder={"CATEGORIA"}
                        />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>DETALHES</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput
                            style={[Styles.tamanhoInputFull, Styles.inputs,]}
                            value={produto.detalhes}
                            placeholder={"DETALHES"}
                        />
                    </View>
                    <View style={Styles.alignCenter}>
                        <TouchableOpacity style={Styles.BtnAlterar}>
                            <Text style={[Styles.colorBranco, Styles.text]}>SALVAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}



