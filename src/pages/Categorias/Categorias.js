import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'

/* import * as data from '../../Produtos.json' */
import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';

export default function Categorias( { navigation } ) {

    const newReference = database().ref('/Categorias');

    const [categorias, setCategorias] = useState([])

    const Lista_Categorias = async () => {
        const lista = await newReference.once('value').then(dados => {
            let _listaCategoria = []
            dados.forEach((child) =>{
                console.log(child)
                _listaCategoria.push(child.val())
            })
            return (_listaCategoria)
        })
        return lista
    }

    useEffect(() =>{
        Lista_Categorias().then(dados => {
            setCategorias(dados)
           // console.log(dados)
        })
    })

   /*  const [Categorias, setCategorias] = useState([
        {nome:"AÇOUGUE", nomeBusca: "ACOUGUE"},
        {nome:"AUTOS", nomeBusca: "AUTOS"},
        {nome:"BAZAR", nomeBusca: "BAZAR"},
        {nome:"BEBÊ", nomeBusca: "BEBE"},
        {nome:"BEBIDAS", nomeBusca: "BEBIDAS"},
        {nome:"CASA E CONSTRUÇÃO", nomeBusca: "CASA E CONSTRUCAO"},
        {nome:"CONGELADOS", nomeBusca: "CONGELADOS"},
        {nome:"ELETRO", nomeBusca: "ELETRO"},
        {nome:"FARMÁCIA", nomeBusca: "FARMACIA"},
        {nome:"FRIOS E LATICÍNIOS", nomeBusca: "FRIOS E LATICINIOS"},
        {nome:"HIGIENE E BELEZA", nomeBusca: "HIGIENE E BELEZA"},
        {nome:"HORTIFRUTI", nomeBusca: "HORTIFRUTI"},
        {nome:"INFANTIL", nomeBusca: "INFANTIL"},
        {nome:"LIMPEZA", nomeBusca: "LIMPEZA"},
        {nome:"MERCEARIA", nomeBusca: "MERCEARIA"},
        {nome:"PADARIA", nomeBusca: "PADARIA"},
        {nome:"PAPELARIA", nomeBusca: "PAPELARIA"},
        {nome:"PERFUMARIA", nomeBusca: "PERFUMARIA"},
        {nome:"PETSHOP", nomeBusca: "PETSHOP"},
        {nome:"SUPLEMENTOS", nomeBusca: "SUPLEMENTOS"},
        {nome:"TABACARIA", nomeBusca: "TABACARIA"},
        {nome:"TINTAS / PINTURAS", nomeBusca: "TINTAS / PINTURAS"},
    ]) */

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
            {categorias.map(item => {
                return (
                    <TouchableOpacity 
                        style={styles.btnCategoria}
                        key={item.nome}
                        onPress={() => navigation.navigate('MeusProdutos', item.nomeBusca)}
                    >
                        <Text style={styles.label}>{item.nome}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView >
    )
}
