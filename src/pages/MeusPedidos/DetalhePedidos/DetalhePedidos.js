import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import { Picker } from '@react-native-community/picker'


import Styles from './style.js'
import statusPedidos from '../../../Services/statusPedidos.js'

export default function DetalhePedidos({ route }) {
    const dados = route.params

    // console.log(dados.clientes.enderecos[0])
    // console.log(dados[1])
    let corStatus = ""

    const verificaCor = (status) => {
        switch (status) {
            case "C":
                corStatus = { backgroundColor: "green" }
                break;
            case "A":
                corStatus = { backgroundColor: "orange" }
                break;
            case "cancelado":
                return { backgroundColor: "red" }
                break;
            case "em separação":
                return { backgroundColor: "orange" }
                break;
            case "a caminho":
                return { backgroundColor: "blue" }
                break;
            case "entregue":
                return { backgroundColor: "green" }
                break;

            default:
                // return {}
                break;
        }
    }

    const registrarEstabelecimento = (values) => {
        api.put(`v1/Estabelecimentos/${dados.cod_Pedido}/${dados.cod_ClientId}/${dados.estabelecimentoId}`, {
            // token: Estabelecimento.token,
            // email: Estabelecimento.email,
            // _Estabelecimento: values.estabelecimentoR,
            // razaoSocial: values.razaoSocial,
            // cnpj: values.cnpj,
            // ativo: true,
            // telefones: values.telefone,
            // enderecos: values.enderecos,
            // fotoName: Estabelecimento.fotoName,
            // tipo_Estabelecimento: Catestabelecimento.find(cat => cat.tipoEstab_Id === tipo_Estabelecimento)
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(dados => {
            setMsnModal("Dados atualizados!");
            setModalActive(true);
            setEstabelecimento(dados.data.result);
            console.log(dados.data.result);
        }).catch(errors => {
            console.log(errors);
        });
    }

    function somar() {
        let total = 0;
        dados[0].produtos.map(item => {
            total += +item.preco.replace(',', '.') * (+item.quantidade);
        })
        return total
    }


    return (
        <View style={Styles.container}>
            {verificaCor(dados[0].status_Pedido)}
            <View style={Styles.box1}>
                <View style={Styles.item1}>
                    <View style={Styles.item1_1}>
                        <Text style={Styles.textCliente}>{dados[0].clientes.nome_Client.length > 16 ? `${dados[0].clientes.nome_Client.substring(0, 16)}...` : dados[0].clientes.nome_Client}</Text>
                        <Text style={Styles.textPedido}>{`#${dados[0].cod_Pedido}`}</Text>
                    </View>
                    <View style={Styles.item1_2}>
                        <Text style={[Styles.StatusPedidoP, corStatus]}>{dados[1]}</Text>
                    </View>
                </View>
                <View style={Styles.item2}>
                    <View style={Styles.item2_1}>
                        <Image source={require("../../../Assets/11.png")} style={Styles.ImgLoction}></Image>
                    </View>
                    <View style={Styles.item2_2}>
                        <Text style={Styles.TextEndereco}>
                            {
                            dados[0].clientes.enderecos[0].rua + 
                            ", " + 
                            dados[0].clientes.enderecos[0].numero + 
                            " - " + 
                            dados[0].clientes.enderecos[0].bairro +
                            " - " + 
                            dados[0].clientes.enderecos[0].cidade + 
                            " - " + 
                            dados[0].clientes.enderecos[0].estado +
                            " - cep - " + 
                            dados[0].clientes.enderecos[0].cep
                            }
                            </Text>
                        <Text style={Styles.TextTelefone}>{ dados[0].telefone? "TELEFONE - " + dados[0].telefone : "TELEFONE NÃO CADASTRADO"}</Text>
                    </View>
                </View>
                <View style={Styles.item3}>
                    <View style={Styles.item3_1}>
                        <Image source={require("../../../Assets/12.png")} style={Styles.item3_1Img}></Image>
                        <Text style={Styles.item3_1Text}>Qnt.</Text>
                    </View>
                    <View style={Styles.item3_2}>
                        <Text style={Styles.item3_2Text}>Produto</Text>
                    </View>
                    <View style={Styles.item3_3}>
                        <Text style={Styles.item3_3Text}>Preço</Text>
                    </View>
                </View>
                <View style={Styles.item4}>
                    {dados[0].produtos.map((item, index) =>
                        <View style={Styles.item4_1} key={index}>
                            <View style={Styles.item4_1_A}>
                                <Text style={Styles.item4_1_AText}>{item.quantidade}</Text>
                            </View>
                            <View style={Styles.item4_1_B}>
                                <Text style={Styles.item4_1_BText}>{item._Produto}</Text>
                            </View>
                            <View style={Styles.item4_1_C}>
                                <Text style={Styles.item4_1_CText}>{item.preco}</Text>
                            </View>
                        </View>
                    )}
                </View>
                <View style={Styles.item5}>
                    <View style={Styles.item5_1}>
                        <Text style={Styles.item5_1Text}>TOTAL</Text>
                    </View>
                    <View style={Styles.item5_2}>
                        <Text style={Styles.item5_2Text}>R$ {somar()}</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.box2}>
                <View style={Styles.item6}>
                    <View style={Styles.item6_1}>
                        <Text style={Styles.item6_1Text}>STATUS</Text>
                    </View>
                    <View style={Styles.item6_2}>                            
                            <View style={[Styles.picker, { margin: 0 }]}>
                                <Picker
                                    style={{ width: "100%", textAlign: 'center' }}
                                    // selectedValue={tipo_Estabelecimento}
                                    // selectedValue={Estabelecimento.tipo_Estabelecimento}
                                    itemStyle={{ textAlign: 'center' }}
                                    // onValueChange={(itemValue, itemIndex) => setIdCat(itemValue)}
                                    // onValueChange={(itemValue, itemIndex) => setTipo_Estabelecimento(itemValue)}
                                mode="dropdown"
                                >
                                    {/* {console.log(Catestabelecimento.filter(cat => cat.tipoEstab_Id === 1))} */}
                                    {/* {console.log(Catestabelecimento)} */}
                                    <Picker.Item label={"Selecione"} />
                                    {/* {console.log(statusPedidos)} */}
                                    {statusPedidos.map((item, itemIndex) =>
                                    
                                        // console.log(item.tipoEstab_Id),
                                        <Picker.Item label={item.label} value={item.value} key={itemIndex} />
                                        // <Picker.Item label={item.nomeTipoEstab} value={item.tipoEstab_Id} />
                                    )}
                                </Picker>
                            </View>
                        </View>
                    {/* <View style={Styles.item6_2}>
                        <Text style={Styles.item6_2Text}>{dados.status}</Text>
                    </View> */}
                </View>
            </View>
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#F5FCFF"
//       },    
// })
