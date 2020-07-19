import React, { useState, useEffect, useContext, useRef } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'

import AuthContext from '../../Contexts/Auth'
import { Picker } from '@react-native-community/picker'
import { SearchBar } from 'react-native-elements';
import Api from '../../Services/api'
import { ValidaEan } from '../../Services/ValidarCodebar'
import Styles from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyModal from "../../Componentes/MyModal"
import { Formik } from 'formik';
import * as yup from 'yup';


export default function Produto({ navigation, route }) {

    console.log(route);

    const produto = route.params;

    const produtor = useRef();
    const quantidade = useRef();
    const preco = useRef();
    const categoria = useRef();
    const codBar = useRef();

    const FormSchema = yup.object().shape({
        produto: yup.string().required("Campo obrigatório"),
        quantidade: yup.string().required("Campo obrigatório"),
        preco: yup.string().required("Campo obrigatório"),
        categoria: yup.string().required("Campo obrigatório"),
        codBar: yup.string().required("Campo obrigatório"),
    })

    return (
        <Formik
            initialValues={{
                produto: produto.produto,
                quantidade: produto.quantidade.toString(),
                preco: produto.preco,
                categoria: produto.categoriaId.toString(),
                codBar: produto.codeBar.toString()
            }}
            onSubmit={values =>{
                console.log(values)
            }}
           validationSchema={FormSchema}
            >
            {({ values, handleChange, handleSubmit, errors }) =>
                <KeyboardAwareScrollView style={Styles.container}>
                    <ScrollView style={Styles.box1}>
                        <View style={Styles.item1}>
                            <View style={Styles.item1_1}>
                                <Text style={Styles.textCliente}>{values.produto}</Text>
                            </View>
                            <View style={Styles.item1_2}>
                                <Text style={Styles.StatusPedidoP}>{values.quantidade}</Text>
                            </View>
                        </View>
                        <View style={Styles.item2}>
                            <View style={Styles.item2_1}>
                                <Text style={Styles.item2_1Text}>QTD</Text>
                            </View>
                            <View style={Styles.item2_2}>
                                <Text style={Styles.item2_2Text}>PREÇO</Text>
                            </View>
                        </View>
                        <View style={Styles.item3}>
                            <View style={Styles.item3_1}>
                                <TextInput
                                    style={Styles.item3_1Input}
                                    value={values.quantidade}
                                    ref={quantidade}
                                    onChangeText={handleChange('quantidade')}
                                />
                                {console.log(errors.quantidade)}
                                {errors.quantidade && <Text style={Styles.textErro}>{errors.quantidade}</Text>}
                            </View>
                            <View style={Styles.item3_2}>
                                <TextInput
                                    style={Styles.item3_2Input}
                                    value={values.preco}
                                    ref={preco}
                                    onChangeText={handleChange('preco')}
                                />
                                {errors.preco && <Text style={Styles.textErro}>{errors.preco}</Text>}
                            </View>
                        </View>
                        <View style={Styles.item4}>
                            <View style={Styles.item4_1}>
                                <Text style={Styles.item4_1Text}>CATEGORIA</Text>
                            </View>
                        </View>
                        <View style={Styles.item5}>
                            <View style={Styles.item5_1}>
                                <TextInput
                                    style={Styles.item5_1Input}
                                    value={values.categoria}
                                    ref={categoria}
                                    onChangeText={handleChange("categoria")}
                                />
                                {errors.categoria && <Text style={Styles.textErro}>{errors.categoria}</Text>}
                            </View>
                        </View>
                        <View style={Styles.item6}>
                            <View style={Styles.item6_1}>
                                <Text style={Styles.item6_1Text}>CODIGO DE BARRAS</Text>
                            </View>
                        </View>
                        <View style={Styles.item7}>
                            <View style={Styles.item7_1}>
                                <TextInput
                                    style={Styles.item7_1Input}
                                    value={values.codBar}
                                    ref={codBar}
                                    onChangeText={handleChange("codBar")}
                                />
                                {errors.codBar && <Text style={Styles.textErro}>{errors.codBar}</Text>}
                            </View>
                        </View>
                        <View style={Styles.item8}>
                            <TouchableOpacity style={Styles.item8_1} onPress={handleSubmit}>
                                <Text style={Styles.item8_1Text} >ALTERAR</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>                    
                </KeyboardAwareScrollView>
            }
        </Formik>
    )
}



