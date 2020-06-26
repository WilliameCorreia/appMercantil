import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    },
    btnCategoria:{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderColor: '#fff'
    },
    label:{
        fontSize: 18,
        color: '#B32728',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    uriImg:{
        resizeMode: 'center',
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 20 * 3),
    },
    Indicator:{
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 20 * 3),
        backgroundColor: '#fff'
    }
})

export default styles
