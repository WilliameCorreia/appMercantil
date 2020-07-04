import {StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width

const Styles = StyleSheet.create({

    container:{ flex:1 },

    text:{ 
        fontSize: 20, 
        textAlign: 'left',
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600'
    },

    colorLabelProduto:{ color:"#999999" },
    
    colorPreto:{ color:"black", },

    btnTop:{ backgroundColor:"#ff0000", paddingVertical: 5, paddingHorizontal: 10 },

    btnStatus:{ backgroundColor:"#ff0000", },
    
    colorBranco:{ color:"white" },

    BtnEncerrarText:{ 
        fontSize: 20, 
        paddingHorizontal:40, 
        paddingVertical:2, 
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600'
    },
    
    margin:{ margin: 20},
    
    espacamentolabel1:{ marginLeft:16, marginTop:5},
    espacamentolabel2:{ marginRight:110, marginTop:5 },
    
    espacamentoInput1:{ marginLeft:16, marginTop:5},
    espacamentoInput2:{ marginRight:16, marginTop:5},
    
    paddingHorizontal:{ paddingHorizontal: 0, },
    paddingVertical:{ paddingVertical: 2,},
    
    box1:{ flex:5, margin:15, elevation: 3, backgroundColor: '#fff' },
    
    colum:{ flexDirection:"column" },
    
    box2:{ flex:1, marginHorizontal:15, marginBottom:8, elevation: 3, backgroundColor: '#fff' },
    
    bordadoTop:{ borderColor:"#999999", borderTopWidth: 1 },

    BtnAlterar:{ 
        backgroundColor:"#B32728", 
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    row:{flexDirection:"row" },
    
    cadaNoSeuLado:{ justifyContent:"space-between" },
    
    alignCenter:{ justifyContent:"center" },
    
    tamanhoInputMetade:{ 
        width:windowWidth /10 * 4,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600' 
    },
    
    tamanhoInputFull:{ 
        width:windowWidth /100 * 85,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600'
    },
    
    inputs: { 
        textAlign:"center",
        borderColor:"#d0d0d0", 
        borderWidth: 4, 
        marginBottom: 3, 
        borderRadius: 25,
        fontSize: 20
    },
    metadeTop1:{
        flex: 2,
        padding: 10,
    },
    metadeTop2:{
        flex: 1.5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    metadeBotton1:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    metadeBotton2:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStatus:{
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600'
    }
})

export default Styles