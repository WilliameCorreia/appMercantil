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
        backgroundColor: 'red'
    },
    uriImg:{
        width: (Dimensions.get('window').width / 100 * 45),
        height: (Dimensions.get('window').height / 100 * 13),
        //resizeMode: 'center'
    },
    Indicator:{
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 20 * 3),
        backgroundColor: '#fff'
    },
    uriShimmer:{
        width: '45%',
        height: (Dimensions.get('screen').height / 20 * 3),
        margin: 8
    }
})

export default styles
