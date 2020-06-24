import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'

import Styles from './style'

export default class NewOferta extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <View style={[Styles.box1, Styles.bordado]}>
                    <View style={Styles.row}>
                        <View style={Styles.margin}>
                            <Text style={[Styles.text, Styles.colorLabelProduto]}> Arroz Branco </Text>
                            <Text style={[Styles.text, Styles.colorLabelProduto]}> #00001 </Text>
                        </View>
                        <View style={Styles.margin}>
                            <TouchableOpacity style={[Styles.button, Styles.paddingHorizontal]} >
                                <Text style={[Styles.colorBranco]}>EM FALTA</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[Styles.bordadoTop]}>
                        <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                            <Text style={[Styles.fontSizeLabel, Styles.colorPreto, Styles.espacamentolabel1]}>QTD</Text>
                            <Text style={[Styles.fontSizeLabel, Styles.colorPreto, Styles.espacamentolabel2]}>PREÇO</Text>
                        </View>
                        <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                            <TextInput style={[Styles.tamanhoInputMetade, Styles.inputs, Styles.espacamentoInput1]} />
                            <TextInput style={[Styles.tamanhoInputMetade, Styles.inputs, Styles.espacamentoInput2]} />
                        </View>
                        <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                            <Text style={[Styles.fontSizeLabel, Styles.colorPreto, Styles.espacamentolabel1]}>CATEGORIA</Text>
                        </View>
                        <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                            <TextInput style={[Styles.tamanhoInputFull, Styles.inputs, Styles.espacamentoInput1]} />
                        </View>
                        <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                            <Text style={[Styles.fontSizeLabel, Styles.colorPreto, Styles.espacamentolabel1]}>DETALHES</Text>
                        </View>
                        <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                            <TextInput style={[Styles.tamanhoInputFull, Styles.inputs, Styles.espacamentoInput1]} />
                        </View>
                        <View style={[Styles.alignCenter, Styles.row]}>
                            <TouchableOpacity style={Styles.colorBtnAlterar}>
                                <Text>ALTERAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={Styles.box2}>
                    <TouchableOpacity >
                        <Text >Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
