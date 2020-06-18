import { StyleSheet } from 'react-native'

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
        flex: 7,
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
})

export default styles
