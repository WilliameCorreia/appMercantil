import React, { useState, useEffect } from 'react'
import { View, Text, Image, _View} from 'react-native'

import storage from '@react-native-firebase/storage';

import { Button } from 'react-native-elements'
import styles from './style'
import CarroselImage from '../../Componentes/CarroselImage'

const reference = storage().ref('/Propagandas');

export default function DashBoard({ navigation }) {

    const [images, setImages] = useState([])

    async function listFilesAndDirectories(reference, pageToken) {
        const ImgSlide = await reference.list({ pageToken }).then(result => {
            let listaImg = []
            // Loop over each item
            result.items.forEach(ref => {
                ref.getDownloadURL().then(dados => {
                    listaImg.push(dados)
                })
            });
            return listaImg
        });
        return ImgSlide
    }

    useEffect(() => {
        listFilesAndDirectories(reference).then(dados => {
            setImages(dados)
            console.log('finalizado !');
        });
        return () => {
            console.log('error DahBoard')
        }
    }, [])

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

    console.log('entrou dashBoard')

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
                        onPress={() => navigation.navigate('Categorias')}
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
