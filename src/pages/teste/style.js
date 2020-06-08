import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7223',
        justifyContent: "center",
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
        width: 350,
        height: 60,
        margin: 10,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#9C3F3A',
        textAlign: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    icon:{
        padding: 5,
    },
    btn: {
        backgroundColor: "#ffff",
        width: 350,
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
        width: 300,
        height: 300
    },
    
})

export default styles

