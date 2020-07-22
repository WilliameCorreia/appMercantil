import React, { useState, useContext, useRef } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './style'
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import MyModal from '../../Componentes/MyModal';

import { Formik } from 'formik';
import * as yup from 'yup';
import api from '../../Services/api'
import AuthContext from '../../Contexts/Auth'

export default function Estabelecimento({ navigation}) {

    const {usuario, signIn, setTest} = useContext(AuthContext);

    console.log(usuario);
    //modal
    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    //campos de cadastro
    const razaoSocial = useRef();
    const estabelecimento = useRef();
    const cnpj = useRef();
    const telefone = useRef();
    const cep = useRef();
    const cidade = useRef();
    const estado = useRef();
    const bairro = useRef();
    const endereco = useRef();
    const numero = useRef();
    const complemento = useRef();

    const registrarEstabelecimento = (values) => {
        console.log("####################################################################");
        console.log(values);
        api.post("Estabelecimento", {
            Token: usuario.uid,
             Email: usuario.email,
            Estabelecimento: values.estabelecimento,
            RazaoSocial: values.razaoSocial,
            Cnpj: values.cnpj,
            Ativo: false,
            Telefones: values.telefone
        }).then(dados =>{
            console.log(dados.data);
            typeof(dados.data)
            if(dados.data){
                setMsnModal("Dados cadastrados com sucesso ! aguarde a ativação da sua conta");
                setTest(true)
            }else{
                setMsnModal("Estabelecimento já cadastrado!");
            }
            setModalActive(true);
        }).catch(errors =>{
            setMsnModal("Error ao cadastrar o estabelecimento !!" + errors);
            setModalActive(true);
        });
        console.log(values)
    }

    console.log('Estabelecimento');

    const FormSchema = yup.object().shape({
        razaoSocial: yup.string().required('Campo obrigatório'),
        estabelecimento: yup.string().required('Campo obrigatório'),
        cnpj: yup.string().required('Campo obrigatório'),
        telefone: yup.string().required('Campo obrigatório'),
        cep: yup.string().required('Campo obrigatório'),
        cidade: yup.string().required('Campo obrigatório'),
        estado: yup.string().required('Campo obrigatório'),
        bairro: yup.string().required('Campo obrigatório'),
        endereco: yup.string().required('Campo obrigatório'),
        numero: yup.string().required('Campo obrigatório'),
    })
    
    return (

        <Formik
            initialValues={{
                razaoSocial: '',
                estabelecimento: '',
                cnpj: '',
                telefone: '',
                cep: '',
                cidade: '',
                estado: '',
                bairro: '',
                endereco: '',
                numero: '',
                complemento: ''
            }}
            onSubmit={(values, { resetForm }) =>{
                registrarEstabelecimento(values)
                //resetForm();
            }}
            validationSchema={FormSchema}
        >
            {({values, handleChange, handleSubmit, errors})=> (
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
                        ref={razaoSocial}
                        value={values.razaoSocial}
                        onChangeText={handleChange('razaoSocial')}
                        style={styles.input}
                        placeholder='Razão social'
                    />
                    {errors.razaoSocial && <Text style={styles.textErro}>{errors.razaoSocial}</Text>}
                </View>
                <View style={styles.box2} >
                    <Text style={styles.label}>NOME DO ESTABELECIMENTO</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome do Estabelecimento'
                        ref={estabelecimento}
                        value={values.estabelecimento}
                        onChangeText={handleChange('estabelecimento')}
                    />
                    {errors.estabelecimento && <Text style={styles.textErro}>{errors.estabelecimento}</Text>}
                </View>
                <View style={styles.box2} >
                    <Text style={styles.label}>CNPJ</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='CNPJ'
                        ref={cnpj}
                        value={values.cnpj}
                        onChangeText={handleChange('cnpj')}
                    />
                    {errors.estabelecimento && <Text style={styles.textErro}>{errors.estabelecimento}</Text>}
                </View>
                <View style={styles.box2}>
                    <Text style={styles.label}>TELEFONE</Text>
                    <TextInput
                        keyboardType={'numeric'}
                        style={styles.input}
                        placeholder='Telefone'
                        ref={telefone}
                        value={values.telefone}
                        onChangeText={handleChange('telefone')}
                    />
                    {errors.telefone && <Text style={styles.textErro}>{errors.telefone}</Text>}
                </View>
                <View style={styles.box2}>
                    <Text style={styles.label}>CEP</Text>
                    <TextInput
                    keyboardType={'numeric'}
                        style={styles.input}
                        placeholder='Cep'
                        ref={cep}
                        value={values.cep}
                        onChangeText={handleChange('cep')}
                    />
                    {errors.cep && <Text style={styles.textErro}>{errors.cep}</Text>}
                </View>
                <View style={styles.box2}>
                    <Text style={styles.label}>CIDADE</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Cidade'
                        ref={cidade}
                        value={values.cidade}
                        onChangeText={handleChange('cidade')}
                    />
                    {errors.cidade && <Text style={styles.textErro}>{errors.cidade}</Text>}
                </View>
                <View style={styles.box2}>
                    <Text style={styles.label}>ESTADO</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Estado'
                        ref={estado}
                        value={values.estado}
                        onChangeText={handleChange('estado')}
                    />
                    {errors.estado && <Text style={styles.textErro}>{errors.estado}</Text>}
                </View>
                <View style={styles.box2}>
                    <Text style={styles.label}>BAIRRO</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Bairro'
                        ref={bairro}
                        value={values.bairro}
                        onChangeText={handleChange('bairro')}
                    />
                    {errors.bairro && <Text style={styles.textErro}>{errors.bairro}</Text>}
                </View>
                <View style={styles.box2}>
                    <Text style={styles.label}>ENDEREÇO</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Endereço'
                        ref={endereco}
                        value={values.endereco}
                        onChangeText={handleChange('endereco')}
                    />
                    {errors.endereco && <Text style={styles.textErro}>{errors.endereco}</Text>}
                </View>
                <View style={styles.box2}>
                    <Text style={styles.label}>NUMERO</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Numero'
                        ref={numero}
                        value={values.numero}
                        onChangeText={handleChange('numero')}
                    />
                    {errors.numero && <Text style={styles.textErro}>{errors.numero}</Text>}
                </View>
                <View style={styles.box2}>
                    <Text style={styles.label}>COMPLEMENTO <Text>(Opcional)</Text></Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Complemento'
                        ref={complemento}
                        value={values.complemento}
                        onChangeText={handleChange('complemento')}
                    />
                </View>
                <View style={styles.box2}>
                    <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                        <Text style={styles.text}>CONCLUIR</Text>
                    </TouchableOpacity>
                </View>
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} />
            </ScrollView>
            )}
        </Formik>
    )
}