import React, { useState } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { BarcodeMask, useBarcodeRead } from '@nartc/react-native-barcode-mask'
import { ValidaEan } from '../Services/ValidarCodebar';
import Api from '../Services/api'

const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);

export default function MyCamera({ navigation }) {

    const [produto, setProduto] = useState();
    const [barcodeRead, setBarcodeReader] = useState(false);

    const getProduto = (codbar) => {
        console.log("*****************************************************")
        console.log(codbar)
        const _produto = Api.get(`ProdutosDb/codbar/${codbar}`).then(response => {
            console.log(response.data)
            let item = response.data;
            navigation.navigate('NovoProduto', {produto:item})
        }).catch(erro => {
            console.log(erro);
        });
    }
    const barcodesRecognized = (barcodes) => {
        let { bounds, data, target, type } = barcodes;
        console.log(data)

        if (type !== undefined && type !== "UNKNOWN_FORMAT") {

            console.log(data);
            console.log(type);

            if (type === "EAN_13") {
                if (ValidaEan(data)) {
                    setBarcodeReader(true);
                    getProduto(data);
                }
            }
        }

    }


    return (
        <View style={styles.container}>
            <RNCamera
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',

                }}
                /*  androidRecordAudioPermissionOptions={{
                   title: 'Permission to use audio recording',
                   message: 'We need your permission to use your audio',
                   buttonPositive: 'Ok',
                   buttonNegative: 'Cancel',
                 }} */
                onBarCodeRead={barcodesRecognized}
                barCodeTypes={ barcodeRead ? [] : [RNCamera.Constants.BarCodeType.ean13]}
            //onGoogleVisionBarcodesDetected={this.barcodesRecognized}
            //playSoundOnCapture={true}
            >
                <BarcodeMask></BarcodeMask>
                {/*  {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 14 }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }} */}
            </RNCamera>
        </View>
    );

    /* takePicture = async function (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      //  eslint-disable-next-line
      console.log(data.uri);
    }; */
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});