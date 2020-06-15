import React, { PureComponent, useState, Component } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


export const Filho = props =>{
    return(
        <TextInput value={props.nome} onChangeText={props.testando}/>
    )
}

export default teste => {

    const [valor, setValor] = useState();

    const _teste = nome => {
        setValor(nome);
        console.log(nome)
    }

    return(
        <View>
            <Text>{valor}</Text>
            <Filho nome={valor} testando={_teste}/>
        </View>
    )
}