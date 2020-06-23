import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btnCategoria:{
        width: (Dimensions.get('window').width / 20 * 9),
        height: (Dimensions.get('window').height / 20 * 3),
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        padding: 10,
        
    },
    label:{
        fontSize: 18,
        color: '#B32728',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default styles
