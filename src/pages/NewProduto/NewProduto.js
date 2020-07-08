import React, { Component } from 'react'
import {
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'

import Styles from './style'

export default function Produto({ navigation }) {

    return (
        <KeyboardAvoidingView style={Styles.container} behavior={'padding'} keyboardVerticalOffset={30}>
            <View style={[Styles.box1]}>
                <Image source={require('../../Assets/Arroz.png')} style={Styles.prodImg}/>
                <View style={Styles.Codbar}>
                    <TouchableOpacity style={Styles.codbarItem} onPress={() => navigation.navigate('Mycamera')}>
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
                        <TextInput style={[Styles.tamanhoInputFull, Styles.inputs,]} />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>QTD</Text>
                        <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel2]}>PREÇO</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput style={[Styles.tamanhoInputMetade, Styles.inputs]} />
                        <TextInput style={[Styles.tamanhoInputMetade, Styles.inputs]} />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>CATEGORIA</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput style={[Styles.tamanhoInputFull, Styles.inputs,]} />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>DETALHES</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput style={[Styles.tamanhoInputFull, Styles.inputs,]} />
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
