import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width

const Styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    box1: {
        width: (Dimensions.get('window').width),
        height: (Dimensions.get('window').height / 100 * 16),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#eaeaea",
    },

    prodImg: {
        width: "25%",
        height: "80%",
        resizeMode: 'center'
    },

    Codbar: {
        height: '100%',
        position: 'absolute',
        alignSelf: 'flex-end',
        padding: 15,
        justifyContent: 'flex-end'
    },

    codbarItem: {
        backgroundColor: '#fff',
        borderRadius: 50,
        elevation: 10
    },

    codbarImg: {
        width: (Dimensions.get("window").width / 100 * 15),
        height: (Dimensions.get('window').height / 100 * 7),
        margin: 10
    },

    containerSearch:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },

    search:{
        width:(Dimensions.get('window').width / 10 * 8),
        height: (Dimensions.get('window').height / 100 * 6),
        elevation: 3, 
        borderRadius: 30,
        justifyContent: 'center',
    },

    box2: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#999999",
        borderTopWidth: 1
    },

    containerForm: {
        flex: 1,
        width: "90%"
    },

    tamanhoInputMetade: {
        width: "45%",
        fontFamily: 'Montserrat-medium',
    },

    tamanhoInputFull: {
        width: "100%",
        fontFamily: 'Montserrat-medium',
    },

    inputs: {
        textAlign: "center",
        borderColor: "#d0d0d0",
        marginBottom: 3,
        borderRadius: 25,
        fontSize: 15,
        elevation: 6,
        backgroundColor: "#fff",
        fontFamily: 'Montserrat-medium',
    },

    text: {
        fontSize: 15,
        textAlign: 'left',
        fontFamily: 'Montserrat-medium',
        margin: 10
    },

    colorLabelProduto: { color: "#999999" },

    colorPreto: { color: "black", },

    colorBranco: { color: "white" },

    BtnEncerrarText: {
        fontSize: 20,
        paddingHorizontal: 40,
        paddingVertical: 2,
        fontFamily: 'Montserrat-medium',
    },

    colum: { flexDirection: "column" },

    BtnAlterar: {
        backgroundColor: "#B32728",
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    row: { flexDirection: "row", justifyContent: 'space-between' },

    alignCenter: { justifyContent: "center", alignItems: 'center' },

    metadeBotton1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    metadeBotton2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    picker:{
        elevation: 6,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Styles