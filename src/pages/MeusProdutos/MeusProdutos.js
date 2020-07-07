import React from 'react';

import ListaProdutos from '../../Services/ListaProdutos'
import { useNavigation } from '@react-navigation/native';

export default function MeusProdutos({ route }) {

    const navigation = useNavigation();

    const item = route.params 

    console.log('meus produtos => ' + item)
    return(
        <ListaProdutos categoria={item} navigation={navigation}/>
    )
}