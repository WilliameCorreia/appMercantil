import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
    },
    box1: {
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    box2: {
        flex: 3,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    btn: {
        width: (Dimensions.get('window').width / 40 * 17),
        height: (Dimensions.get('window').height /4),
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
