import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'

import { Picker } from '@react-native-community/picker'
import { SearchBar } from 'react-native-elements';
import Api from '../../Services/api'
import Styles from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function Produto({ navigation, route }) {

    const [codbar, setCodbar] = useState();

    const [produto, setProduto] = useState({
        produto: '',
        Quantidade: '',
        Preco: null,
        categoria: '',
        codbar: ''
    });

    useEffect(() => {
        if (route.params) {
            let { produto } = route.params
            setProduto({
                produto: produto.produto,
                Quantidade: produto.quantidadeEmbalagem,
                Preco: produto.precoMedio,
                categoria: produto.categoria,
                codbar: produto.codbar
            })
            console.log(route.params.produto)
        }
    }, [route.params])

    const getProduto = (codbar) => {
        setCodbar(codbar)
        console.log(codbar)
        const produto = Api.get(`ProdutosDb/codbar/${codbar}`).then(response => {
            console.log(response.data)
            console.log("entrou getProduto")
            setProduto({
                produto: response.data.produto,
                Quantidade: response.data.quantidadeEmbalagem,
                precoMedio: response.data.precoMedio,
                Preco: response.data.categoria,
                categoria: response.data.categoria,
                codbar: response.data.codbar
            });
        }).catch(erro => {
            console.log(erro);
        });
    }

    const FormValidacao = () => {
        if(){}
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
                            onChangeText={text => getProduto(text)}
                            keyboardType={'numeric'}
                            value={codbar}
                        //showLoading={true}
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
                            value={produto.Quantidade}
                            placeholder={"QTD"}
                            keyboardType={'numeric'}
                        />
                        <TextInput
                            style={[Styles.tamanhoInputMetade, Styles.inputs]}
                            value={produto.Preco}
                            placeholder={"PREÇO"}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>CATEGORIA</Text>
                    </View>
                    <View style={[Styles.row, Styles.picker]}>
                        <Picker
                            style={{width:"50%", textAlign: 'center'}}
                            selectedValue={produto.categoria}
                            itemStyle={{textAlign: 'center'}}
                            onValueChange={(itemValue, itemIndex) => setProduto({ categoria: itemValue })}
                            mode="dropdown"
                        >
                            <Picker.Item label="SELECIONE"/>
                            <Picker.Item label="PERFUMARIA" value='PERFUMARIA' />
                            <Picker.Item label="BEBIDAS" value='BEBIDAS' />
                            <Picker.Item label="HORTIFRUTI" value='HORTIFRUTI' />
                            <Picker.Item label="TINTAS / PINTURAS" value='TINTAS / PINTURAS' />
                            <Picker.Item label="PADARIA" value='PADARIA' />
                            <Picker.Item label="CASA E CONSTRUÇÃO" value='CASA E CONSTRUÇÃO' />
                            <Picker.Item label="FARMÁCIA" value='FARMÁCIA' />
                            <Picker.Item label="AUTOS" value='AUTOS' />
                            <Picker.Item label="BAZAR" value='BAZAR' />
                            <Picker.Item label="PETSHOP" value='PETSHOP' />
                            <Picker.Item label="TABACARIA" value='TABACARIA' />
                            <Picker.Item label="ELETRO" value='ELETRO' />
                            <Picker.Item label="HIGIENE E BELEZA" value='HIGIENE E BELEZA' />
                            <Picker.Item label="BEBÊ" value='BEBÊ' />
                            <Picker.Item label="INFANTIL" value='INFANTIL' />
                            <Picker.Item label="CONGELADOS" value='CONGELADOS' />
                            <Picker.Item label="SUPLEMENTOS" value='SUPLEMENTOS' />
                            <Picker.Item label="PAPELARIA" value='PAPELARIA' />
                            <Picker.Item label="FRIOS E LATICÍNIOS" value='FRIOS E LATICÍNIOS' />
                            <Picker.Item label="AÇOUGUE" value='AÇOUGUE' />
                            <Picker.Item label="MERCEARIA" value='MERCEARIA' />
                            <Picker.Item label="LIMPEZA" value='LIMPEZA' />
                        </Picker>
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>CODIGO DE BARRAS</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput
                            style={[Styles.tamanhoInputFull, Styles.inputs]}
                            value={produto.codbar}
                            placeholder={"CODIGO DE BARRAS"}
                            keyboardType={'numeric'}
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



