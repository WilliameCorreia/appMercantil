import React, { useState, useEffect } from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements';
import styles from './style'

/* import * as data from '../../Produtos.json' */
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { ScrollView } from 'react-native-gesture-handler';
import api from '../../Services/api'
import ProdutosLista from '../../Componentes/ProdutosLista'

export default function Categorias({ navigation }) {

    return(
        <ProdutosLista navigation={navigation} />
    )
   
}


















/*
const [categorias, SetCategorias] = useState([]);

const LoadCategorias = async () =>{

    const getCategorias = await api.get("Categorias").then(response =>{
        SetCategorias(response.data)
        console.log(response.data)
    }).catch(error =>{
        console.log(error);
    })
}

 useEffect(() => {
    LoadCategorias();
    return () => {
    }
}, [])

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
                    onPress={() => navigation.navigate('MeusProdutos', item.id)}
                >
                    <Image
                        source={{ uri: 'https://appmercantilimagens.s3.us-east-2.amazonaws.com/categorias/' + item.categoriaPng }}
                        style={styles.uriImg}
                        PlaceholderContent={<ActivityIndicator style={styles.Indicator} color={'red'} />}
                        transition={true}
                    />
                </TouchableOpacity>
            )
        })}
    </ScrollView >
) */