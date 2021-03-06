
import React, { useState, useContext } from 'react';
import { StyleSheet, View, } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { BarcodeMask} from '@nartc/react-native-barcode-mask'
import { ValidaEan } from '../Services/ValidarCodebar';
import Api from '../Services/api'

import MyModal from '../Componentes/MyModal'
import AuthContext from '../Contexts/Auth';

export default function MyCamera({ navigation }) {

    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    const [barcodeRead, setBarcodeReader] = useState(false);
    const { token } = useContext(AuthContext);

    const getProdutoLocal = (codbar) => {
        Api.get(`v1/ProdutosDb/Filtercodbar/${codbar}`, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            // console.log(response.data)
            const { result } = response.data;
            if (result) {
                let item = result;
                navigation.navigate('NovoProduto', {produto:item})
                // console.log(result)
            } else {
                setMsnModal("Produto não encontrado!" + codbar);
                setModalActive(true);
                setBarcodeReader(false);
            }
        }).catch(erro => {
            console.log(erro);
        });
    }

    const barcodesRecognized = (barcodes) => {
        // console.log(barcodes.data)
        let { data, type } = barcodes;

        if (type !== undefined && type !== "UNKNOWN_FORMAT") {

            // console.log(data);
            // console.log(type);

            if (ValidaEan(data)) {
                // console.log("codigo valido")
                setBarcodeReader(true);
                getProdutoLocal(data);
            }else{
                setMsnModal("Codigo de Barras Inválido");
                setModalActive(true);
                setBarcodeReader(false);
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
                onBarCodeRead={barcodesRecognized}
                barCodeTypes={barcodeRead ? [] :
                    [RNCamera.Constants.BarCodeType.ean8,
                    RNCamera.Constants.BarCodeType.ean13,
                    RNCamera.Constants.BarCodeType.itf14,
                    RNCamera.Constants.BarCodeType.upc_e,
                    RNCamera.Constants.BarCodeType.aztec,
                    RNCamera.Constants.BarCodeType.code128,
                    RNCamera.Constants.BarCodeType.code39,
                    RNCamera.Constants.BarCodeType.code39mod43,
                    RNCamera.Constants.BarCodeType.code93,
                    RNCamera.Constants.BarCodeType.datamatrix,
                    RNCamera.Constants.BarCodeType.interleaved2of5,
                    RNCamera.Constants.BarCodeType.pdf417,
                    RNCamera.Constants.BarCodeType.qr,
                    RNCamera.Constants.BarCodeType.upc_e
                        ,]}
            //onGoogleVisionBarcodesDetected={this.barcodesRecognized}
            >
                <BarcodeMask></BarcodeMask>
            </RNCamera>
            <View>
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} />
            </View>
        </View>
    );
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