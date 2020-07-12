import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native'

import styles from './style'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import database from '@react-native-firebase/database';
import MyModal from '../../Componentes/MyModal'

export default function Estabelecimento({ navigation, route }) {

    //parametro para cadastrar estabelecimento
    //const { uid } = route.params

    //const newReference = database().ref('/Estabelecimento').child(uid);

    //modal
    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    //campos de cadastro
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
            usuarioId: uid,
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

        for (const key in dados) {
            console.log(key)
            if (dados.hasOwnProperty(key)) {
                console.log(dados[key]);
            }
        }

        /* newReference.set(dados).then(() => {
            setMsnModal('Dados cadastrados com sucesso !')
            setModalActive(true)
        }).catch(error => {
            console.log(error)
        }) */
    }
    console.log('Estabelecimento');
    return (
        <ScrollView style={styles.container}>
            <View style={styles.box1}>
                <Image style={styles.img_stb} source={require('../../Assets/estabe.png')} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>DADOS DO</Text>
                    <Text style={[styles.text, styles.text_underline]}>ESTABELECIMENTO</Text>
                </View>
            </View>
            <View style={styles.box2} >
                <Text style={styles.label}>RAZÃO SOCIAL</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Razão social do estabelecimento'
                    onChangeText={text => SetRazaoSocial(text)}
                />
            </View>
            <View style={styles.box2} >
                <Text style={styles.label}>NOME DO ESTABELECIMENTO</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do Estabelecimento'
                    onChangeText={text => SetEstabelecimento(text)}
                />
            </View>
            <View style={styles.box2}>
                <Text style={styles.label}>TELEFONE</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Telefone'
                    onChangeText={text => SetTelefone(text)}
                />
            </View>
            <View style={styles.box2}>
                <Text style={styles.label}>CEP</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Cep'
                    onChangeText={text => SetCep(text)}
                />
            </View>
            <View style={styles.box2}>
                <Text style={styles.label}>CIDADE</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Cidade'
                    onChangeText={text => SetCidade(text)}
                />
            </View>
            <View style={styles.box2}>
                <Text style={styles.label}>ESTADO</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Estado'
                    onChangeText={text => SetEstado(text)}
                />
            </View>
            <View style={styles.box2}>
                <Text style={styles.label}>BAIRRO</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Bairro'
                    onChangeText={text => SetBairro(text)}
                />
            </View>
            <View style={styles.box2}>
                <Text style={styles.label}>ENDEREÇO</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Endereço'
                    onChangeText={text => SetEndereco(text)}
                />
            </View>
            <View style={styles.box2}>
                <Text style={styles.label}>NUMERO</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Numero'
                    onChangeText={text => SetNumero(text)}
                />
            </View>
            <View style={styles.box2}>
                <Text style={styles.label}>COMPLEMENTO <Text>(Opcional)</Text></Text>
                <TextInput
                    style={styles.input}
                    placeholder='Complemento'
                    onChangeText={text => SetComplemento(text)}
                />
            </View>
            <View style={styles.box2}>
                <TouchableOpacity style={styles.btn} onPress={() => registrar()}>
                    <Text style={styles.text}>CONCLUIR</Text>
                </TouchableOpacity>
            </View>
            <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} />
        </ScrollView>
    )
}