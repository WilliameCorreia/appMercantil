import React, {useState} from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker';

export default function FotoProduto(props) { //produto, ImgProduto
    const [FotoPng, setFotoPng] = useState('');    
    function EscolherImagem() {
        const options = {
            title: "Defina Foto do Produto",
            takePhotoButtonTitle: "",
            chooseFromLibraryButtonTitle: "Adicione Uma Imagem da Galeria",
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }
        ImagePicker.showImagePicker(options, (response) => {
            console.log('resultado do seletor de imagem', response);

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
                // DeleteFile("appmercantilestabelecimento", "/images", file, Estabelecimento.token);
                //UploadFile("appmercantilestabelecimento/images", file, Estabelecimento.token)

                let nome = file.name.split(".", 1)
                let nameCerto = nome[0]
                let tipo = file.type.replace('image/', '')
                file.name = nameCerto + '.' + tipo

                // EditaFotoEstabelecimento(nameCerto1)
                // setarquivo(nameCerto1)

                setFotoPng(file)
                // props.ImgProduto = file

                console.log(props.ImgProduto)
                props.ImgProduto(file)
                // props.ImgProduto = "agr foi"
                // console.log(props.ImgProduto)

            }
        });
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => EscolherImagem()}>
            <Image source={ props.produto.FotoPng ? { uri: 'https://appmercantilimagens.s3.us-east-2.amazonaws.com/ImagensPng/png/' + props.produto.FotoPng } : FotoPng.name ? { uri: FotoPng.uri  } : require("../Assets/srcImage.png") } style={styles.prodImg} />            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        
        width: "40%",
        height: "90%",                
        backgroundColor: '#fff'
    },
    prodImg: {
        width: "60%",
        height: "100%",
        
    }
})
