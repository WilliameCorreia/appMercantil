import fs from 'react-native-fs';
import api from './api';




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
                console.log(response)
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
        }
    }

    if (deletar) {
        apagar()
    } else {
        upload()
    }
}
export default UploadFile
