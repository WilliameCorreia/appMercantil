import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './style'
import { TextInput, TouchableOpacity, ScrollView } from 'react-native-gesture-handler'




export default class NewProduto extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.cabecario}>
                    <Image source={require('../../Assets/srcImage.png')} style={styles.image} />               
                </View>
                <View style={styles.form}>
                    <Text style={styles.text}>Produto</Text>
                    <TextInput style={styles.inputs}/>
                    <View style={styles.divisor}>
                        <View style={styles.content1}>
                            <Text style={styles.text}>QTD</Text>
                            <TextInput style={styles.inputs}/>
                        </View>
                        <View style={styles.content2}>
                            <Text style={styles.text}>Preço</Text>
                            <TextInput style={styles.inputs}/>
                        </View>
                    </View>
                    <Text style={styles.text}>Categoria</Text>
                    <TextInput style={styles.inputs}/>
                    <Text style={styles.text}>Detalhes</Text>
                    <TextInput style={styles.inputs}/>
                    <View style={styles.centralzador}>
                    <TouchableOpacity style={styles.btnCriar}>
                        <Text style={styles.textBtn}>Salvar</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
