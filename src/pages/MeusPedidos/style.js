import {StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Styles = StyleSheet.create({
    container:{ flex:1, flexDirection:"column" },
    item:{ elevation:8, backgroundColor:"#fff", marginHorizontal:"5%", marginVertical:"5%", padding:"5%"},
    
    status:{
        backgroundColor:"blue", 
        color:"white", 
        padding: "2%"
        // paddingLeft:windowWidth/10000 * 600,
        // paddingRight:windowWidth/10000 * 900, 
        // paddingTop:windowHeight/10000 *70,
        // marginTop:windowHeight/10000 *70
    },
    box1:{
        justifyContent:"space-between", 
        flexDirection:"row"
    },
    textPequeno:{fontSize:windowWidth/28, fontFamily: 'Montserrat-SemiBold', fontWeight: '600'},
    textGrande:{fontSize: windowWidth/100 *5, fontFamily: 'Montserrat-SemiBold', fontWeight: '600'},
    cinza:{color:"#999999"}

})

export default Styles