import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'

import Styles from './style.js'
import api from '../../Services/api.js';
import AuthContext from '../../Contexts/Auth.js';
import statusPedidos from '../../Services/statusPedidos.js';
import verificaCor from '../../Services/verificaCor.js';
import { date } from 'yup';

export default function MeusPedidos({ navigation }) {
    const { token, Estabelecimento } = useContext(AuthContext);

    // const [corStatus, setCorStatus] = useState("")
    const [pedidos, setPedidos] = useState([])
    const [hora, setHora] = useState(new date())
    const [load, setLoad] = useState(true)
    let corStatus = ""

    const traduzSiglaStatus = (sigla) => {

        const retorno = statusPedidos.find(status => status.value === sigla);
        if (!retorno) {
            return "null"
        }
        return retorno.label
    }



    const getPedidos = (tipo) => {
        if (tipo) {
            setHora(new Date());
        }
        if (pedidos.length < 1 && !load) {
            setLoad(true);
        }
        api.get(`v1/Pedidos/FilterPedidoCliente?estabelecimentoId=${Estabelecimento.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } = response.data;
            if (result.length !== pedidos.length) {
                setPedidos(result);
                setTimeout(() => {
                    setLoad(false);
                }, 2000);
            }
        }).catch(erro => {
            console.log(erro);
        });

    }

    useEffect(() => {
        setTimeout(() => {
            getPedidos("hora");
        }, 5000);
    }, [hora])

    useEffect(() => {
        if (pedidos.length < 1) {
            getPedidos();
        }
    }, [pedidos])

    if (load) {
        return (
            <ActivityIndicator color={"red"} style={{ flex: 1 }} size={100} />
        )
    } else {
        return (
            <ScrollView style={Styles.container}>
                <View>
                    {pedidos.sort(function (a, b) {
                        return new Date(a.dataHora_Pedido) - new Date(b.dataHora_Pedido)
                    }).sort(function (a, b) {
                        if (a.status_Pedido === "C" && b.status_Pedido !== "C") {
                            return -1
                        } else {
                            return 1
                        }
                    }).reverse().map((order, index) =>
                        <View key={index}>
                            <TouchableOpacity style={Styles.item}
                                onPress={() => navigation.navigate('DetalhePedidos', [order, traduzSiglaStatus, setPedidos])}
                            >
                                <View style={Styles.box1}>
                                    <Text style={[Styles.textGrande, Styles.cinza]}>{order.clientes.nome_Client.length > 16 ? `${order.clientes.nome_Client.substring(0, 16)}...` : order.clientes.nome_Client}</Text>
                                    <Text style={[Styles.status, Styles.textPequeno, verificaCor(order.status_Pedido)]}>{traduzSiglaStatus(order.status_Pedido)}</Text>
                                </View>
                                <View style={Styles.box1}>
                                    <Text style={[Styles.textGrande, Styles.cinza]}>{order.cod_Pedido.toString().length < 2 ? `#0${order.cod_Pedido}` : `#${order.cod_Pedido}`}</Text>
                                    <Text style={[Styles.textGrande, Styles.cinza]}>
                                        {`${new Date(order.dataHora_Pedido).getDate()}/${new Date(order.dataHora_Pedido).getMonth() + 1}/${new Date(order.dataHora_Pedido).getFullYear()} - ${new Date(order.dataHora_Pedido).toISOString().replace('.000Z', '').split('T')[1]}`}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                <TouchableOpacity>
                </TouchableOpacity>
            </ScrollView>
        )
    }

}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#F5FCFF"
//       },    
// })
