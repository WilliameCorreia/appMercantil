import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native'

import styles from './style'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import database from '@react-native-firebase/database';

export default function Estabelecimento({ navigation, route }) {

    /* const {token} = route.params

    const newReference = database().ref('/Estabelecimento').child(token);

    const [razaoSocial, SetRazaoSocial] = useState();
    const [estabelecimento, SetEstabelecimento] = useState();
    const [telefone, SetTelefone] = useState();
    const [cep, SetCep] = useState();
    const [cidade, SetCidade] = useState();
    const [estado, SetEstado] = useState();
    const [bairro, SetBairro] = useState();
    const [endereco, SetEndereco] = useState();
    const [numero, SetNumero] = useState();
    const [complemento, SetComplemento] = useState();

    const registrar = () => {
        let dados = {
            usuarioId: token,
            razaoSocial: razaoSocial,
            estabelecimento: estabelecimento,
            telefone: telefone,
            cep: cep,
            cidade: cidade,
            estado: estado,
            bairro: bairro,
            endereco: endereco,
            numero: numero,
            complemento: complemento
        }
        newReference.set(dados).then(() => {
            Alert.alert('Dados cadastrados com sucesso !');
        }).catch(error => {
            console.log(error)
        })
    }
    console.log('Estabelecimento'); */
    return (
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <Image style={styles.img_stb} source={require('../../Assets/estabe.png')} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>DADOS DO</Text>
                    <Text style={[styles.text, styles.text_underline]}>ESTABELECIMENTO</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>RAZÃO SOCIAL</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Razão social do estabelecimento'
                        onChangeText={text => SetRazaoSocial(text)}
                    />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>NOME DO ESTABELECIMENTO</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome do Estabelecimento'
                        onChangeText={text => SetEstabelecimento(text)}
                    />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>TELEFONE</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Telefone'
                        onChangeText={text => SetTelefone(text)}
                    />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>CEP</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Cep'
                        onChangeText={text => SetCep(text)}
                    />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>CIDADE</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Cidade'
                        onChangeText={text => SetCidade(text)}
                    />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>ESTADO</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Estado'
                        onChangeText={text => SetEstado(text)}
                    />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>BAIRRO</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Bairro'
                        onChangeText={text => SetBairro(text)}
                    />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>ENDEREÇO</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Endereço'
                        onChangeText={text => SetEndereco(text)}
                    />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>NUMERO</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Numero'
                        onChangeText={text => SetNumero(text)}
                    />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>COMPLEMENTO <Text>(Opcional)</Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Complemento'
                        onChangeText={text => SetComplemento(text)}
                    />
                </View>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.btn} onPress={() => registrar()}>
                    <Text style={styles.text}>CONCLUIR</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}
