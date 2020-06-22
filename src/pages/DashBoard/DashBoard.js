import React from 'react'
import { View, Text, Image, _View, BackHandler, Alert } from 'react-native'

import { Button } from 'react-native-elements'
import styles from './style'
import CarroselImage from '../../Componentes/CarroselImage'

const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

export default function DashBoard({ navigation }) {
    console.log('entrou dashBoard')

    /*   useFocusEffect(
          React.useCallback(()=>{
              BackHandler.removeEventListener('hardwareBackPress', onBackPress)
              const onBackPress = () => {
                  console.log('tefgsdfgsdfgsdfgsdfgsdfgste')
                  Alert.alert('toque em voltar para sair')
              }
  
              BackHandler.addEventListener('hardwareBackPress', onBackPress)
              
           })
      ) */

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <CarroselImage images={images} />
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
                        onPress={() => navigation.navigate('NewOfertas')}
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
