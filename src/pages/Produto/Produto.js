import React, { Component } from 'react'
import {
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native'

import Styles from './style'

export default function Produto({ route }) {
    const item = route.params
    console.log("Produtos =>")
    console.log(item)
    return (
        <ScrollView style={Styles.container}>
            <View style={Styles.box1}>
                <View style={Styles.row}>
                    <View style={Styles.metadeTop1}>
                        <Text style={[Styles.text, Styles.colorLabelProduto]}> {item.produto} </Text>
                    </View>
                    <View style={Styles.metadeTop2}>
                        {item.quantidade == 0 ?
                            <TouchableOpacity style={Styles.btnTop} >
                                <Text style={[Styles.colorBranco, Styles.textStatus]}>EM FALTA</Text>
                            </TouchableOpacity>
                            : <TouchableOpacity style={[Styles.btnTop, {backgroundColor: 'green'}]} >
                                <Text style={[Styles.colorBranco, Styles.textStatus]}>DISPONÍVEL</Text>
                            </TouchableOpacity>}

                    </View>
                </View>
                <View style={[Styles.bordadoTop]}>
                    <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                        <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel1]}>QTD</Text>
                        <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel2]}>PREÇO</Text>
                    </View>
                    <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                        <TextInput style={[Styles.tamanhoInputMetade, Styles.inputs, Styles.espacamentoInput1]} value={item.quantidadeEmbalagem} />
                        <TextInput style={[Styles.tamanhoInputMetade, Styles.inputs, Styles.espacamentoInput2]} value={'R$ ' + item.precoMedio} />
                    </View>
                    <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                        <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel1]}>CATEGORIA</Text>
                    </View>
                    <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                        <TextInput style={[Styles.tamanhoInputFull, Styles.inputs, Styles.espacamentoInput1]} value={item.categoria} />
                    </View>
                    <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                        <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel1]}>DETALHES</Text>
                    </View>
                    <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                        <TextInput style={[Styles.tamanhoInputFull, Styles.inputs, Styles.espacamentoInput1]} value={item.produtoAcento} />
                    </View>
                    <View style={[Styles.alignCenter, Styles.row, Styles.margin]}>
                        <TouchableOpacity style={Styles.BtnAlterar}>
                            <Text style={[Styles.colorBranco, Styles.text]}>ALTERAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[Styles.box2]}>
                <View style={[Styles.alignCenter, Styles.row, Styles.margin]}>
                    <View style={Styles.metadeBotton1}>
                        <Text style={[Styles.text, Styles.colorLabelProduto]}> STATUS </Text>
                    </View>
                    <View style={Styles.metadeBotton2}>
                        <TouchableOpacity style={Styles.btnTop} >
                            <Text style={[Styles.colorBranco, Styles.textStatus]}>EM OFERTA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
