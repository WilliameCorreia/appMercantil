import React, { useState, useEffect, useContext } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native'

import AuthContext from '../../Contexts/Auth'
import { Picker } from '@react-native-community/picker'
import { SearchBar } from 'react-native-elements';
import Api from '../../Services/api'
import { ValidaEan } from '../../Services/ValidarCodebar'
import Styles from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MyModal from "../../Componentes/MyModal"


export default function Produto({ navigation, route }) {

    const { estabelecimento } = useContext(AuthContext);

    const [categorias, setCategorias] = useState([]);

    const [search, setSearch] = useState(false);
    const [codeValida, setCodvalida] = useState(false);
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
        setSearch(false);
        setProduto(prevState => ({ ...prevState, Codbar: codbar }))
       
        if(ValidaEan(codbar)) {
            setCodvalida(false)
            const produto = Api.get(`ProdutosDb/codbar/${codbar}`).then(response => {
                console.log("?????????????????????????????????????????????????????");
                console.log(response.data);
                if(response.data){
                    setProduto({
                        Produto: response.data.produto,
                        Quantidade: response.data.quantidadeEmbalagem,
                        Preco: response.data.preco,
                        CategoriaId: response.data.categoria,
                        Codbar: response.data.codbar,
                        FotoPng: response.data.fotoPng
                    });
                }else{
                    setSearch(true);
                }
                
            }).catch(erro => {
                console.log(erro);
            });
        } else {
            setCodvalida(true)
            console.log("codigo de barras não e válido");
            setProduto(prevState => ({ ...prevState, Produto: '', Quantidade: '', Preco: '', CategoriaId: '', FotoPng: '' }))
        }
    }

    const getCategorias = () => {
        Api.get("Categorias").then(response => {
            setCategorias(response.data)
        }).catch(erro => {
            console.log(erro);
        });
    }

    const adicionarProduto = () => {
        console.log("**********Adicionando Produto********")
        if(ValidaEan(produto.Codbar)){
            Api.post("Produtos", {
                Produto: produto.Produto,
                Quantidade: parseInt(produto.Quantidade),
                Preco: produto.Preco,
                CategoriaId: GetId(produto.CategoriaId),
                CodeBar: produto.Codbar,
                FotoPng: produto.FotoPng,
                EstabelecimentoId: estabelecimento.id 
            }).then(response =>{
                console.log(response.data);
                setMsnModal("Produto cadastrado com sucesso !");
                setModalActive(true);
                setProduto({Produto: '', Quantidade: '', Preco: '', CategoriaId: '', Codbar: '', FotoPng: ''})
            }).catch(erro =>{
                setMsnModal("Erro ao cadastrar o Produto !" + erro);
                setModalActive(true);
                console.log(erro);
            })
        }else{
            setMsnModal("Favor digitar um codigo de barras válido");
            setModalActive(true);
        }
        
    }

    const VerificarProduto = async (codbar) => {
        console.log("****************************");
        console.log(codbar);
        Api.get(`Produtos/codbar/${codbar}`).then(response =>{
            if(response.data != 0){
                setMsnModal("Produto já Cadastrado ");
                setModalActive(true);
            }else{
                adicionarProduto();
            }
        }).catch(erro =>{
            setMsnModal("Erro ao consultar produto " + erro);
            setModalActive(true);
        })
    }

    const FormValidacao = () => {
        if (produto.Produto && produto.Quantidade && produto.Preco && produto.CategoriaId && produto.Codbar) { 
            VerificarProduto(produto.Codbar);
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
    console.log("------------------------------------------------")
    console.log(estabelecimento)

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
                            value={produto.Codbar}
                        //showLoading={true}
                        />
                      {search ? <Text>Produto não encontrado !</Text> : null}
                      {codeValida ? <Text>Codigo de Barras Inválido !</Text> : null}
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



