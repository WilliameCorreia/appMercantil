import React, { Component, useContext } from 'react'
import { Image, Text, View, TouchableWithoutFeedback, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Styles from './style'

import AuthContext from '../../Contexts/Auth'



export default function usuario({ route }) {
    const { estabelecimento } = useContext(AuthContext);
    console.log(estabelecimento)
    return (
        <View style={Styles.container}>
            <View style={Styles.box1}>
                <Image style={Styles.img} source={require('../../Assets/person.png')} />
            </View>
            < ScrollView style={Styles.box2}>
                <View style={Styles.item}>
                    <Text style={Styles.itemText}>ESTABELECIMENTO</Text>
                    <TextInput  style={Styles.itemInput} />
                </View>
                <View style={Styles.item}>
                    <Text style={Styles.itemText}>CNPJ</Text>
                    <TextInput  style={Styles.itemInput} />
                </View>
                <View style={Styles.item}>
                    <Text style={Styles.itemText}>RAZÃO SOCIAL</Text>
                    <TextInput  style={Styles.itemInput} />
                </View>
                <View style={Styles.item}>
                    <Text style={Styles.itemText}>Endereço</Text>
                    <TextInput  style={Styles.itemInput} />
                </View>
                <View style={Styles.item}>
                    <Text style={Styles.itemText}>Telefone</Text>
                    <TextInput  style={[Styles.itemInput, Styles.ultimo]} />
                </View>
            </ScrollView>
            <View style={Styles.box3}>
                <TouchableOpacity style={Styles.item8_1}>
                    <Text style={Styles.item8_1Text} >ALTERAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}



