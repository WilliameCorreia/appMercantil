import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        backgroundColor: '#B32728',
        alignItems: 'center'
    },
    box2:{
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img_stb:{
        width: (Dimensions.get('window').width /10 * 4),
        height: (Dimensions.get('window').height/10 * 2),
        resizeMode: 'center'
    },
    text:{
        fontSize: 30,
        color: '#ffff',
        fontWeight: 'bold',
    },
    text_underline:{
        textDecorationLine: 'underline',
        marginBottom: 10
    },
    textContainer:{
        alignItems: "center",
    },
    input:{
        width: (Dimensions.get('window').width / 4 * 3),
        height: (Dimensions.get('window').width / 7),
        padding: 20,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#b3b3b3',
        backgroundColor: 'transparent',
    },
    label:{
        alignSelf: 'flex-start',
        paddingLeft: 50,
        fontSize: 20,
        fontWeight: 'bold'
    },
    btn:{
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
        backgroundColor: '#F23132',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default styles
