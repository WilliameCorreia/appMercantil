import React, { useState, useContext, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { EstabelecimentosContext } from '../../Contexts/EstabelecimentoContext';
import { Picker } from '@react-native-community/picker'
import AuthContext from '../../Contexts/Auth';
import api from '../../Services/api';

export default function MudaStatusFuncionamento() {
    const { Estabelecimento, setEstabelecimento } = useContext(EstabelecimentosContext);
    const { token } = useContext(AuthContext);
    const { estabelecimentoFechado } = Estabelecimento;
    const [fechado, setFechado] = useState();

    useEffect(() => {
        setFechado(estabelecimentoFechado)
    }, [estabelecimentoFechado])

    function modificaFuncionamento(status){
        api.put(`v1/Estabelecimentos/EstabelecimentoFechado/${Estabelecimento.id}`, {
            token: Estabelecimento.token,
            email: Estabelecimento.email,
            _Estabelecimento: Estabelecimento._Estabelecimento,
            razaoSocial: Estabelecimento.razaoSocial,
            cnpj: Estabelecimento.cnpj,
            ativo: true,
            tipoEstabId: Estabelecimento.tipoEstabId,
            tipoEstabelecimento: Estabelecimento.tipoEstabelecimento,
            telefones: Estabelecimento.telefone,
            enderecos: Estabelecimento.enderecos,
            fotoName: Estabelecimento.fotoName,
            estabelecimentoFechado: status,
            tipo_Estabelecimento: Estabelecimento.tipo_Estabelecimento
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(dados => {
            if (dados.data.result) {
                console.log(dados.data.result.estabelecimentoFechado)
                setFechado(dados.data.result.estabelecimentoFechado)
            }
        }).catch(errors => {
            console.log(errors);
        });
    
    }

    return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
            {/* <View style={{ flex:1, flexDirection:"row" , justifyContent:"center", height:"50%", alignItems:"center", width:"50%" }}>
                <Text style={{ backgroundColor: "red", height: 25, width: 25, borderRadius:25 }} />
            </View> */}
            <View style={[Styles.picker, { margin: 0 }]}>
            <Text style={fechado==="s"?{ backgroundColor: "red", height: 25, width: 25, borderRadius:25, marginHorizontal:"15%" }:""} />
            <Text style={fechado==="n"?{ backgroundColor: "#07f13a", height: 25, width: 25, borderRadius:25, marginHorizontal:"15%" }:""} />
                <Picker
                    style={{ width: "50%", textAlign: 'center' }}
                    selectedValue={fechado}
                    itemStyle={{ textAlign: 'center' }}
                onValueChange={(itemValue, itemIndex) => modificaFuncionamento(itemValue)}
                // mode="dropdown"
                >
                    {/* <Picker.Item label={"Selecione"} /> */}
                    <Picker.Item label={"Aberto"} value={"n"} />
                    <Picker.Item label={"Fechado"} value={"s"} />
                </Picker>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    picker: {
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
        // justifyContent: 'space-between' ,
        alignItems: 'center',
        marginBottom: "8%",
        marginHorizontal: "2%",
        width: "80%",
        flexDirection:"row"
    }
})
