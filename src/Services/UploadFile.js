import fs from 'react-native-fs';
import api from './api';




const UploadFile = async ( token, file, nomeProduto, tela) => {
    
    const base64 = await fs.readFile(file.uri, 'base64')
    if(tela === "Usuário"){

        api.post(`v1/FileStreamUpload?nameFile=${nomeProduto}&urlContainerBlob=${"planeta-produtos/estabelecimento"}`, {
            image : base64 
    
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then( response => {
            console.log(response)
        })
    }
    else if(tela === "produtos"){
        // console.log(base64)
        api.post(`v1/FileStreamUpload?nameFile=${nomeProduto}&urlContainerBlob=${"planeta-produtos/ImagensPng/png"}`, {
            image : base64 
    
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then( response => {
            console.log(response)
        })
    }
}
export default UploadFile
