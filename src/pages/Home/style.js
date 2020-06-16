import { StyleSheet, Dimensions, Alert } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box2: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    boxLoad: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image_logo: {
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height /4),
        resizeMode: 'stretch',
    },
    image_logoNome: {
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 6),
        resizeMode: 'stretch',
    },
    btn: {
        backgroundColor: "#B32728",
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
        borderRadius: 30,
        margin: 10
    },
    btn2: {
        backgroundColor: 'transparent',
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
        borderRadius: 30,
        margin: 10,
    },
    text: {
        fontSize: 40,
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 3,
    },
    text2: {
        fontSize: 20,
        color: '#B32728',
        textAlign: 'center',
        fontWeight: "bold"
    }
})

export default styles
