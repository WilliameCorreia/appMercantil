import {StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Styles = StyleSheet.create({
    container:{ flex:1 },
    text:{ fontSize:windowWidth / 100 * 6, },
    colorLabelProduto:{ color:"#b2b2b2", },
    
    colorPreto:{ color:"black", },

    colorVermelho:{ backgroundColor:"#ff0000", },
    
    colorBranco:{ color:"white" },
    
    BtnStatusText:{ marginTop:3, paddingHorizontal:37,},

    BtnEncerrarText:{ fontSize:windowWidth / 100 * 7, paddingHorizontal:40, paddingVertical:2},

    BtnFont:{ fontSize:windowWidth / 100 * 4,},
    
    margin:{ margin: 20,},
    
    fontSizeLabel:{ fontSize: windowHeight / 100 * 3 },
    
    espacamentolabel1:{ marginLeft:16, marginTop:5},
    espacamentolabel2:{ marginRight:110, marginTop:5 },
    
    espacamentoInput1:{ marginLeft:16, marginTop:5},
    espacamentoInput2:{ marginRight:16, marginTop:5},
    
    paddingHorizontal:{ paddingHorizontal: 0, },
    paddingVertical:{ paddingVertical: 2,},
    
    box1:{ flex:5, margin:15 },
    
    colum:{ flexDirection:"column" },
    
    box2:{ flex:1, marginHorizontal:15, marginBottom:8 },
    
    bordado:{ borderColor:"black", borderWidth:0.3 },
    
    bordadoTop:{ borderColor:"#b2b2b2", borderTopWidth:0.2 },

    BtnAlterar:{ backgroundColor:"#9C3F3A", 
        paddingHorizontal:windowWidth / 10 *2, 
        paddingVertical:windowHeight/1000 * 13,
        borderRadius:25,
    },
    
    btnStatus:{ marginTop:9, marginRight:100 },
    
    row:{ flexDirection:"row" },
    
    cadaNoSeuLado:{ justifyContent:"space-between" },
    
    alignCenter:{ justifyContent:"center" },
    
    tamanhoInputMetade:{ width:windowWidth /10 * 4 },
    
    tamanhoInputFull:{ width:windowWidth /100 * 85 },
    
    inputs: { textAlign:"center" ,borderColor:"#d0d0d0", 
    borderWidth: 4, marginBottom: 3, borderRadius: 25 },
    
    
})

export default Styles