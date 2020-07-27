import S3 from 'aws-sdk/clients/s3';


const DeleteFile = async (BacketName, folder, file, name) => {

    const s3bucket = new S3({
        accessKeyId: "AKIAVHXDSJ6CAQOQ2F4P",
        secretAccessKey: "1fHAWHVQc+4owjY3rzwXyRAj/qFQg820rs1IttbG",
        Bucket: BacketName,
        signatureVersion: 'v4',
    });


    let tipo = file.type.replace('image/', '')
    let nameCerto = name + '.' + tipo

    s3bucket.createBucket(() => {
        const params = {
            Key: nameCerto,
            Bucket: BacketName + folder,
        };
        s3bucket.deleteObject(params, (err) => {
            if (err) {
                console.log('error in callback');
            }
            console.log('success');

        });

    })
}
export default DeleteFile
