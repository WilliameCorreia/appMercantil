import fs from 'react-native-fs';
import api from './api';
import { Alert } from 'react-native'




const UploadFile = async (token, file, nomeProduto, tela, deletar) => {

    const base64 = await fs.readFile(file.uri, 'base64')

    function upload() {
        if (tela === "Usuário") {
            api.post(`v1/FileStreamUpload?nameFile=${nomeProduto}&urlContainerBlob=${"planeta-produtos/estabelecimento"}`,
                {
                    image: base64

                }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                // console.log(response)
                // mudaBanco(nameCerto1)
                Alert.alert("Foto de perfil Atualizada com sucesso!", Alert.alert("Em caso de imagens grandes é comum demorar um pouco mais."))
                
            })
        }
        else if (tela === "produtos") {
            console.log("vai enviar a foto do produto")
            api.post(`v1/FileStreamUpload?nameFile=${nomeProduto}&urlContainerBlob=${"planeta-produtos/ImagensPng/png"}`, {
                image: base64
                
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                // console.log(response)
                Alert.alert("Foto do produto Atualizada com sucesso!")
            })
        }
    }

    function apagar() {
        if (tela === "Usuário") {
            api.delete(`v1/FileStreamUpload?nameFile=${nomeProduto}&urlContainerBlob=${"planeta-produtos/estabelecimento"}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(response => {
                    // console.log(response)
                    // mudaBanco(null)
                    upload()
                })
        } else if (tela === "produtos") {
            api.delete(`v1/FileStreamUpload?nameFile=${nomeProduto}&urlContainerBlob=${"planeta-produtos/ImagensPng/png"}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }).then(response => {
                    // console.log(response)
                    upload()
                })
        }
    }

    if (deletar) {
        apagar()
    } else {
        upload()
    }
}
export default UploadFile
