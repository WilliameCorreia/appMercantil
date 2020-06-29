import React, { useState, useEffect } from 'react'
import {TouchableOpacity, ActivityIndicator} from 'react-native'
import { Image } from 'react-native-elements';
import styles from './style'

/* import * as data from '../../Produtos.json' */
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';

export default function Categorias( { navigation } ) {

    const newReference = database().ref('/Categorias');

    const [categorias, setCategorias] = useState([])

    const Lista_Categorias = async () => {
        const lista = await newReference.once('value').then(dados => {
            let _listaCategoria = []
            dados.forEach((child) =>{
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
    }, [])

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
    console.log('lista de categorias')
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {Array(12).fill(
                <ShimmerPlaceHolder style={styles.img} autoRun={true} visible={categorias.length != 0} style={styles.btnCategoria}/>
            )}
            {categorias.map(item => {
                return (
                    <TouchableOpacity 
                        style={styles.btnCategoria}
                        key={item.nome}
                        onPress={() => navigation.navigate('MeusProdutos', item.nomeBusca)}
                    >
                        <Image 
                            source={{uri:item.uri}}
                            style={styles.uriImg}
                            PlaceholderContent={<ActivityIndicator style={styles.Indicator} color={'red'} />}
                            transition={true}
                        />
                    </TouchableOpacity>
                )
            })}
        </ScrollView >
    )
}
