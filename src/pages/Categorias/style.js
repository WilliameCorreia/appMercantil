import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    },
    btnCategoria:{
        width: (Dimensions.get('window').width /2),
        height: (Dimensions.get('window').height / 40 * 6),
        alignItems: 'center',
        justifyContent: 'center',
    },
    uriImg:{
        width: (Dimensions.get('window').width / 20 * 8),
        height: (Dimensions.get('window').height / 20 * 3),
        resizeMode: 'center'
    },
    Indicator:{
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 20 * 3),
        backgroundColor: '#fff'
    }
})

export default styles
