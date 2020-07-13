import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: "4%"},
    box1: { height: "75%", backgroundColor: '#fff', elevation: 10, marginBottom:"10%" },
    box2: { height: "20%", marginTop: "4%"},

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

    item2: { flexDirection: 'row', padding:"7%", paddingTop:"5%", borderTopWidth:0.3, paddingBottom:"2%"},
    item2_1: { width: "60%", backgroundColor: "#fff"},    
    item2_1Text: { fontFamily: "Montserrat-Medium", fontSize:15},    
    item2_2: { width: "45%", backgroundColor: "#fff" },
    item2_2Text: { fontFamily: "Montserrat-Medium", fontSize:15},

    item3: { height: "8%", flexDirection: 'row', paddingTop:0, marginLeft:"5%", marginBottom:"4%"},
    item3_1: { width: "50%", backgroundColor: "#fff", marginLeft:"2%"},    
    item3_1Input: { textAlign:"center", borderWidth:3, borderColor: "#b4b4b4", borderRadius:25, width:"65%", fontSize:13, fontFamily:"Montserrat-light", borderColor: "#b4b4b4"},    
    item3_2: { width: "35%", backgroundColor: "#fff", marginLeft:"5%" },
    item3_2Input: { textAlign:"center", borderWidth:3, borderColor: "#b4b4b4", borderRadius:25, width:"95%", fontSize:13, fontFamily:"Montserrat-light", borderColor: "#b4b4b4"},
    
    item4: { flexDirection: 'row', padding:"7%", paddingTop:0, paddingBottom:"2%"},
    item4_1: { width: "60%", backgroundColor: "#fff"},    
    item4_1Text: { fontFamily: "Montserrat-Medium", fontSize:15},    
    
    item5: { height: "8%", flexDirection: 'row', paddingTop:0, marginLeft:"5%", marginBottom:"4%"},
    item5_1: { width: "100%", backgroundColor: "#fff", paddingLeft:"2%"},    
    item5_1Input: { textAlign:"center", borderWidth:3, borderColor: "#b4b4b4", borderRadius:25, width:"90%", fontSize:13, fontFamily:"Montserrat-light", borderColor: "#b4b4b4"},    
    
    item6: { flexDirection: 'row', padding:"7%", paddingTop:0, paddingBottom:"2%"},
    item6_1: { width: "60%", backgroundColor: "#fff"},    
    item6_1Text: { fontFamily: "Montserrat-Medium", fontSize:15},    
    
    item7: { height: "8%", flexDirection: 'row', paddingTop:0, marginLeft:"5%", marginBottom:"4%"},
    item7_1: { width: "100%", backgroundColor: "#fff", paddingLeft:"2%"},    
    item7_1Input: { textAlign:"center", borderWidth:3, borderColor: "#b4b4b4", borderRadius:25, width:"90%", fontSize:13, fontFamily:"Montserrat-light", borderColor: "#b4b4b4"},    


    item8: { height: "8%", flexDirection: 'row', marginTop:"10%" },
    item8_1: { width: "100%", backgroundColor: "#fff", alignItems:"center"},    
    item8_1Text: { borderRadius:25, width:"60%", backgroundColor:"#9C3F3A", textAlign:"center", padding:"2%", fontSize:16, fontFamily:"Montserrat-SemiBold", color:"white"},    
    
    
    // item4: { height: "35%", flexDirection: 'column', paddingLeft: "5%" },
    // item4_1: { height: "25%", flexDirection: "row", marginTop: 4 },
    // item4_1_A: { width: "20%", backgroundColor: "#fff", marginRight: "3%" },
    // item4_1_AText: { textAlign: "center" },
    // item4_1_B: { width: "58%", backgroundColor: "#fff" },
    // item4_1_BText: { textAlign: "left" },
    // item4_1_C: { width: "10%", backgroundColor: "#fff" },
    // item4_1_CText: { textAlign: "left" },

    // item5: { height: "6%", backgroundColor: '#fff', flexDirection: 'row', paddingVertical: 10 },
    // item5_1: { width: "50%", backgroundColor: '#fff', alignItems: "flex-start", height: "100%" },
    // item5_1Text: { fontFamily: "Montserrat-SemiBold", fontSize: 10, width: "30%", marginHorizontal: 15, marginVertical: 2, padding: 1 },
    // item5_2: { width: "50%", backgroundColor: '#fff', alignItems: "flex-end", height: "100%" },
    // item5_2Text: { fontFamily: "Montserrat-SemiBold", fontSize: 17, marginRight: "12%" },

    item9: { height: "60%", elevation: 10, backgroundColor: "#fff", padding:10, alignItems:"center", justifyContent:"center" },
    item9_1: { width: "90%", height:"90%", backgroundColor:"#ff0000", alignItems:"center", justifyContent:"center"},
    item9_1Text: { fontFamily: 'Montserrat-Medium', fontSize: 22, textAlign:"center", color:"white" }


})

export default Styles