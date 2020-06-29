import {StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Styles = StyleSheet.create({
    container:{ flex:1, flexDirection:"column" },
    bordado:{borderWidth:windowWidth/100000 * 47, borderColor:'black', 
        marginTop:windowHeight/10000 * 300, 
        marginHorizontal:windowWidth/10000 * 700,
        padding:windowWidth/10000 * 300
    },
    status:{backgroundColor:"blue", color:"white", 
        paddingLeft:windowWidth/10000 * 600,
        paddingRight:windowWidth/10000 * 900, 
        paddingTop:windowHeight/10000 *70,
        marginTop:windowHeight/10000 *70
    },
    box1:{justifyContent:"space-between", flexDirection:"row"},
    textPequeno:{fontSize:windowWidth/28},
    textGrande:{fontSize:windowWidth/18},
    cinza:{color:"#999999"}

})

export default Styles