import React, { useState, useContext, useRef } from 'react'
import {
    Text,
    View,
    ActivityIndicator,
    Dimensions,
    StyleSheet
} from 'react-native'

import MyModal from './MyModal'
const windowWidth = Dimensions.get('window').width / 100

// const [modalActive, setModalActive] = useState(false);
// const [msnModal, setMsnModal] = useState('primeira passada');

export default EsperaRequisicao = ( modal ) => {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text style={Styles.textLoad}>Estamos Processando sua solicitação...</Text>
            <ActivityIndicator size="large" color="red" />
            {modal}
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