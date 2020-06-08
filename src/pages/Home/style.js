import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
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
        height: 500,
        resizeMode: "cover",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    image_logo:{
        width: 300,
        height: 300
    },
    btn:{
        backgroundColor: "#B32728",
        width: 350,
        height: 60,
        borderRadius: 30,
        margin: 10
    },
    btn2:{
        backgroundColor: 'transparent',
        width: 350,
        height: 60,
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
        fontSize: 25,
        color: '#B32728',
        textAlign: 'center',
        fontWeight: "bold"
    }
})

export default styles
