import S3 from 'aws-sdk/clients/s3';
import { decode } from 'base64-arraybuffer';
import fs from 'react-native-fs';




const UploadFile = async (BacketName, pathName, file, UserToken, tela) => {
    console.log("vai acessar services")
    console.log(BacketName)
    console.log(file)

    const s3bucket = new S3({
        accessKeyId: "AKIAVHXDSJ6CAQOQ2F4P",
        secretAccessKey: "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",
        Bucket: BacketName,
        signatureVersion: 'v4',
    });

    let contentType = file.type;
    let contentDeposition = 'inline;filename="' + file.name + '"';
    const base64 = await fs.readFile(file.uri, 'base64');
    const arrayBuffer = decode(base64);

    let nome = file.name.split(".", 1)
    let nameCerto = nome[0]
    let tipo = file.type.replace('image/', '')
    let nameCerto1 = nameCerto + '.' + tipo


    s3bucket.createBucket(() => {
        if (tela == "produtos") {
            const params = {
                Bucket: `${BacketName}${pathName}`,
                Key: UserToken,
                Body: arrayBuffer,
                ContentDisposition: contentDeposition,
                ContentType: contentType,
            };
        } else {
            const params = {
                Bucket: `${BacketName}${pathName}${UserToken}`, ///images/
                Key: nameCerto1,
                Body: arrayBuffer,
                ContentDisposition: contentDeposition,
                ContentType: contentType,
            };
        }

        s3bucket.upload(params, (err, data) => {
            if (err) {
                console.log('error in callback');
            }
            console.log('success');
            console.log("Respomse URL : " + data.Location)
            console.log("array buffer : " + contentDeposition)
        });

    })
}
export default UploadFile
