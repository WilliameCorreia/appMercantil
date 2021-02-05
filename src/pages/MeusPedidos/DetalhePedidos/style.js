import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: "4%" },
    box1: { height: "80%", backgroundColor: '#fff', elevation: 10 },
    box2: { height: "28%", backgroundColor: '#fff', marginTop: "4%" },

    item1: { height: "20%", flexDirection: 'row', backgroundColor:'#fff', alignItems: 'center'},
    item1_1: { width: "50%", backgroundColor: '#fff', marginLeft: 8 },
    textCliente: { fontFamily: 'Montserrat-Medium', fontSize: 20, padding: 16, paddingBottom: 0, opacity:0.3 },
    textPedido: { fontFamily: 'Montserrat-Medium', fontSize: 16, marginLeft: 16, opacity:0.3 },
    item1_2: { width: "45%", backgroundColor: '#fff', flexDirection: "column", justifyContent: "center", alignItems: "flex-end" },
    StatusPedidoP: { backgroundColor: "grey", width: "100%", textAlign: "center", color: "white", marginBottom: 8, padding: "4%", fontSize: 16 },

    item2: {
        height: "20%", backgroundColor: '#fff',
        flexDirection: 'row', borderTopWidth: 0.3, borderBottomWidth: 0.3, borderColor:"#b4b4b4",
        paddingTop:10
    },
    item2_1: { width: "40%", backgroundColor: '#fff', alignItems:"center" },
    ImgLoction: { width: "45%", height: "80%", marginTop: 0 },
    item2_2: { width: "60%", backgroundColor: '#fff', alignItems:"center" },
    TextEndereco: { fontFamily: "Montserrat-Light", fontSize: 12 },
    TextTelefone: { fontFamily: "Montserrat-Light", fontSize: 13, width: '100%', marginTop: "2%"},

    item3: { height: "15%", flexDirection: 'row', alignItems:"center", paddingLeft:20 },
    item3_1: { width: "15%", backgroundColor: "#fff", flexDirection:"row", justifyContent:"flex-start", marginRight:"8%" },
    item3_1Img: { width:18, height:25, marginRight:5},
    item3_1Text: { fontFamily: "Montserrat-SemiBold", textAlign: "left", marginTop:3 },
    item3_2: { width: "55%", backgroundColor: "#fff" },
    item3_2Text: { fontFamily: "Montserrat-SemiBold", textAlign: "left" },
    item3_3: { width: "15%", backgroundColor: "#fff" },
    item3_3Text: { fontFamily: "Montserrat-SemiBold", textAlign: "left" },

    item4: { height: "35%", flexDirection: 'column', paddingLeft:"5%" },
    item4_1: { height: "25%", flexDirection: "row", marginTop: 4, alignItems: "center"},
    item4_1_A: { width: "20%", backgroundColor: "#fff", marginRight:"3%" },
    item4_1_AText: { textAlign: "center" },
    item4_1_B: { width: "58%", backgroundColor: "#fff" },
    item4_1_BText: { textAlign: "left" },
    item4_1_C: { width: "15%", backgroundColor: "#fff" },
    item4_1_CText: { textAlign: "left" },

    item5: { height: "6%", backgroundColor: '#fff', flexDirection: 'row', paddingVertical:10 },
    item5_1: { width: "50%", backgroundColor: '#fff', alignItems: "flex-start", height: "100%" },
    item5_1Text: { fontFamily: "Montserrat-SemiBold", fontSize: 10, width: "30%", marginHorizontal: 15, marginVertical: 2, padding: 1 },
    item5_2: { width: "50%", backgroundColor: '#fff', alignItems: "flex-end", height: "100%" },
    item5_2Text: { fontFamily: "Montserrat-SemiBold", fontSize: 17, marginRight:"12%" },

    item6: { height: "50%", backgroundColor: '#fff', flexDirection: 'row', elevation: 10, justifyContent:"center", alignItems:"center" },
    item6_1: { width: "40%", backgroundColor: '#fff', justifyContent:"center", alignItems:"center" },
    item6_1Text: { fontFamily: 'Montserrat-Medium', fontSize: 18, padding: "15%", opacity:0.3 },
    item6_2: { width: "60%", backgroundColor: '#fff', flexDirection: "column", justifyContent: "center" },
    item6_2Text: { fontFamily: 'Montserrat-Medium', fontSize: 16, backgroundColor: "red", color: "white", padding: 3, width: "70%", textAlign: "center" },
    // item2:{flex:1},
    // item3:{flex:4}



})

export default Styles