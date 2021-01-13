import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Styles = StyleSheet.create({
    container: { flex: 1, flexDirection: "column" },
    box1: {
        elevation: 8, backgroundColor: "#fff", padding: "5%",
        flexDirection:"row", height:windowHeight/100 *12, marginHorizontal:"4%", marginVertical:"4%"
    },
    box1_1: { flexDirection: "column", width: "50%", justifyContent:"center" },
    box1_1Text: { fontFamily:"Montserrat-Medium", fontSize:19, paddingLeft:"3%" },
    box1_1TextPedido: { fontFamily:"Montserrat-Medium", fontSize:14, paddingLeft:"3%" },
    box1_2: { flexDirection: "column", width: "70%", alignItems:"center", justifyContent:"center" },
    box1_2Img: { width:"30%", height:"120%", paddingVertical:"2%", marginLeft:"5%" },
    

})

export default Styles