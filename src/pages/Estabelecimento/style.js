import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2:{
        paddingTop: 30,
        alignItems: 'center'
    },
    box: {
        backgroundColor: '#B32728',
        alignItems: 'center'
    },
    box2:{
        width: 400
    },
    img_stb:{
        width: 150,
        height: 150,
        margin: 10
    },
    text:{
        fontSize: 30,
        color: '#ffff',
        fontWeight: 'bold'
    },
    text_underline:{
        textDecorationLine: 'underline',
        marginBottom: 10
    },
    textContainer:{
        alignItems: "center",
    },
    input:{
        height: 60,
        margin: 10,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#b3b3b3',
        backgroundColor: 'transparent',
        padding: 20
    },
    label:{
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    btn:{
        width: 250,
        height:60,
        backgroundColor: '#F23132',
        borderRadius: 30,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles
