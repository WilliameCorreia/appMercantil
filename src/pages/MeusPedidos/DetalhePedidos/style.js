import {StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Styles = StyleSheet.create({
    container:{ flex:1, backgroundColor:'#fff', padding:"4%" },
    box1:{height:"68%", backgroundColor:'red'},
    box2:{height:"28%", backgroundColor:'#fff', marginTop:"4%"},

    item1:{height:"20%", backgroundColor:'yellow', flexDirection:'row'},
    item1_1:{ width:"50%", backgroundColor:"pink"},
    item1_2:{backgroundColor:"purple"},

    item2:{height:"20%", backgroundColor:'blue', flexDirection:'row'},
    item2_1:{width:"10%", backgroundColor:"purple"},
    item2_2:{width:"90%", backgroundColor:"red"},
    
    item3:{height:"7%", backgroundColor:'grey', flexDirection:'row'},
    item3_1:{width:"20%", backgroundColor:"green"},
    item3_2:{width:"60%", backgroundColor:"blue"},
    item3_3:{width:"20%", backgroundColor:"green"},
    
    item4:{height:"43%", flexDirection:'column'},
    item4_1:{height:"10%", flexDirection:"row", marginTop:4 },
    item4_1_A:{width:"20%", backgroundColor:"brown"},
    item4_1_B:{width:"60%", backgroundColor:"pink"},
    item4_1_C:{width:"20%", backgroundColor:"black"},
   

    item6:{height:"50%", backgroundColor:'yellow'},
    // item2:{flex:1},
    // item3:{flex:4}

    
    
})

export default Styles