import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FF7223',
        justifyContent: "center",
        alignItems: 'center'
    },
    input:{
        width: 350,
        height: 60,
        backgroundColor: 'transparent',
        margin: 10,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#9C3F3A',
        textAlign: "center",
        color: '#ffff'
    },
    btn:{
        backgroundColor: "#ffff",
        width: 350,
        height: 60,
        borderRadius: 30,
        margin: 10
    },
    text:{
        fontSize: 40,
        color: '#B32728',
        textAlign: 'center',
        letterSpacing: 3,
    },
})

export default styles

