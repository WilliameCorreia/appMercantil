import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
    },
    box1: {
        flex: 1,
    },
    box2: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        width: 150,
        height: 150,
        backgroundColor: '#cccccc'
    },
    cont_btn: {
        margin: 10,
        backgroundColor: '#cccccc',
    },
    text: {
        color: '#B32728',
    },
    icone: {
        resizeMode: 'stretch',
        width: 100,
        height: 100,
        margin: 10
    },
    cont_icons: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgScrow: {
       width: (Dimensions.get('window').width / 20 * 18),
       height: (Dimensions.get('window').height / 20 * 6),
       resizeMode: 'stretch'
    }
})

export default styles
