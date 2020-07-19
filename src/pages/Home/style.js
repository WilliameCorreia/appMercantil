import { StyleSheet, Dimensions} from 'react-native'

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
        resizeMode: 'center',
    },
    image_logoNome: {
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 6),
        resizeMode: 'center',
    },
    btn: {
        backgroundColor: "#B32728",
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
        justifyContent:'center',
        alignItems: 'center',
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
        fontSize: 30,
        color: '#fff',
        letterSpacing: 3,
        fontFamily: 'Montserrat-SemiBold', 
        fontWeight: '600'
    },
    text2: {
        fontSize: 20,
        color: '#B32728',
        textAlign: 'center',
        fontWeight: "bold",
        fontFamily: 'Montserrat-SemiBold', 
        fontWeight: '600'
    }
})

export default styles
