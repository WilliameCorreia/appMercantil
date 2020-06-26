import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btnCategoria:{
        
    },
    label:{
        fontSize: 18,
        color: '#B32728',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    uriImg:{
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 20 * 3),
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 10,
        borderColor: '#fff',
        resizeMode: 'center'
    }
})

export default styles
