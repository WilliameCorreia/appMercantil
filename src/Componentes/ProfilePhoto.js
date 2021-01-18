import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
const windowWidth = Dimensions.get('window').width / 100
const windowHeight = Dimensions.get('window').height / 100

import { EstabelecimentosContext } from '../Contexts/EstabelecimentoContext'
import ImagePicker from 'react-native-image-picker';

import UploadFile from '../Services/UploadFile'
import DeleteFile from '../Services/DeleteFile'
import AuthContext from '../Contexts/Auth'
import SomenteImageP from './SomenteImageP'


export default function ProfilePhoto(props) {
    const { token } = useContext(AuthContext);
    const { Estabelecimento, setEstabelecimento, EditaFotoEstabelecimento } = useContext(EstabelecimentosContext);
    const [foto, setFoto] = useState(null);
    // const [Velocidade, setVelocidade] = useState(new Date().getMinutes());


    function EscolherImagem() {
        console.log("vai selecionar a imagem");
        //Ajusta quais opções estarão disponíveis para o usuário
        const options = {
            title: "Altere a Foto de Perfil",
            takePhotoButtonTitle: "",
            chooseFromLibraryButtonTitle: "Adicione Uma Imagem da Galeria",
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }

        ImagePicker.showImagePicker(options, (response) => {
            // console.log('resultado do seletor de imagem', response);

            if (response.didCancel) {
                console.log('operação cancelada pelo usuário');
            } else if (response.error) {
                console.log('Ocorreu um erro com image picker: ', response.error);
            } else if (response.customButton) {
                console.log('Usuário clicou em um botão customizado: ', response.customButton);
            } else {
                const file = {
                    uri: response.uri,
                    name: response.fileName,
                    type: response.type
                }


                let nome = file.name.split(".", 1)
                let nameCerto = nome[0]
                let tipo = "png"
                // let tipo = file.type.replace('image/', '')
                let nameCerto1 = Estabelecimento.token + '.png'



                // console.log(token, file, Estabelecimento.token, "Usuário")
                // setVelocidade(new Date())
                setFoto(file)
                UploadFile(token, file, Estabelecimento.token, "Usuário", Estabelecimento.fotoName)

                if (!Estabelecimento.fotoName) {
                    EditaFotoEstabelecimento(nameCerto1)
                }
                // props.children("foto")
                // console.log(props.children)



            }
        });

    }

    return (
        <View style={styles.box1}>
            <TouchableOpacity onPress={() => EscolherImagem()}>
                <SomenteImageP foto={foto} Estabelecimento={Estabelecimento} />
                {/* <Image style={styles.img} source={foto ?{ uri: foto.uri }: Estabelecimento.fotoName ?{ uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/estabelecimento/${Estabelecimento.fotoName}?${new Date()}` }: require("../Assets/person.png")} /> */}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    box1: {
        height: windowHeight * 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#B32728",
        elevation: 10
    },
    img: {
        width: 120,
        height: 120,
    }
})
