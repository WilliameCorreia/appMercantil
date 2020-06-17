import { StyleSheet, Dimensions } from 'react-native'

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
        fontSize: 16,
        backgroundColor: 'transparent',
    },
    SectionStyle: {
        width: (Dimensions.get('window').width / 4 * 3),
        height: (Dimensions.get('window').width / 7),
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
        margin: 15,
    },
    btn: {
        backgroundColor: "#ffff",
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
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
        width: (Dimensions.get('window').width / 10 * 6),
        height: (Dimensions.get('window').height / 10 * 3),
        resizeMode: 'stretch'
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

