import React, { Component, useRef, useContext, useState } from 'react'
import {
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import api from '../../Services/api';
import AuthContext from '../../Contexts/Auth'

import Styles from './style'
import { Formik } from 'formik';
import * as yup from 'yup';
import MyModal from "../../Componentes/MyModal"

export default function Produto({ route }) {

    const { estabelecimento } = useContext(AuthContext);

    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');
    const [oferta, setOferta] = useState();

    const item = route.params
    console.log("Produtos =>")
    console.log(item)

    const Produto = useRef();
    const Codebar = useRef();
    const Preco = useRef();
    const Quantidede = useRef();
    const FotoPng = useRef();
    const CategoriaId = useRef();
    const EstabelecimentoId = useRef();

    const MudarOfeta = () => {

    }

    const UpdateProduto = async (values) => {
        console.log(values);
        api.put(`Produtos/${item.id}`, {
            Produto: values.Produto,
            Codebar: values.Codebar,
            Preco: values.Preco,
            Quantidede: parseInt(values.Quantidade),
            Oferta: '',
            CategoriaId: parseInt(values.CategoriaId),
            EstabelecimentoId: estabelecimento.id
        }).then(response => {
            setMsnModal("Produto alterado com sucesso !");
            setModalActive(true);
            console.log(response);
        })
        .catch(error => {
            setMsnModal("Erro ao alterar produto");
            setModalActive(true);
            console.log(error);
        })
    }

    const FormSchema = yup.object().shape({
        Produto: yup.string().required('Campo obrigatório'),
        Codebar: yup.string().required('Campo obrigatório'),
        Preco: yup.string().required('Campo obrigatório'),
        Quantidede: yup.string().required('Campo obrigatório'),
        //FotoPng: yup.string().required('Campo obrigatório'),
        //CategoriaId: yup.string().required('Campo obrigatório'),
        //EstabelecimentoId: yup.string().required('Campo obrigatório'),
    })

    return (
        <Formik
            initialValues={{
                Produto: item.produto,
                Codebar: item.codeBar,
                Preco: item.preco,
                Quantidede: item.quantidade.toString(),
                FotoPng: item.FotoPng,
                CategoriaId: item.categoriaId.toString(),
                EstabelecimentoId: ''
            }}
            onSubmit={(values, { resetForm }) => {
                //console.log(values)
                UpdateProduto(values);
            }}
            validationSchema={FormSchema}
        >
            {({ values, handleChange, handleSubmit, errors }) => (
                <ScrollView style={Styles.container}>
                    <View style={Styles.box1}>
                        <View style={Styles.row}>
                            <View style={Styles.metadeTop1}>
                                <Text style={[Styles.text, Styles.colorLabelProduto]}> {values.Produto} </Text>
                            </View>
                            <View style={Styles.metadeTop2}>
                                {item.quantidade == 0 ?
                                    <TouchableOpacity style={Styles.btnTop} >
                                        <Text style={[Styles.colorBranco, Styles.textStatus]}>EM FALTA</Text>
                                    </TouchableOpacity>
                                    : <TouchableOpacity style={[Styles.btnTop, { backgroundColor: 'green' }]} >
                                        <Text style={[Styles.colorBranco, Styles.textStatus]}>DISPONÍVEL</Text>
                                    </TouchableOpacity>}

                            </View>
                        </View>
                        <View style={[Styles.bordadoTop]}>
                            <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                                <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel1]}>QTD</Text>
                                <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel2]}>PREÇO</Text>
                            </View>
                            <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                                <TextInput
                                    ref={Quantidede}
                                    style={[Styles.tamanhoInputMetade, Styles.inputs, Styles.espacamentoInput1]}
                                    value={values.Quantidede}
                                />
                                {errors.Quantidede && <Text style={styles.textErro}>{errors.Quantidede}</Text>}
                                <TextInput
                                    ref={Preco}
                                    style={[Styles.tamanhoInputMetade, Styles.inputs, Styles.espacamentoInput2]}
                                    value={'R$ ' + values.Preco}
                                />
                                {errors.Preco && <Text style={styles.textErro}>{errors.Preco}</Text>}
                            </View>
                            <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                                <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel1]}>CATEGORIA</Text>
                            </View>
                            <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                                <TextInput
                                    ref={CategoriaId}
                                    style={[Styles.tamanhoInputFull, Styles.inputs, Styles.espacamentoInput1]}
                                    value={values.CategoriaId}
                                />
                                {errors.CategoriaId && <Text style={styles.textErro}>{errors.CategoriaId}</Text>}
                            </View>
                            <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                                <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel1]}>CODIDO DE BARRAS</Text>
                            </View>
                            <View style={[Styles.row, Styles.cadaNoSeuLado]}>
                                <TextInput
                                    ref={Codebar}
                                    style={[Styles.tamanhoInputFull, Styles.inputs, Styles.espacamentoInput1]}
                                    value={values.Codebar}
                                />
                                {errors.Codebar && <Text style={styles.textErro}>{errors.Codebar}</Text>}
                            </View>
                            <View style={[Styles.alignCenter, Styles.row, Styles.margin]}>
                                <TouchableOpacity style={Styles.BtnAlterar} onPress={handleSubmit}>
                                    <Text style={[Styles.colorBranco, Styles.text]}>ALTERAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[Styles.box2]}>
                        <View style={[Styles.alignCenter, Styles.row, Styles.margin]}>
                            <View style={Styles.metadeBotton1}>
                                <Text style={[Styles.text, Styles.colorLabelProduto]}> STATUS </Text>
                            </View>
                            <View style={Styles.metadeBotton2}>
                                <TouchableOpacity style={Styles.btnTop}>
                                    <Text style={[Styles.colorBranco, Styles.textStatus]}>EM OFERTA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                        <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} navigation />
                    </View>
                </ScrollView>
            )}
        </Formik>
    )
}


{/*  */ }