import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F23132',
        justifyContent: 'center',
        alignItems: "center"
    },
    image_person:{
        width: (Dimensions.get('window').width / 4),
        height: (Dimensions.get('window').width / 4),
    },
    input: {
        width: (Dimensions.get('window').width / 4 * 3),
        height: (Dimensions.get('window').width / 7),
        margin: 15,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#9C3F3A',
        backgroundColor: 'transparent',
        paddingLeft: 20,
        fontSize: 16
    },
    img:{
        width: (Dimensions.get('window').width / 6),
        height: (Dimensions.get('window').height / 10),
    }
})

export default styles
