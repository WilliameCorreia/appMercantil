import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import { Picker } from '@react-native-community/picker'


import Styles from './style.js'
import statusPedidos from '../../../Services/statusPedidos.js'
import verificaCor from '../../../Services/verificaCor.js'
import api from '../../../Services/api.js'
import AuthContext from '../../../Contexts/Auth.js'


export default function DetalhePedidos({ route, navigation }) {
    const { token } = useContext(AuthContext);
    const dados = route.params
    const [StatusPedidoAtual, setStatusPedidoAtual] = useState(dados[0].status_Pedido)

    let corStatus = verificaCor(StatusPedidoAtual)

    const EditaStatus = (itemValue) => {
        // console.log(itemValue);
        // console.log(`subiu na api ${itemValue}`);
        if (itemValue) {
            api.put(`v1/Pedidos/UpdateStatusPedidos/${dados[0].cod_Pedido},${dados[0].cod_ClientId},${dados[0].estabelecimentoId}`,
                {
                    // cod_Pedido: dados[0].cod_Pedido,
                    // cod_ClientId: dados[0].cod_ClientId,
                    valor_Total: 16.66,
                    dataHora_Pedido: "2021-01-12",
                    pedido_Concluido: false,
                    status_Pedido: itemValue,
                    // estabelecimentoId: dados[0].estabelecimentoId,
                    clientes: dados[0].clientes,
                    estabelecimentos: dados[0].estabelecimentos,
                    carrinhos: dados[0].carrinhos
                }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                //altera o state de pedido com o status selecionado
                setStatusPedidoAtual(response.data.result.status_Pedido);

                //zera a lista de pedidos para que seja obrigatório buscar novamente
                dados[2]([]);
                // dados[2](true);

                // navigation.navigate('MeusPedidos');

            }).catch(errors => {
                console.log(errors);
            });
        }
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
            {/* {console.log(dados[0].clientes)} */}
            <View style={Styles.box1}>
                <View style={Styles.item1}>
                    <View style={Styles.item1_1}>
                        <Text style={Styles.textCliente}>{dados[0].clientes.nome_Client.length > 16 ? `${dados[0].clientes.nome_Client.substring(0, 16)}...` : dados[0].clientes.nome_Client}</Text>
                        <Text style={Styles.textPedido}>{`#${dados[0].cod_Pedido}`}</Text>
                    </View>
                    <View style={Styles.item1_2}>
                        <Text style={[Styles.StatusPedidoP, corStatus]}>{dados[1](StatusPedidoAtual)}</Text>
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
                        <Text style={Styles.TextTelefone}>{dados[0].clientes.telefone ? "TELEFONE - " + dados[0].clientes.telefone : "TELEFONE NÃO CADASTRADO"}</Text>
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
                                selectedValue={StatusPedidoAtual}
                                itemStyle={{ textAlign: 'center' }}
                                onValueChange={(itemValue, itemIndex) => EditaStatus(itemValue)}
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
