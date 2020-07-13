import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'

import { Picker } from '@react-native-community/picker'
import { SearchBar } from 'react-native-elements';
import Api from '../../Services/api'
import { ValidaEan } from '../../Services/ValidarCodebar'
import Styles from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyModal from "../../Componentes/MyModal"


export default function Produto({ navigation, route }) {

    const [codbar, setCodbar] = useState();
    const [categorias, setCategorias] = useState([]);

    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    const [produto, setProduto] = useState({
        Produto: '',
        Quantidade: '',
        Preco: '',
        CategoriaId: '',
        Codbar: '',
        FotoPng: ''
    });

    useEffect(() => {
        getCategorias();
        if (route.params) {
            let { produto } = route.params
            setProduto({
                Produto: produto.produto,
                Quantidade: produto.quantidadeEmbalagem,
                Preco: produto.precoMedio.toString(),
                CategoriaId: produto.categoria,
                Codbar: produto.codbar,
                FotoPng: response.data.fotoPng
            })
            console.log(route.params.produto)
        }
    }, [route.params])

    const getProduto = (codbar) => {
        setCodbar(codbar)
        console.log("codbar")
        if (ValidaEan(codbar)) {
            console.log(codbar)
            const produto = Api.get(`ProdutosDb/codbar/${codbar}`).then(response => {
                console.log(response.data)
                console.log("entrou getProduto")

                setProduto({
                    Produto: response.data.produto,
                    Quantidade: response.data.quantidadeEmbalagem,
                    Preco: response.data.preco,
                    CategoriaId: response.data.categoria,
                    Codbar: response.data.codbar,
                    FotoPng: response.data.fotoPng
                });
            }).catch(erro => {
                console.log(erro);
            });
        } else {

        }
    }

    const getCategorias = () => {
        Api.get("Categorias").then(response => {
            setCategorias(response.data)
            console.log(response.data);
        }).catch(erro => {
            console.log(erro);
        });
    }

    const FormValidacao = () => {
        console.log(produto);
        if (produto.Produto && produto.Quantidade && produto.Preco && produto.CategoriaId && produto.Codbar) {
            console.log(produto);
            Api.post("Produtos", {
                Produto: produto.Produto,
                Quantidade: parseInt(produto.Quantidade),
                Preco: produto.Preco,
                CategoriaId: GetId(produto.CategoriaId),
                CodeBar: produto.Codbar,
                FotoPng: produto.FotoPng
            }).then(response =>{
                console.log(response.data);
                setMsnModal("Produto cadastrado com sucesso !");
                setModalActive(true);
                setProduto({
                    Produto: '',
                    Quantidade: '',
                    Preco: '',
                    CategoriaId: '',
                    Codbar: '',
                    FotoPng: ''
                })
            }).catch(erro =>{
                setMsnModal("Erro ao cadastrar o Produto !" + erro);
                setModalActive(true);
                console.log(erro);
            })
        } else {
            setMsnModal("Para cadastrar o produto preencha todos os campos!");
            setModalActive(true);
        }
    }

    function GetId(teste){
        let cat = ''
        for(let item of categorias) {
            if( teste == item.nomeBusca || teste == item.id){
               cat =  item.id
            }
        }
        return cat
    }

    console.log("newProduto renderizado!")
    console.log(produto)

    return (
        <KeyboardAwareScrollView style={Styles.container}>
            <View style={Styles.box1}>
                <Image source={{ uri: 'https://appmercantilimagens.s3.us-east-2.amazonaws.com/ImagensPng/png/' + produto.FotoPng }} style={Styles.prodImg} />
                <View style={Styles.Codbar}>
                    <TouchableOpacity style={Styles.codbarItem} onPress={() => navigation.navigate('Mycamera', getProduto)}>
                        <Image source={require('../../Assets/codbar.png')} style={Styles.codbarImg} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.box2}>
                <View style={[Styles.containerForm]}>
                    <View style={Styles.containerSearch}>
                        <SearchBar
                            style={Styles.search}
                            placeholder="Digite o codigo de barras"
                            platform={'android'}
                            containerStyle={Styles.search}
                            onChangeText={text => getProduto(text)}
                            keyboardType={'numeric'}
                            value={codbar}
                        //showLoading={true}
                        />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>PRODUTO</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput
                            style={[Styles.tamanhoInputFull, Styles.inputs,]}
                            value={produto.Produto}
                           onChangeText={text => setProduto(prevState => ({ ...prevState, Produto: text }))}
                            placeholder={"PRODUTO"}
                        />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>QTD</Text>
                        <Text style={[Styles.text, Styles.colorPreto, Styles.espacamentolabel2]}>PREÇO</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput
                            style={[Styles.tamanhoInputMetade, Styles.inputs]}
                            value={produto.Quantidade}
                            placeholder={"QTD"}
                            keyboardType={'numeric'}
                            onChangeText={text => setProduto(prevState => ({ ...prevState, Quantidade: text}))}
                        />
                        <TextInput
                            style={[Styles.tamanhoInputMetade, Styles.inputs]}
                            value={produto.Preco}
                            placeholder={"PREÇO"}
                            keyboardType={'numeric'}
                            onChangeText={text => setProduto(prevState => ({ ...prevState, Preco: text }))}
                        />
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>CATEGORIA</Text>
                    </View>
                    <View style={[Styles.row, Styles.picker]}>
                        <Picker
                            style={{ width: "50%", textAlign: 'center' }}
                            selectedValue={GetId(produto.CategoriaId)}
                            itemStyle={{ textAlign: 'center' }}
                            onValueChange={(itemValue, itemIndex) => setProduto(prevState => ({ ...prevState, CategoriaId: itemValue }))}
                            mode="dropdown"
                        >
                            <Picker.Item label={"Selecione"} />
                            {categorias.map(item =>
                                <Picker.Item label={item.nome} value={item.id} />
                            )}
                        </Picker>
                    </View>
                    <View style={Styles.row}>
                        <Text style={Styles.text}>CODIGO DE BARRAS</Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInput
                            style={[Styles.tamanhoInputFull, Styles.inputs]}
                            value={produto.Codbar}
                            placeholder={"CODIGO DE BARRAS"}
                            keyboardType={'numeric'}
                            onChangeText={text => setProduto(prevState => ({ ...prevState, Codbar: text }))}
                        />
                    </View>
                    <View style={Styles.alignCenter}>
                        <TouchableOpacity style={Styles.BtnAlterar} onPress={FormValidacao}>
                            <Text style={[Styles.colorBranco, Styles.text]}>SALVAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} navigation />
            </View>
        </KeyboardAwareScrollView>
    )
}



