import React, { useState, useEffect } from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements';
import styles from './style'

/* import * as data from '../../Produtos.json' */
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import database from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';
import { getCategoria } from '../../Services/Auth'

export default function Categorias({ navigation }) {

    const categorias = getCategoria()
    
    console.log(categorias)
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {Array(10).fill(
                <ShimmerPlaceHolder style={styles.uriShimmer} autoRun={true} visible={categorias.length != 0} />
            )}
            {categorias.map(item => {
                return (
                    <TouchableOpacity
                        style={styles.btnCategoria}
                        key={item.nome}
                        onPress={() => navigation.navigate('MeusProdutos', item.nomeBusca)}
                    >
                        <Image
                            source={{ uri: 'https://appmercantilimagens.s3.us-east-2.amazonaws.com/categorias/' + item.foto_Png }}
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
