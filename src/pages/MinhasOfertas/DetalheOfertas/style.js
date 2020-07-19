import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width / 100
const windowHeight = Dimensions.get('window').height / 100

const Styles = StyleSheet.create({
    container: { flex: 1, padding: "4%" },
    box1: { height: windowHeight * 65, backgroundColor: '#fff', elevation: 8, marginBottom:"10%"},
    box2: { height: windowHeight * 15, marginTop: "4%" },

    item1: { height: "20%", flexDirection: 'row' },
    item1_1: { width: "50%", backgroundColor: "#fff", marginLeft: 8 },
    textCliente: { fontFamily: 'Montserrat-Medium', fontSize: 20, padding: 16, paddingBottom: 0, opacity: 0.3 },
    textPedido: { fontFamily: 'Montserrat-Medium', fontSize: 16, marginLeft: 16, opacity: 0.3 },
    item1_2: { width: "45%", backgroundColor: '#fff', flexDirection: "column", justifyContent: "center", alignItems: "flex-end" },
    StatusPedidoP: { backgroundColor: "red", width: "85%", textAlign: "center", color: "white", marginBottom: 8 },

    item2: {
        height: "20%", backgroundColor: '#fff',
        flexDirection: 'row', borderTopWidth: 0.3, borderBottomWidth: 0.3, borderColor: "#b4b4b4",
        paddingTop: 10
    },

    item2: { flexDirection: 'row', padding: "7%", paddingTop: "5%", borderTopWidth: 0.3, paddingBottom: "2%" },
    item2_1: { width: "60%", backgroundColor: "#fff" },
    item2_1Text: { fontFamily: "Montserrat-Medium", fontSize: 15 },
    item2_2: { width: "45%", backgroundColor: "#fff" },
    item2_2Text: { fontFamily: "Montserrat-Medium", fontSize: 15 },

    item3: { height: "15%", flexDirection: 'row', paddingTop: 0, marginLeft: "5%", marginBottom: "4%" },
    item3_1: { width: "50%", backgroundColor: "#fff", marginLeft: "2%" },
    item3_1Input: {
        textAlign: "center",
        backgroundColor: "#fff",
        borderColor: "#d0d0d0",
        elevation: 6,
        borderRadius: 25,
        width: "65%",
        fontSize: 13,
        fontFamily: "Montserrat-light",
        borderColor: "#b4b4b4"
    },
    item3_2: { width: "35%", backgroundColor: "#fff", marginLeft: "5%" },
    item3_2Input: {
        elevation: 6,
        backgroundColor: "#fff",
        textAlign: "center",
        borderColor: "#d0d0d0",
        borderRadius: 25,
        width: "95%",
        fontSize: 13,
        fontFamily: "Montserrat-light",
    },
    item4: { 
        flexDirection: 'row', 
        padding: "7%", 
        paddingTop: 0, 
        paddingBottom: "2%" 
    },
    item4_1: { width: "60%", backgroundColor: "#fff" },
    item4_1Text: { fontFamily: "Montserrat-Medium", fontSize: 15 },

    item5: { height: "15%", flexDirection: 'row', paddingTop: 0, marginLeft: "5%", marginBottom: "4%" },
    item5_1: { width: "100%", backgroundColor: "#fff", paddingLeft: "2%" },
    item5_1Input: {
        elevation: 6,
        backgroundColor:"#fff", 
        textAlign:"center",
        borderColor: "#d0d0d0", 
        textAlign: "center",         
        borderRadius: 25, 
        width: "90%", 
        fontSize: 13, 
        fontFamily: "Montserrat-light",
    },

    item6: { flexDirection: 'row', padding: "7%", paddingTop: 0, paddingBottom: "2%" },
    item6_1: { width: "60%", backgroundColor: "#fff" },
    item6_1Text: { fontFamily: "Montserrat-Medium", fontSize: 15 },

    item7: { height: "15%", flexDirection: 'row', paddingTop: 0, marginLeft: "5%" },
    item7_1: { width: "100%", backgroundColor: "#fff", paddingLeft: "2%" },
    item7_1Input: {
        elevation: 6,
        backgroundColor:"#fff", 
        textAlign:"center",
        borderColor: "#d0d0d0", 
        textAlign: "center",         
        borderRadius: 25, 
        width: "90%", 
        fontSize: 13, 
        fontFamily: "Montserrat-light",
    },


    item8: { height: "12%", flexDirection: 'row', marginBottom:5, marginTop:"2%"},
    item8_1: { width: "100%", backgroundColor: "#fff", alignItems: "center" },
    item8_1Text: { borderRadius: 25, width: "60%", backgroundColor: "#9C3F3A", textAlign: "center", padding: "2%", fontSize: 16, fontFamily: "Montserrat-SemiBold", color: "white" },


    item9: { height: "60%", elevation: 4, backgroundColor: "#fff", padding: 7 },
    item9_1: { width: "100%", height: "100%", backgroundColor: "#ff0000", alignItems: "center", justifyContent: "center", elevation: 2 },
    item9_1Text: { fontFamily: 'Montserrat-Medium', fontSize: 22, textAlign: "center", color: "white" }


})

export default Styles