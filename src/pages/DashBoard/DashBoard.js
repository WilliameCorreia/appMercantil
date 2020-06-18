import React, { useState } from 'react'
import { View, Text, Image, _View, ActivityIndicator } from 'react-native'

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'

import { Button } from 'react-native-elements'
import HeaderDashBoard from '../../Componentes/HeaderDashBoard'
import styles from './style'

export default function DashBoard({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <HeaderDashBoard title={'PLANETA ENTREGAS'} color={'#B32728'} navigation={navigation} />
            </View>
            <View style={styles.box2}>
                <View>
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
                <View>
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
        </View>
    )
}
