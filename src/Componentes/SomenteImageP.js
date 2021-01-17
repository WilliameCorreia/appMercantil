import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, ActivityIndicator } from 'react-native'

export default function SomenteImageP(props) {
    const [Carregando, setCarregando] = useState(false);
    return (
        <>
        <ActivityIndicator size="large" color="red" animating={Carregando}/>
        <Image onLoadStart={() => setCarregando(true)} onLoadEnd={() => setCarregando(false)} style={Carregando?"": styles.img} source={props.foto ? { uri: foto.uri } : props.Estabelecimento.fotoName ? { uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/estabelecimento/${props.Estabelecimento.fotoName}?${new Date()}` } : require("../Assets/person.png")} />
        </>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
    }
})
