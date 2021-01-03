import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image, Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import storage from '@react-native-firebase/storage';

import Styles from './style'
import AuthContext from '../../../Contexts/Auth';
import { ProdutosContext } from '../../../Contexts/ProdutoContext';
import api from '../../../Services/api';
import EsperaRequisicao from '../../../Componentes/EsperaRequisicao';
import MyModal from '../../../Componentes/MyModal';

export default function DetalheOfertas({ route, navigation }) {
    const { categorias } = useContext(ProdutosContext);
    const { token } = useContext(AuthContext);
    const dados = route.params
    const [load, setLoad] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');
    const quantidade = dados[0].quantidade == 0 ? "EM FALTA" : dados[0].quantidade

    const EncerraOferta = () => {
        // console.log(dados[1]);
        // dados[0].getOfertas();
        // alert.alert("hjsgjsg")
        setLoad(true);

        api.put(`v1/Produtos/${dados[0].id}`, {
            _Produto: dados[0]._Produto,
            codeBar: dados[0].codeBar,
            marca: dados[0].marca,
            unidade: dados[0].unidade,
            fotoPng: dados[0].fotoPng,
            quantidade: dados[0].quantidade,
            preco: dados[0].preco,
            oferta: false,
            categoriaId: dados[0].categoriaId,
            estabelecimentoId: dados[0].estabelecimentoId,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            setMsnModal("PRODUTO REMOVIDO DA LISTA DE OFERTAS COM SUCESSO!");
            setModalActive(true);
            const tt = dados[1];
            tt();
            setTimeout(() => {                
                navigation.navigate('Ofertas');
            }, 3000);
            // navigation.navigate('DashBoard');
        }).catch(erro => {
            console.log(erro);
        });

    }

    return (
        !load ?
            <KeyboardAwareScrollView style={Styles.container}>
                <View style={Styles.box1}>
                    <View style={Styles.item1}>
                        <View style={Styles.item1_1}>
                            <Text style={Styles.textCliente}>{dados[0]._Produto.length > 16 ? `${dados[0]._Produto.substring(0, 16)}...` : dados[0]._Produto}</Text>
                            <Text style={Styles.textPedido}>{dados[0].id}</Text>
                        </View>
                        <View style={Styles.item1_2}>
                            <Text style={Styles.StatusPedidoP}>{quantidade}</Text>
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
                            <TextInput style={Styles.item3_1Input} editable={false} value={dados[0].quantidade.toString()} />
                        </View>
                        <View style={Styles.item3_2}>
                            <TextInput style={Styles.item3_2Input} editable={false} value={dados[0].preco} />
                        </View>
                    </View>
                    <View style={Styles.item4}>
                        <View style={Styles.item4_1}>
                            <Text style={Styles.item4_1Text}>CATEGORIA</Text>
                        </View>
                    </View>
                    <View style={Styles.item5}>
                        <View style={Styles.item5_1}>
                            <TextInput style={Styles.item5_1Input} editable={false} value={categorias.find(cat => cat.id === dados[0].categoriaId).nome} />
                        </View>
                        <View style={Styles.item5_2}>
                            <TextInput style={Styles.item5_2Input} />
                        </View>
                    </View>
                    <View style={Styles.item6}>
                        <View style={Styles.item6_1}>
                            <Text style={Styles.item6_1Text}>DETALHES</Text>
                        </View>
                    </View>
                    <View style={Styles.item7}>
                        <View style={Styles.item7_1}>
                            <TextInput style={Styles.item7_1Input} editable={false} value={dados[0]._Produto.length > 16 ? `${dados[0]._Produto.substring(16, 64)}...` : dados[0]._Produto} />
                        </View>
                    </View>
                    {/* desativei pois nao vejo necessidade de alterar o produto em minhas ofertas */}
                    {/* acho mais convieniente redirecionar o usuário até meus produtos */}
                    {/* <View style={Styles.item8}>
                    <TouchableOpacity style={Styles.item8_1}>                        
                        <Text style={Styles.item8_1Text} >ALTERAR</Text>
                    </TouchableOpacity>
                </View> */}
                </View>
                <View style={Styles.box2}>
                    <View style={Styles.item9}>
                        <TouchableOpacity style={Styles.item9_1} onPress={EncerraOferta}>
                            <Text style={Styles.item9_1Text} >ENCERRAR OFERTA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            :
            EsperaRequisicao(
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} navigation />
            )
    )
}
