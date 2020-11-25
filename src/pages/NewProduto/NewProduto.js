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

import UploadFile from '../../Services/UploadFile'

import FotoProduto from '../../Componentes/FotoProduto'


export default function NewProduto({ navigation, route }) {

    const { Estabelecimento, token } = useContext(AuthContext);

    const [categorias, setCategorias] = useState([]);

    const [searchLoad, setSearchLoad] = useState(false);
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
    const [ImgProduto, setImgProduto] = useState(null);
    let tipo = null;
    if (ImgProduto != null) {
        tipo = ImgProduto.type.replace('image/', '')
    }else{
        tipo = 'png'
    }

    useEffect(() => {
        getCategorias();
        try {
            if (route.params) {
                let { produto } = route.params
                console.log("***************************************")
                console.log(produto)
                console.log("**************************************")
                setProduto({
                    Produto: produto.produto,
                    Quantidade: produto.quantidadeEmbalagem,
                    CategoriaId: produto.categoria,
                    Codbar: produto.codbar,
                    FotoPng: produto.fotoPng
                })
                console.log(route.params.produto)
            }
        } catch (error) {
            console.log(error)
        }

    }, [route.params])

    const getProduto = (codbar) => {
        setSearch(false);
        setProduto(prevState => ({ ...prevState, Codbar: codbar }))
        setSearchLoad(true)
        if (ValidaEan(codbar)) {
            setCodvalida(false)
            const produto = Api.get(`v1/ProdutosDb/Filtercodbar/${codbar}`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                const { result } = response.data;
                if (result) {
                    setProduto({
                        Produto: result.produto,
                        Quantidade: result.quantidade,
                        Preco: result.preco,
                        CategoriaId: result.categoria,
                        Codbar: result.codbar,
                        FotoPng: result.foto_Png
                    });
                    setSearchLoad(false)
                } else {
                    setSearch(true);
                    setSearchLoad(false)
                }

            }).catch(erro => {
                console.log(erro);
            });
        } else {
            setSearchLoad(false);
            setCodvalida(true);
            console.log("codigo de barras não e válido");
            setProduto(prevState => ({ ...prevState, Produto: '', Quantidade: '', Preco: '', CategoriaId: '', FotoPng: '' }))
        }
    }

    const getCategorias = () => {
        Api.get("v1/Categorias", {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } = response.data;
            setCategorias(result)
        }).catch(erro => {
            console.log(erro);
        });
    }

    const adicionarProduto = () => {
        console.log("**********Adicionando Produto********")
        let foto = null;
        if(!produto.fotoPng){
            foto = produto.Codbar + '.' + tipo
        }else{
            //caso o produto já possua foto o valor de ImgProduto é setado como null
            //para que nao seja enviado um novo uploa e assim substitua o arquivo na amazon
            ImgProduto = null;
            foto = produto.fotoPng
        }
        if (ValidaEan(produto.Codbar)) {
            Api.post("v1/Produtos", {
                Produto: produto.Produto,
                Quantidade: parseInt(produto.Quantidade),
                Preco: produto.Preco,
                CategoriaId: GetId(produto.CategoriaId),
                CodeBar: produto.Codbar,
                FotoPng: foto,
                EstabelecimentoId: Estabelecimento.id
            }, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                const { result } = response.data;
                //só envia a imagem do produto para amazon caso o usuário
                //já tenha escolhido a foto
                if (ImgProduto) {
                    UploadFile("appmercantilimagens", "/ImagensPng/png", ImgProduto, result.codeBar, "produtos")
                }

                // console.log(response.data.codeBar)

                //UploadFile("appmercantilimagens", "/ImagensPng/png", ImgProduto, response.data.Codbar, "produtos")

                //UploadFile("appmercantilestabelecimento/images", file, response.data.Codbar)
                setMsnModal("Produto cadastrado com sucesso !");
                setModalActive(true);
                setProduto({ Produto: '', Quantidade: '', Preco: '', CategoriaId: '', Codbar: '', FotoPng: '' })
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

    const VerificarProduto = async (codbar) => {
        Api.get(`v1/Produtos/codbar/${codbar}/${Estabelecimento.id}`, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } = response.data;
            if (result != 0) {
                setMsnModal("Produto já Cadastrado ");
                setModalActive(true);
            } else {
                adicionarProduto();
            }
        }).catch(erro => {
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

    function GetId(teste) {
        let cat = ''
        for (let item of categorias) {
            if (teste == item.nomeBusca || teste == item.id) {
                cat = item.id
            }
        }
        return cat
    }


    return (
        <KeyboardAwareScrollView style={Styles.container}>
            <View style={Styles.box1}>
                <FotoProduto produto={produto} ImgProduto={setImgProduto} />
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
                            placeholder="Digite o codigo de barras"
                            platform={'android'}
                            containerStyle={Styles.search}
                            onChangeText={text => getProduto(text)}
                            keyboardType={'numeric'}
                            value={produto.Codbar}
                            showLoading={searchLoad}
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
                            onChangeText={text => setProduto(prevState => ({ ...prevState, Quantidade: text }))}
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
                            editable={false}
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



