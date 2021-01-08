import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import { Picker } from '@react-native-community/picker'


import Styles from './style.js'

export default function DetalhePedidos({ route }) {
    const dados = route.params

    console.log(dados.clientes.enderecos[0])

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
        dados.produtos.map(item => {
            total += +item.preco.replace(',', '.') * (+item.quantidade);
        })
        return total
    }


    return (
        <View style={Styles.container}>
            <View style={Styles.box1}>
                <View style={Styles.item1}>
                    <View style={Styles.item1_1}>
                        <Text style={Styles.textCliente}>{dados.clientes.nome_Client.length > 16 ? `${dados.clientes.nome_Client.substring(0, 16)}...` : dados.clientes.nome_Client}</Text>
                        <Text style={Styles.textPedido}>{`#${dados.cod_Pedido}`}</Text>
                    </View>
                    <View style={Styles.item1_2}>
                        <Text style={Styles.StatusPedidoP}>{"cancelado"}</Text>
                    </View>
                </View>
                <View style={Styles.item2}>
                    <View style={Styles.item2_1}>
                        <Image source={require("../../../Assets/11.png")} style={Styles.ImgLoction}></Image>
                    </View>
                    <View style={Styles.item2_2}>
                        <Text style={Styles.TextEndereco}>
                            {
                            dados.clientes.enderecos[0].rua + 
                            ", " + 
                            dados.clientes.enderecos[0].numero + 
                            " - " + 
                            dados.clientes.enderecos[0].bairro +
                            " - " + 
                            dados.clientes.enderecos[0].cidade + 
                            " - " + 
                            dados.clientes.enderecos[0].estado +
                            " - cep - " + 
                            dados.clientes.enderecos[0].cep
                            }
                            </Text>
                        <Text style={Styles.TextTelefone}>{ dados.telefone? "TELEFONE - " + dados.telefone : "TELEFONE NÃO CADASTRADO"}</Text>
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
                    {dados.produtos.map((item, index) =>
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
                                    {/* {Catestabelecimento.map((item, itemIndex) =>

                                        // console.log(item.tipoEstab_Id),
                                        <Picker.Item label={item.nomeTipoEstab} value={item.tipoEstab_Id} key={itemIndex} />
                                        // <Picker.Item label={item.nomeTipoEstab} value={item.tipoEstab_Id} />
                                    )} */}
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
