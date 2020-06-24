import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

/* import * as data from '../../Produtos.json' */
import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';

export default function Categorias( { navigation } ) {

    const newReference = database().ref();

    const [Categorias, setCategorias] = useState([
        "AÇOUGUE",
        "AUTOS",
        "BAZAR",
        "BEBÊ",
        "BEBIDAS",
        "CASA E CONSTRUÇÃO",
        "CONGELADOS",
        "ELETRO",
        "FARMÁCIA",
        "FRIOS E LATICÍNIOS",
        "HIGIENE E BELEZA",
        "HORTIFRUTI",
        "INFANTIL",
        "LIMPEZA",
        "MERCEARIA",
        "PADARIA",
        "PAPELARIA",
        "PERFUMARIA",
        "PETSHOP",
        "SUPLEMENTOS",
        "TABACARIA",
        "TINTAS / PINTURAS",
    ])

    /* const [produtos, SetProdutos] = useState(data.produtos)

    produtos.map(item => {
        newReference.child(item.codbar).set(item).then(() =>{
            console.log('Sucesso')
        }).catch(erro =>{
            console.log('error')
        })
    }) */

    function teste() {
        /*  let x = newReference.child('1331770004509/categoria').once('value', dados =>{
             console.log(dados.val())
         }) */
        /*  newReference.child('Produtos').orderByChild('categoria').equalTo('MERCEARIA').once('value', dados =>{
             console.log(dados.val())
         }) */
    }

    teste()

    //console.log(produtos)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {Categorias.map(item => {
                return (
                    <TouchableOpacity 
                        style={styles.btnCategoria}
                        onPress={() => navigation.navigate('MeusProdutos')}
                    >
                        <Text style={styles.label}>{item}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView >
    )
}
