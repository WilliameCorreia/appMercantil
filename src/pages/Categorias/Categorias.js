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

    const init = async () => {
        console.log('entrou init')
        const conteudo = await newReference.child('1331770004509/categoria').once('value', dados =>{
            console.log('conteudo1')
            return dados.val()
        })

        const conteudo2 = await newReference.child('Produtos').orderByChild('categoria').equalTo('MERCEARIA').once('value', dados =>{
            console.log('conteudo2')
            return dados.val()
        })

        return conteudo2
        
    }

   /*  init().then(dados =>{
        console.log(dados)
    }) */

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {Categorias.map(item => {
                return (
                    <TouchableOpacity 
                        style={styles.btnCategoria}
                        key={item}
                        onPress={() => navigation.navigate('MeusProdutos', {item})}
                    >
                        <Text style={styles.label}>{item}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView >
    )
}
