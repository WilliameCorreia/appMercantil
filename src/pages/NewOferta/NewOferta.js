import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'

import Styles from './style'
import styles from '../Home/style'

export default class NewOferta extends Component {
    render() {
        return (
            <ScrollView style={Styles.container}>
                <View style={[Styles.box1, Styles.bordado]}>
                    <View style={Styles.row}>
                        <View style={Styles.margin}>
                            <Text style={[Styles.text, Styles.colorLabelProduto]}> Arroz Branco </Text>
                            <Text style={[Styles.text, Styles.colorLabelProduto]}> #00001 </Text>
                        </View>
                        <View style={Styles.margin}>
                            <TouchableOpacity style={[Styles.btnStatus, Styles.paddingHorizontal, Styles.colorVermelho]} >
                                <Text style={[Styles.colorBranco, Styles.BtnStatusText, Styles.BtnFont]}>EM FALTA</Text>
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
                        <View style={[Styles.alignCenter, Styles.row, Styles.margin]}>
                            <TouchableOpacity style={Styles.BtnAlterar}>
                                <Text style={[Styles.colorBranco]}>ALTERAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={[Styles.box2, Styles.bordado, Styles.colum, Styles.alignCenter]}>
                    <View style={[Styles.alignCenter, Styles.row, Styles.margin]}>
                        <TouchableOpacity style={[Styles.colorVermelho]}>
                            <Text style={[Styles.BtnEncerrarText, Styles.colorBranco]} >ENCERRAR OFERTA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
