import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7223',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    SectionStyle: {
        width: 320,
        height: 60,
        margin: 10,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#9C3F3A',
        textAlign: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    icon:{
        padding: 0,
    },
    btn: {
        backgroundColor: "#ffff",
        width: 250,
        height: 60,
        borderRadius: 30,
        margin: 10
    },
    text: {
        fontSize: 40,
        color: '#B32728',
        textAlign: 'center',
        letterSpacing: 3,
    },
    image_logo:{
        width: 250,
        height: 250,

    },
    textBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    text2:{
        color: '#fff',
        fontSize: 18
    }
    
})

export default styles

