import React, {useState, useContext} from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import UploadFile from '../Services/UploadFile';
import AuthContext from '../Contexts/Auth';

let novoProdutoEstilo;


export default function FotoProduto(props) {
    const { token } = useContext(AuthContext);
    const { estilo, localizacao, produto, setImgProduto } = props
    novoProdutoEstilo = estilo
    const [FotoPng, setFotoPng] = useState({});  

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
            console.log('resultado do seletor de imagem');

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

                // console.log(props.ImgProduto)
                // props.ImgProduto(file)
                // props.ImgProduto = "agr foi"
                // console.log(props.ImgProduto)

                if(localizacao==="novoProduto"){
                    setImgProduto(file)
                }else{
                    props.setEdicaoFoto([token, file, produto.codBar, "produtos", produto.fotoPng])
                }
            }
        });
    }
    return (
        <TouchableOpacity style={styles.container} onPress={() => EscolherImagem()}>
            <Image source={ FotoPng.name ? { uri: FotoPng.uri  } : produto.fotoPng ? { uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/ImagensPng/png/${produto.fotoPng}?${new Date()}` } : require("../Assets/srcImage.png") } style={styles.prodImg} />            
            {/* <Image source={ props.produto.fotoPng ? { uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/ImagensPng/png/${props.produto.fotoPng}` } : FotoPng.name ? { uri: FotoPng.uri  } : require("../Assets/srcImage.png") } style={styles.prodImg} />             */}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(novoProdutoEstilo?novoProdutoEstilo:{
    container: {
        
        width: "100%",
        height: "80%",                
        backgroundColor: '#fff',
        justifyContent:"center",
        alignItems:"center"
    },
    prodImg: {
        width: 120,
        height: 120,
        
    }
})
