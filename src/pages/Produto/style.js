import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width / 100
const windowHeight = Dimensions.get('window').height / 100

const Styles = StyleSheet.create({
container: { flex: 1, padding: "4%" },
    box1: {  backgroundColor: '#fff', elevation: 8, marginBottom: "2%"},
    box2: { backgroundColor: '#fff', marginTop:"2%", height: windowHeight * 10, alignItems:"center", elevation: 10 },

    item1: { height: windowHeight * 18, flexDirection: 'row' },
    item1_1: { width: "50%", backgroundColor: "#fff", marginLeft: 8 },
    textCliente: { fontFamily: 'Montserrat-Medium', fontSize: 20, padding: 16, paddingBottom: 0, opacity: 0.3 },
    textPedido: { fontFamily: 'Montserrat-Medium', fontSize: 16, marginLeft: 16, opacity: 0.3 },
    item1_2: { width: "45%", backgroundColor: '#fff', flexDirection: "column", justifyContent: "center", alignItems: "flex-end" },
    prodImg: { backgroundColor: "#fff", width: "50%", height: "65%", marginBottom: 8 },
    
    item2: { height: windowHeight * 7, flexDirection: 'row', padding: "7%", paddingTop: "5%", borderTopWidth: 0.3 },
    item2_1: { width: "60%", backgroundColor: "#fff" },
    item2_1Text: { fontFamily: "Montserrat-Medium", fontSize: 15 },
    item2_2: { width: "45%", backgroundColor: "#fff" },
    item2_2Text: { fontFamily: "Montserrat-Medium", fontSize: 15 },

    item3: { height: windowHeight *8, flexDirection: 'row', paddingTop: 0, marginLeft: "5%", marginBottom: "4%" },
    item3_1: { width: "50%", backgroundColor: "#fff", marginLeft: "2%"},
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
        height: windowHeight * 4,
        flexDirection: 'row', 
        padding: "7%", 
        paddingTop: 0
    },
    item4_1: { width: "60%", backgroundColor: "#fff" },
    item4_1Text: { fontFamily: "Montserrat-Medium", fontSize: 15 },

    item5: {height: windowHeight * 8, flexDirection: 'row', paddingTop: 0, marginLeft: "5%", marginBottom: "4%" },
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
    
    item6: { height: windowHeight * 4, flexDirection: 'row', padding: "7%", paddingTop: 0, paddingBottom: "2%" },
    item6_1: { width: "60%", backgroundColor: "#fff" },
    item6_1Text: { fontFamily: "Montserrat-Medium", fontSize: 15 },
    
    item7: { height: windowHeight *10, flexDirection: 'row', paddingTop: 0, marginLeft: "5%" },
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
        color: 'black'
    },

    item8: { height: windowHeight * 8, flexDirection: 'row'},
    item8_1: { width: "100%", backgroundColor: "#fff", alignItems: "center" },
    item8_1Text: { marginTop: '2%', borderRadius: 25, width: "60%", backgroundColor: "#9C3F3A", textAlign: "center", padding: "2%", fontSize: 16, fontFamily: "Montserrat-SemiBold", color: "white" },
    
    item9: { width: "100%", height:"100%", backgroundColor: "#fff", justifyContent:"center", alignItems:"center"},
    item9_1Text: { marginTop: '2%', borderRadius: 25, width: "80%", backgroundColor: "#ff0000", textAlign: "center", padding: "2%", fontSize: 16, fontFamily: "Montserrat-SemiBold", color: "white" },
    

    
    

})

export default Styles