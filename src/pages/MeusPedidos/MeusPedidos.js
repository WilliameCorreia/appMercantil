import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import database from '@react-native-firebase/database';

import Button from '../../Services/Button'
import ListaProdutos from '../../Services/ListaProdutos'


export default class MeusPedidos extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    teste = () => {
        Alert.alert('deu certo!!!')
    }

    render() {
        console.log('meus pedidos')
        return (
            <ListaProdutos/>
        )
    }
}
