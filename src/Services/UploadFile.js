import fs from 'react-native-fs';
import api from './api';




const UploadFile = async ( token, file, UserToken, tela) => {
    
    const base64 = await fs.readFile(file.uri, 'base64')
    if(tela === null){

        api.post(`v1/FileStreamUpload?nameFile=${file.name}`, {
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
        api.post(`v1/FileStreamUpload?nameFile=${UserToken}`, {
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
