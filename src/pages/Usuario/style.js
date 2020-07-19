import { StyleSheet, Dimensions } from "react-native"
const windowWidth = Dimensions.get('window').width / 100
const windowHeight = Dimensions.get('window').height / 100

const Styles = StyleSheet.create({

    container: {
       flex:1,
       backgroundColor:"#fff"
    },
    box1: {
        height: windowHeight * 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#B32728",
        elevation: 10
    },
    box2: { 
        height: windowHeight * 65, 
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding:"8%" 
    },
    box3: {
        backgroundColor:"#fff",
        marginTop:"6%",
        alignItems:"center",
        justifyContent:"center", 
        height: windowHeight *10, 
        flexDirection: 'column',
        padding:"8%" 
    },
    btnSalvar:{
        backgroundColor:"orange"
    },

    img: {
        width: 120,
        height: 120,
    },

    item: { 
        flexDirection: "column",
        marginBottom:"5%"
    },    
    itemText: { 
        fontFamily: "Montserrat-Medium", 
        fontSize: 15,
        color:"#B32728",
        marginBottom:"4%",
        marginLeft:"3%"
    },
    itemInput: {
        width:"100%",
        textAlign: "center",
        backgroundColor: "#fff",
        elevation: 10,
        borderRadius: 25,        
        fontSize: 13,
        fontFamily: "Montserrat-light",
        borderColor: "#b4b4b4"
    },
    ultimo:{marginBottom:"10%"},

    item8_1: { width: "100%", backgroundColor: "#fff", alignItems: "center" },
    item8_1Text: { borderRadius: 25, width: "60%", backgroundColor: "#9C3F3A", textAlign: "center", padding: "2%", fontSize: 16, fontFamily: "Montserrat-SemiBold", color: "white" },
})

export default Styles