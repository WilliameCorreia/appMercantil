import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import styles from './style'
import { TextInput, ScrollView } from 'react-native-gesture-handler'

export default function Estabelecimento( { navigation } ) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <Image style={styles.img_stb} source={require('../../Assets/estabe.png')} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>DADOS DO</Text>
                    <Text style={[styles.text, styles.text_underline]}>ESTABELECIMENTO</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>RAZÃO SOCIAL</Text>
                    <TextInput style={styles.input} placeholder='Razão social do estabelecimento' />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>NOME DO ESTABELECIMENTO</Text>
                    <TextInput  style={styles.input} />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>TELEFONE</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>CEP</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>CIDADE</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>ESTADO</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>BAIRRO</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>ENDEREÇO</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>NUMETO</Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.box2}>
                    <Text style={styles.label}>COMPLEMENTO <Text>(Opcional)</Text></Text>
                    <TextInput style={styles.input} />
                </View>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text}>CONCLUIR</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
}
