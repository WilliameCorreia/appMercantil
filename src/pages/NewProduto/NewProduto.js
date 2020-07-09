import React, {useState, useEffect } from 'react'
import {
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'


import Api from '../../Services/api'

import Styles from './style'


export default function Produto({ navigation, route }) {

    const [produto, setProduto] = useState({
        produto: '',
        qtn: '',
        preco: '',
        categoria: '',
        detalhes: ''
    });

    useEffect(()=>{
        if(route.params){
            let { produto } = route.params
            setProduto({produto:produto.produto, 
                        qtn: produto.quantidadeEmbalagem, 
                        preco: produto.precoMedio, 
                        categoria: produto.categoria, 
                        detalhes: produto.produtoAcento 
            })
            console.log(route.params.produto)
        }
    },[route.params])

    const getProduto = (codbar) =>{
        const produto = Api.get(`ProdutosDb/codbar/${codbar}`).then(response =>{
            setProduto(response.data);
        }).catch(erro =>{
            console.log(erro);
        });
    }

    return (
        <KeyboardAvoidingView style={Styles.container} behavior={'padding'} keyboardVerticalOffset={30}>
            <View style={[Styles.box1]}>
                <Image source={require('../../Assets/Arroz.png')} style={Styles.prodImg}/>
                <View style={Styles.Codbar}>
                    <TouchableOpacity style={Styles.codbarItem} onPress={() => navigation.navigate('Mycamera', getProduto)}>
                        <Image source={require('../../Assets/codbar.png')} style={Styles.codbarImg} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.box2}>
                <View style={[Styles.containerForm]}>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>PRODUTO</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput style={[Styles.tamanhoInputFull, Styles.inputs,]} value={produto.produto} />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>QTD</Text>
                        <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel2]}>PREÇO</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput style={[Styles.tamanhoInputMetade, Styles.inputs]} value={produto.qtn} />
                        <TextInput style={[Styles.tamanhoInputMetade, Styles.inputs]} value={produto.preco.toString()}/>
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>CATEGORIA</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput style={[Styles.tamanhoInputFull, Styles.inputs,]} value={produto.categoria}/>
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>DETALHES</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput style={[Styles.tamanhoInputFull, Styles.inputs,]} value={produto.detalhes}/>
                    </View>
                    <View style={Styles.alignCenter}>
                        <TouchableOpacity style={Styles.BtnAlterar}>
                            <Text style={[Styles.colorBranco, Styles.text]}>SALVAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
