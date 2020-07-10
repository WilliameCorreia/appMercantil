import {StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Styles = StyleSheet.create({
    container:{ flex:1, backgroundColor:'#fff', padding:"4%" },
    box1:{height:"68%", backgroundColor:'red', elevation:10},
    box2:{height:"28%", backgroundColor:'#fff', marginTop:"4%"},

    item1:{height:"20%", flexDirection:'row'},
    item1_1:{ width:"50%", backgroundColor:"#fff"},
    textCliente:{fontFamily:'Montserrat-Medium', fontSize:20, padding:10},
    textPedido:{fontFamily:'Montserrat-Medium', fontSize:16, marginLeft:10},
    item1_2:{width:"50%", backgroundColor:'#fff', flexDirection:"column", justifyContent:"center"},
    StatusPedidoP:{backgroundColor:"red", width:"85%", textAlign:"center", color:"white", marginBottom:15},

    item2:{height:"20%", backgroundColor:'blue', flexDirection:'row'},
    item2_1:{width:"10%", backgroundColor:"#fff"},
    ImgLoction:{width:"60%", height:"40%", marginTop:15, marginLeft:10},
    item2_2:{width:"90%", backgroundColor:"#fff"},
    TextEndereco:{fontFamily:"Montserrat-Light", fontSize:13, width:'80%', padding:8, paddingBottom:0},
    TextTelefone:{fontFamily:"Montserrat-Light", fontSize:13, width:'80%', paddingLeft:8},
    
    item3:{height:"7%", flexDirection:'row'},
    item3_1:{width:"20%", backgroundColor:"#fff"},
    TextHeader:{fontFamily:"Montserrat-SemiBold", textAlign:"center"},
    item3_2:{width:"60%", backgroundColor:"#fff"},
    item3_3:{width:"20%", backgroundColor:"#fff"},
    
    item4:{height:"43%", flexDirection:'column'},
    item4_1:{height:"10%", flexDirection:"row", marginTop:4 },
    item4_1_A:{width:"20%", backgroundColor:"brown"},
    item4_1_B:{width:"60%", backgroundColor:"pink"},
    item4_1_C:{width:"20%", backgroundColor:"black"},
   

    item6:{height:"50%", backgroundColor:'yellow', flexDirection:'row', elevation:2},
    item6_1:{width:"50%", backgroundColor:'#fff'},
    item6_1Text:{fontFamily:'Montserrat-Medium', fontSize:18, padding:30},
    item6_2:{width:"50%", backgroundColor:'#fff', flexDirection:"column", justifyContent:"center"},
    item6_2Text:{fontFamily:'Montserrat-Medium', fontSize:16, backgroundColor:"red", color:"white", padding:3, width:"70%", textAlign:"center"},
    // item2:{flex:1},
    // item3:{flex:4}

    
    
})

export default Styles