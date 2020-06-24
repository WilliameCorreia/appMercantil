import {StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Styles = StyleSheet.create({
    container:{ flex:1 },
    text:{ fontSize:windowWidth / 100 * 6, },
    colorLabelProduto:{ color:"#b2b2b2", },
    colorBtnAlterar:{ backgroundColor:"#b32728", color:"white"},
    colorPreto:{ color:"black", },

    colorBranco:{ color:"white", fontSize:windowWidth / 100 * 4,
        marginTop:3, paddingHorizontal:37, },

    margin:{ margin: 20,},

    fontSizeLabel:{ fontSize: windowHeight / 100 * 3 },
    espacamentolabel1:{ marginLeft:28, marginTop:5},
    espacamentolabel2:{ marginRight:100, marginTop:5 },

    espacamentoInput1:{ marginLeft:16, marginTop:5},
    espacamentoInput2:{ marginRight:16, marginTop:5},

    paddingHorizontal:{ paddingHorizontal: 0, },
    paddingVertical:{ paddingVertical: 2,},

    box1:{ flex:3, margin:15 },

    colum:{ flexDirection:"column" },
    box2:{ flex:1 },
    bordado:{ borderColor:"black", borderWidth:1 },
    bordadoTop:{ borderColor:"#b2b2b2", borderTopWidth:1 },
    button:{ backgroundColor:"#ff0000", marginTop:9,
        marginRight:100 },
    row:{ flexDirection:"row" },
    cadaNoSeuLado:{ justifyContent:"space-between" },
    alignCenter:{ justifyContent:"center" },
    tamanhoInputMetade:{ width:windowWidth /10 * 4 },
    tamanhoInputFull:{ width:windowWidth /100 * 85 },
    inputs: { textAlign:"center" ,borderColor:"black", 
        borderWidth: 1, marginBottom: 10, borderRadius: 25 },


})

export default Styles