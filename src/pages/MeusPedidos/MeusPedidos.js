import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'

import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import { cond } from 'react-native-reanimated';

import Styles from './style.js'
import api from '../../Services/api.js';
import AuthContext from '../../Contexts/Auth.js';

export default function MeusPedidos({ navigation }) {
    const { token } = useContext(AuthContext);

    const status = "cancelado"

    const [pedidos, setPedidos] = useState([])

    const verificaCor = () => {
        switch (status) {
            case "cancelado":
                return {backgroundColor: "red"}
                break;
            case "aguardando":
                return {backgroundColor: "yellow"}
                break;
        
            default:
                return {}
                break;
        }
    }

    const [corStatus, setCorStatus] = useState(verificaCor())


    const getPedidos = () => {

        api.get("v1/Pedidos", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } = response.data;
            setPedidos(result)
        }).catch(erro => {
            console.log(erro);
        });

    }

    useEffect(() => {
        getPedidos()

    }, [])

    return (
        <ScrollView style={Styles.container}>
            <View>
                {pedidos.map(order =>
                    <TouchableOpacity style={Styles.item}
                        onPress={() => navigation.navigate('DetalhePedidos', order)}
                    >
                        <View style={Styles.box1}>
                            <Text style={[Styles.textGrande, Styles.cinza]}>{order.clientes.nome_Client}</Text>
                            <Text style={[Styles.status, Styles.textPequeno, corStatus]}>{"cancelado"}</Text>
                        </View>
                        <View style={Styles.box1}>
                            <Text style={[Styles.textGrande, Styles.cinza]}>{order.cod_Pedido}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
            <TouchableOpacity>

            </TouchableOpacity>
        </ScrollView>
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
