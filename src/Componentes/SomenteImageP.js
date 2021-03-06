import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, ActivityIndicator } from 'react-native'

export default function SomenteImageP(props) {
    const [Carregando, setCarregando] = useState(true);
    const { foto, Estabelecimento, velocidade, carrega } = props
    return (
        <>
            <ActivityIndicator size="large" color="red" animating={Carregando} style={Carregando ? "" : { display: "none" }} />
            <Image onLoadStart={carrega?() => setCarregando(true):null} onLoadEnd={() => setCarregando(false)} style={Carregando ? "" : styles.img} source={foto ? { uri: foto.uri } : Estabelecimento.fotoName ? { uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/estabelecimento/${Estabelecimento.fotoName}?${velocidade?velocidade: new Date()}` } : require("../Assets/person.png")} />
        </>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
    }
})
