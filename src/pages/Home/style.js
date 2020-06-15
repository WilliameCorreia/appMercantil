import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: "column",
        backgroundColor: '#fff'
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    load:{
        justifyContent: 'center'
    },
    image_back: {
        flex: 1,
        height: (Dimensions.get('window').height / 12 * 8),
        resizeMode: "cover",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    image_logo:{
        width: (Dimensions.get('window').width / 10 * 5 ),
        height: (Dimensions.get('window').height / 10 * 3),
        marginBottom: 20
    },
    btn:{
        backgroundColor: "#B32728",
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
        borderRadius: 30,
        margin: 10
    },
    btn2:{
        backgroundColor: 'transparent',
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
        borderRadius: 30,
        margin: 10,
    },
    text:{
        fontSize: 40,
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 3,
    },
    text2:{
        fontSize: 20,
        color: '#B32728',
        textAlign: 'center',
        fontWeight: "bold"
    }
})

export default styles
