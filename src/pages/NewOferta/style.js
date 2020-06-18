import {StyleSheet, Dimensions} from 'react-native'

const Styles = StyleSheet.create({
    container:{       
        flex:1
    },
    text:{       
        fontSize:20,
    },
    margin:{
        margin: 5,
    },
    box1:{        
        flex:2,
        margin:15,
        flexDirection:"row",
        justifyContent:"space-between",        
    },
    box2:{        
        flex:1,
    },
    bordado:{
        borderColor:"black",
        borderWidth:1,
    },
    button:{
        backgroundColor:"red",
        paddingHorizontal:50,
    }


})

export default Styles