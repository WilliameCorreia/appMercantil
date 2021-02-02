import React, { Component, useContext, useState, useRef, useEffect } from 'react'
import { Image, Text, View, Dimensions, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Picker } from '@react-native-community/picker'

const windowHeight = Dimensions.get('window').height / 100


import Styles from './style'

import AuthContext from '../../Contexts/Auth'
import MyModal from '../../Componentes/MyModal';
import ProfilePhoto from '../../Componentes/ProfilePhoto'

import { Formik } from 'formik';
import * as yup from 'yup';
import api from '../../Services/api'
import UploadFile from '../../Services/UploadFile'
import DeleteFile from '../../Services/DeleteFile'

// import ImagePicker from 'react-native-image-picker';


import { EstabelecimentosContext } from '../../Contexts/EstabelecimentoContext'

import S3 from 'aws-sdk/clients/s3';
import { decode } from 'base64-arraybuffer';
import fs from 'react-native-fs';
import CadastroEndereco from '../Cadastro/CadastroEndereco/CadastroEndereco'


export default function usuario({ route }) {
    const { token } = useContext(AuthContext);
    const { Estabelecimento, setEstabelecimento } = useContext(EstabelecimentosContext);
    const { Catestabelecimento } = useContext(EstabelecimentosContext);

    const [tipo_Estabelecimento, setTipo_Estabelecimento] = useState(Estabelecimento.tipoEstabelecimento ? +Estabelecimento.tipoEstabelecimento : Estabelecimento.tipoEstabelecimento);
    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');
    const [_endereco, set_endereco] = useState(Estabelecimento.enderecos);
    const [_enderecoE, set_enderecoE] = useState(<ActivityIndicator />);
    const [enderecoLoad, setEnderecoLoad] = useState(false);

    // useEffect(() => {
    //     if(typeof (_endereco) !== "object" && enderecoLoad){
    //         setTimeout(() => {
    //             setEnderecoLoad(false);
                
    //         }, 3000);
    //     }
    // }, [enderecoLoad])

    useEffect(() => {
        if (typeof (_endereco) === "object") {
            set_enderecoE(<Text style={[Styles.itemText, { textAlign: "center", marginLeft: 0 }]}>{`${_endereco.rua}, ${_endereco.numero}, ${_endereco.bairro}, ${_endereco.cidade} - ${_endereco.estado} - ${_endereco.cep}`}</Text>)
        } else {
            // set_enderecoE(<ActivityIndicator />)
            // setTimeout(() => {
                set_enderecoE(<Text style={[Styles.itemText, { textAlign: "center", marginLeft: 0 }]}>Nenhum endereço cadastrado!</Text>)
            // }, 3000);
        }
    }, [_endereco])

    //campos de cadastro
    const razaoSocial = useRef();
    const estabelecimentoR = useRef();
    const cnpj = useRef();
    const telefone = useRef();
    const enderecos = useRef();
    const tipoestabelecimento = useRef();
    const cep = useRef();
    const cidade = useRef();
    const estado = useRef();
    const bairro = useRef();
    const numero = useRef();
    const complemento = useRef();

    const registrarEstabelecimento = (values) => {
        if (values === "foto") {
            console.log(values)
        } else {
            api.put(`v1/Estabelecimentos/${Estabelecimento.id}`, {
                token: Estabelecimento.token,
                email: Estabelecimento.email,
                _Estabelecimento: values.estabelecimentoR,
                razaoSocial: values.razaoSocial,
                cnpj: values.cnpj,
                ativo: true,
                tipoEstabId: tipo_Estabelecimento,
                tipoEstabelecimento: tipo_Estabelecimento !== null ? tipo_Estabelecimento.toString() : null,
                telefones: values.telefone,
                enderecos: "",
                // enderecos: _endereco,
                fotoName: Estabelecimento.fotoName,
                estabelecimentoFechado: Estabelecimento.estabelecimentoFechado,
                tipo_Estabelecimento: Catestabelecimento.find(cat => cat.tipoEstab_Id === tipo_Estabelecimento) || {}
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(dados => {
                setMsnModal("Dados atualizados!");
                setModalActive(true);
                if (dados.data.result) {
                    setEstabelecimento(dados.data.result);
                }
            }).catch(errors => {
                console.log(errors);
            });
        }
    }

    const Img = function EscolherImagem() {
        console.log("vai selecionar a imagem");
        //Ajusta quais opções estarão disponíveis para o usuário
        const options = {
            title: "Altere a Foto de Perfil",
            takePhotoButtonTitle: "",
            chooseFromLibraryButtonTitle: "Adicione Uma Imagem da Galeria",
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }

        ImagePicker.showImagePicker(options, (response) => {
            console.log('resultado do seletor de imagem', response);

            if (response.didCancel) {
                console.log('operação cancelada pelo usuário');
            } else if (response.error) {
                console.log('Ocorreu um erro com image picker: ', response.error);
            } else if (response.customButton) {
                console.log('Usuário clicou em um botão customizado: ', response.customButton);
            } else {
                const file = {
                    uri: response.uri,
                    name: response.fileName,
                    type: response.type
                }
                // uploadImageOnS3("appmercantilestabelecimento/images", file);
                // DeleteFile("appmercantilestabelecimento", "/images", file, Estabelecimento.token);
                console.log("deletou");
                // UploadFile("appmercantilestabelecimento/images", file, Estabelecimento.token)
            }
        });

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

    return (
        <Formik
            initialValues={{
                estabelecimentoR: Estabelecimento._Estabelecimento,
                cnpj: Estabelecimento.cnpj,
                razaoSocial: Estabelecimento.razaoSocial,
                enderecos: _endereco,
                telefone: Estabelecimento.telefones,
                // cep: '',
                // cidade: '',
                // estado: '',
                // bairro: '',
                // numero: '',
                // complemento: ''
            }}

            onSubmit={(values, { resetForm }) => {
                registrarEstabelecimento(values);
                // resetForm();
            }}
            validationSchema={FormSchema}
        >
            {({ values, handleChange, handleSubmit, errors }) => (
                <View style={Styles.container}>
                    <ProfilePhoto />
                    {/* <ProfilePhoto>{Img.bind(this)}</ProfilePhoto> */}
                    {/* <View style={Styles.box1}>
                        <TouchableOpacity onPress={() => EscolherImagem()}>
                            <Image style={Styles.img} source={require('../../Assets/person.png')} /> */}
                    {/* <Image style={Styles.img} source={{ uri: 'https://appmercantilestabelecimento.s3.us-east-2.amazonaws.com/images/8rHnabDY3XMbq3l5Q9jsAh8mYam2.jpeg' }} /> */}
                    {/* </TouchableOpacity>
                    </View> */}
                    < ScrollView style={Styles.box2}>
                        {/* {console.log(typeof( +Estabelecimento.tipoEstabelecimento))} */}
                        <View style={Styles.item}>
                            <Text style={Styles.itemText}>Estabelecimento</Text>
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
                            <Text style={Styles.itemText}>Cnpj</Text>
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
                            <Text style={Styles.itemText}>Razão Social</Text>
                            <TextInput
                                style={Styles.itemInput}
                                ref={razaoSocial}
                                value={values.razaoSocial}
                                onChangeText={handleChange('razaoSocial')}
                                placeholder='razaoSocial'
                            />
                            {errors.numero && <Text style={Styles.textErro}>{errors.numero}</Text>}
                        </View>
                        <View style={[Styles.item, { marginBottom: 0 }]}>
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
                        <View style={[Styles.item]}>
                            <Text style={Styles.itemText}>Tipo de Estabelecimento</Text>
                            <View style={[Styles.picker, { margin: 0 }]}>
                                <Picker
                                    style={{ width: "60%", textAlign: 'center' }}
                                    selectedValue={tipo_Estabelecimento}
                                    // selectedValue={Estabelecimento.tipo_Estabelecimento}
                                    itemStyle={{ textAlign: 'center' }}
                                    // onValueChange={(itemValue, itemIndex) => setIdCat(itemValue)}
                                    onValueChange={(itemValue, itemIndex) => setTipo_Estabelecimento(itemValue)} //setTipo_Estabelecimento(itemValue)}
                                // mode="dropdown"
                                >
                                    {/* {console.log(Catestabelecimento.filter(cat => cat.tipoEstab_Id === 1))} */}
                                    {/* {console.log(Catestabelecimento)} */}
                                    <Picker.Item label={"Selecione"} />
                                    {Catestabelecimento.map((item, itemIndex) =>

                                        // console.log(item.tipoEstab_Id),
                                        <Picker.Item label={item.nomeTipoEstab} value={item.tipoEstab_Id} key={itemIndex} />
                                        // <Picker.Item label={item.nomeTipoEstab} value={item.tipoEstab_Id} />
                                    )}
                                </Picker>
                            </View>
                        </View>
                        <View style={[Styles.item, {  backgroundColor: 'white', marginBottom: windowHeight * 6, marginLeft: "2%" }]}>
                            <Text style={[Styles.itemText, { textAlign: "center", marginLeft: 0 }]}>Endereço</Text>
                            {enderecoLoad?<ActivityIndicator />: _enderecoE}
                            {/* <Text style={[Styles.itemText, { textAlign: "center", marginLeft: 0 }]}>{_enderecoE}</Text> */}
                            <TouchableOpacity style={Styles.btnGeolocalizacao} onPress={() => CadastroEndereco(set_endereco, setEnderecoLoad)}>
                                <Text style={Styles.btnGeolocalizacaoText} >Obter localização</Text>
                            </TouchableOpacity>
                            {/* <TextInput
                                style={Styles.itemInput}
                                ref={enderecos}
                                value={_endereco.rua}
                                onChangeText={handleChange('enderecos')}
                                placeholder='enderecos'
                                editable={false}
                            /> */}
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




