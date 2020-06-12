import React from 'react'
import { View, Text, Image, _View } from 'react-native'

import { Button } from 'react-native-elements';

import styles from './style'

export default function DashBoard( { navigation } ) {

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Button
                    icon={
                        <View style={styles.cont_icons}>
                            <Image source={require('../../Assets/meusPedidos.png')} style={styles.icone} />
                            <Text style={styles.text}>MEUS PEDIDOS</Text>
                        </View>
                    }
                    raised
                    containerStyle={styles.cont_btn}
                    buttonStyle={styles.btn}
                   onPress={() => navigation.navigate('MeusPedidos')}
                />
                <Button
                    icon={
                        <View style={styles.cont_icons}>
                            <Image source={require('../../Assets/Ofertas.png')} style={styles.icone} />
                            <Text style={styles.text}>OFERTAS</Text>
                        </View>
                    }
                    raised
                    containerStyle={styles.cont_btn}
                    buttonStyle={styles.btn}
                    onPress={() => navigation.navigate('Ofertas')}
                />
            </View>
            <View style={styles.box2}>
            <Button
                    icon={
                        <View style={styles.cont_icons}>
                            <Image source={require('../../Assets/meusProdutos.png')} style={styles.icone} />
                            <Text style={styles.text}>MEUS PRODUTOS</Text>
                        </View>
                    }
                    raised
                    containerStyle={styles.cont_btn}
                    buttonStyle={styles.btn}
                    onPress={() => navigation.navigate('MeusProdutos')}
                />
                
                <Button
                    icon={
                        <View style={styles.cont_icons}>
                            <Image source={require('../../Assets/novoProduto.png')} style={styles.icone} />
                            <Text style={styles.text}>NOVO PRODUTO</Text>
                        </View>
                    }
                    raised
                    containerStyle={styles.cont_btn}
                    buttonStyle={styles.btn}
                    onPress={() => navigation.navigate('NovoProduto')}
                />
            </View>
        </View>
    )
}
