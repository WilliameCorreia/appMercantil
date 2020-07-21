import React, { Component, useContext, useState, useRef } from 'react'
import { Image, Text, View, TouchableWithoutFeedback, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Styles from './style'

import AuthContext from '../../Contexts/Auth'
import MyModal from '../../Componentes/MyModal';

import { Formik } from 'formik';
import * as yup from 'yup';
import api from '../../Services/api'





export default function usuario({ route }) {
    const { Estabelecimento } = useContext(AuthContext);
    console.log(Estabelecimento)

    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    //campos de cadastro
    const razaoSocial = useRef();
    const estabelecimentoR = useRef();
    const cnpj = useRef();
    const telefone = useRef();
    const cep = useRef();
    const cidade = useRef();
    const estado = useRef();
    const bairro = useRef();
    const enderecos = useRef();
    const numero = useRef();
    const complemento = useRef();

    const registrarEstabelecimento = (values) => {
        console.log("####################################################################");
        console.log(values);
        api.put("Estabelecimento", {
            Id: Estabelecimento.id,
            Token: Estabelecimento.token,
            Email: Estabelecimento.email,
            Estabelecimento: values.estabelecimentoR,
            RazaoSocial: values.razaoSocial,
            Cnpj: values.cnpj,
            Ativo: true,
            Telefones: values.telefone,
            enderecos: values.enderecos
        }).then(dados => {
            console.log(dados.data);
            typeof (dados.data)
            if (dados.data) {
                setMsnModal("Dados cadastrados com sucesso ! aguarde a ativação da sua conta");
            } else {
                setMsnModal("Estabelecimento já cadastrado!");
            }
            setModalActive(true);
        }).catch(errors => {
            console.log(errors);
        });
        console.log(values)
    }

    function clearState() {
        set
    }

    const FormSchema = yup.object().shape({
        // razaoSocial: yup.string().required('Campo obrigatório'),
        // estabelecimento: yup.string().required('Campo obrigatório'),
        // cnpj: yup.string().required('Campo obrigatório'),
        // telefone: yup.string().required('Campo obrigatório'),
        // cep: yup.string().required('Campo obrigatório'),
        // cidade: yup.string().required('Campo obrigatório'),
        // estado: yup.string().required('Campo obrigatório'),
        // bairro: yup.string().required('Campo obrigatório'),
        // endereco: yup.string().required('Campo obrigatório'),
        // numero: yup.string().required('Campo obrigatório'),
    })
    function teste (values){
        console.log(values)
    }

    return (
        <Formik
            initialValues={{
                estabelecimentoR: Estabelecimento.estabelecimento,
                cnpj: Estabelecimento.cnpj,
                razaoSocial: Estabelecimento.razaoSocial,
                enderecos: Estabelecimento.enderecos,
                telefone: Estabelecimento.telefones,
                // cep: '',
                // cidade: '',
                // estado: '',
                // bairro: '',
                // numero: '',
                // complemento: ''
            }}
           
            onSubmit={(values, { resetForm }) => {
                registrarEstabelecimento(values)
                teste(values)
                // resetForm();
            }}
            validationSchema={FormSchema}
        >
            {({ values, handleChange, handleSubmit, errors }) => (
                <View style={Styles.container}>
                    <View style={Styles.box1}>
                        <Image style={Styles.img} source={require('../../Assets/person.png')} />
                    </View>
                    < ScrollView style={Styles.box2}>
                        <View style={Styles.item}>
                            <Text style={Styles.itemText}>ESTABELECIMENTO</Text>
                            <TextInput
                                style={Styles.itemInput}
                                ref={estabelecimentoR}
                                value={values.estabelecimentoR}
                                onChangeText={handleChange('estabelecimentoR')}
                                placeholder='Nome Estabelecimento'
                            />
                            {errors.numero && <Text style={Styles.textErro}>{errors.numero}</Text>}
                        </View>
                        <View style={Styles.item}>
                            <Text style={Styles.itemText}>CNPJ</Text>
                            <TextInput
                                style={Styles.itemInput}
                                ref={cnpj}
                                value={values.cnpj}
                                onChangeText={handleChange('cnpj')}
                                placeholder='CNPJ'
                            />
                            {errors.numero && <Text style={Styles.textErro}>{errors.numero}</Text>}
                        </View>
                        <View style={Styles.item}>
                            <Text style={Styles.itemText}>RAZÃO SOCIAL</Text>
                            <TextInput
                                style={Styles.itemInput}
                                ref={razaoSocial}
                                value={values.razaoSocial}
                                onChangeText={handleChange('razaoSocial')}
                                placeholder='razaoSocial'
                            />
                            {errors.numero && <Text style={Styles.textErro}>{errors.numero}</Text>}
                        </View>
                        <View style={Styles.item}>
                            <Text style={Styles.itemText}>Endereço</Text>
                            <TextInput
                                style={Styles.itemInput}
                                ref={enderecos}
                                value={values.enderecos}
                                onChangeText={handleChange('enderecos')}
                                placeholder='enderecos'
                            />
                            {errors.numero && <Text style={Styles.textErro}>{errors.numero}</Text>}
                        </View>
                        <View style={Styles.item}>
                            <Text style={Styles.itemText}>Telefone</Text>
                            <TextInput 
                            style={[Styles.itemInput, Styles.ultimo]} 
                            ref={telefone}
                            value={values.telefone}
                            onChangeText={handleChange('telefone')}
                            placeholder='telefone'
                            />
                            {errors.numero && <Text style={Styles.textErro}>{errors.numero}</Text>}
                        </View>
                    </ScrollView>
                    <View style={Styles.box3}>
                        <TouchableOpacity style={Styles.item8_1} onPress={handleSubmit}>
                            <Text style={Styles.item8_1Text} >ALTERAR</Text>
                        </TouchableOpacity>
                    </View>
                    <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} />
                </View>
            )}
        </Formik>
    );
}



