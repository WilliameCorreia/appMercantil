import React, { useState, useContext, useRef } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native'

import AuthContext from '../../Contexts/Auth'
import Api from '../../Services/api'
import { ValidaEan } from '../../Services/ValidarCodebar'
import Styles from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyModal from "../../Componentes/MyModal"
import { Formik } from 'formik';
import * as yup from 'yup';
import { ProdutosContext } from '../../Contexts/ProdutoContext'
import EsperaRequisicao from '../../Componentes/EsperaRequisicao';
import FotoProduto from '../../Componentes/FotoProduto'
import UploadFile from '../../Services/UploadFile'
import { Picker } from '@react-native-community/picker'


export default function Produto({ navigation, route, }) {

    const { LoadCategorias, categorias } = useContext(ProdutosContext);

    const { Estabelecimento, token } = useContext(AuthContext);

    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');
    const [load, setLoad] = useState(false);

    const { categoria, estabelecimento } = route.params[0];
    const [EdicaoFoto, setEdicaoFoto] = useState(null);
    
    
    
    
    const produto = route.params[0];
    const [CatInterna, setCatInterna] = useState(produto.categoriaId);

    const produtor = useRef();
    const quantidade = useRef();
    const preco = useRef();
    const categoria_ = useRef();
    const categoriaId = useRef();
    const codBar = useRef();

    const ProdutoUpdate = (values) => {
        if (ValidaEan(values.codBar)) {
            Api.put(`v1/Produtos/${produto.id}`, {
                _Produto: values.produto,
                quantidade: parseInt(values.quantidade),
                preco: values.preco,
                categoriaId: CatInterna,
                codeBar: values.codBar,
                fotoPng: values.fotoPng,
                estabelecimentoId: Estabelecimento.id,
                oferta: produto.oferta
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                const { result } = response.data;
                if (result) {
                    setMsnModal("Produto alterado com sucesso !");
                    setModalActive(true);
                    LoadCategorias();
                    if (EdicaoFoto) {
                        UploadFile(EdicaoFoto[0], EdicaoFoto[1], EdicaoFoto[2], EdicaoFoto[3], EdicaoFoto[4])
                    }
                    //  else {
                    //     Alert.alert("Por algum motivo não foi possivel atualizar a foto do produto!")
                    // }
                } else {
                    setMsnModal("Erro ao alterar Produto !");
                    setModalActive(true);
                }
            }).catch(erro => {
                setMsnModal("Erro ao cadastrar o Produto !" + erro);
                setModalActive(true);
                console.log(erro);
            })
        } else {
            setMsnModal("Favor digitar um codigo de barras válido");
            setModalActive(true);
        }

    }

    const renderFooter = () => {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <Text style={Styles.textLoad}>Estamos Processando sua solicitação...</Text>
                <ActivityIndicator size="large" color="red" />
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} navigation />
            </View>
        )
    }

    const ColocaEmOferta = (whatDo) => {
        setLoad(true);
        if (whatDo) {

            Api.put(`v1/Produtos/${produto.id}`, {
                _Produto: produto._Produto,
                codeBar: produto.codeBar,
                marca: produto.marca,
                unidade: produto.unidade,
                fotoPng: produto.fotoPng,
                quantidade: produto.quantidade,
                preco: produto.preco,
                oferta: true,
                categoriaId: produto.categoriaId,
                estabelecimentoId: produto.estabelecimentoId,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                setMsnModal("PRODUTO INSERIDO Á LISTA DE OFERTAS COM SUCESSO!");
                setModalActive(true);
                route.params[1]();
                setTimeout(() => {
                    navigation.navigate('MeusProdutos');
                }, 3000);
            }).catch(erro => {
                console.log(erro);
            });
        } else {
            Api.put(`v1/Produtos/${produto.id}`, {
                _Produto: produto._Produto,
                codeBar: produto.codeBar,
                marca: produto.marca,
                unidade: produto.unidade,
                fotoPng: produto.fotoPng,
                quantidade: produto.quantidade,
                preco: produto.preco,
                oferta: false,
                categoriaId: produto.categoriaId,
                estabelecimentoId: produto.estabelecimentoId,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                setMsnModal("PRODUTO REMOVIDO DA LISTA DE OFERTAS COM SUCESSO!");
                setModalActive(true);
                route.params[1]();
                navigation.navigate('MeusProdutos');
            }).catch(erro => {
                console.log(erro);
            });

        }

    }

    const FormSchema = yup.object().shape({
        produto: yup.string().required("Campo obrigatório"),
        quantidade: yup.string().required("Campo obrigatório"),
        preco: yup.string().required("Campo obrigatório"),
        categoria: yup.string().required("Campo obrigatório"),
        codBar: yup.string().required("Campo obrigatório"),
    })

    return (
        <>
            <Formik
                initialValues={{
                    produto: produto._Produto,
                    quantidade: produto.quantidade.toString(),
                    preco: produto.preco,
                    categoria: categoria.nome,
                    categoriaId: produto.categoriaId,
                    codBar: produto.codeBar,
                    fotoPng: produto.fotoPng
                }}
                onSubmit={values => {
                    ProdutoUpdate(values)
                }}
                validationSchema={FormSchema}
            >
                {({ values, handleChange, handleSubmit, errors }) =>
                    !load ?
                        <View style={Styles.container}>
                            <KeyboardAwareScrollView style={Styles.box1}>
                                <View style={Styles.item1}>
                                    <View style={Styles.item1_1}>
                                        <Text style={Styles.textCliente}>{values.produto.length > 40 ? `${values.produto.substring(0, 40)}...` : values.produto}</Text>
                                    </View>
                                    <View style={Styles.item1_2}>
                                        <FotoProduto produto={values} localizacao={"produto"} setEdicaoFoto={setEdicaoFoto} />
                                        {/* <Image source={produto.fotoPng ? { uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/ImagensPng/png/${produto.fotoPng}` } : require("../../Assets/srcImage.png")} style={Styles.prodImg} /> */}
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
                                <View style={[Styles.item5]}>
                                    {console.log(produto)}
                                    <View style={Styles.picker}>
                                        <Picker
                                            style={{ width: "70%", textAlign: 'center' }}
                                            selectedValue={categorias.find(cat => cat.id === CatInterna).id}
                                            itemStyle={{ textAlign: 'center' }}
                                            onValueChange={(itemValue, itemIndex) => itemValue?setCatInterna(itemValue):""}
                                            mode="dropdown"
                                        >
                                            <Picker.Item label={"Selecione"} />
                                            {categorias.map(item =>
                                                <Picker.Item label={item.nome} value={item.id} />
                                            )}
                                        </Picker>
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
                                            editable={false}
                                        />
                                        {errors.codBar && <Text style={Styles.textErro}>{errors.codBar}</Text>}
                                    </View>
                                </View>
                                <View style={Styles.item8}>
                                    <TouchableOpacity style={Styles.item8_1} onPress={handleSubmit}>
                                        <Text style={Styles.item8_1Text} >ALTERAR</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} navigation />
                                </View>
                            </KeyboardAwareScrollView>
                            <View style={[Styles.box2]}>
                                <TouchableOpacity style={Styles.item9} onPress={produto.oferta ? () => ColocaEmOferta(false) : () => ColocaEmOferta(true)}>
                                    <Text style={Styles.item9_1Text} >{produto.oferta ? "Remover da lista de ofertas" : "Adicionar à lista de ofertas"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        // renderFooter()
                        EsperaRequisicao(
                            () => setModalActive,
                            modalActive,
                            msnModal
                        )
                }
            </Formik>
        </>
    )
}



