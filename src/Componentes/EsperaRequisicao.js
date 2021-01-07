import React, { useState } from 'react'
import {
    Text,
    View,
    ActivityIndicator,
    Dimensions,
    StyleSheet
} from 'react-native'

import MyModal from './MyModal'
const windowWidth = Dimensions.get('window').width / 100


export default EsperaRequisicao = ( setModalActive, modalActive, msnModal  ) => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text style={Styles.textLoad}>Estamos Processando sua solicitação...</Text>
            <ActivityIndicator size="large" color="red" />
            <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} navigation />
        </View>
    )
}

const Styles = StyleSheet.create({
    textLoad: {
        fontFamily: 'Montserrat-Medium',
        fontSize: windowWidth * 7,
        padding: 16, paddingBottom: 0,
        opacity: 0.3, textAlign: "center",
        margin: 20
    },
})