import { StyleSheet} from 'react-native'

const styles = StyleSheet.create(
    {
        container: {flex: 1, backgroundColor: "#C0C0C0"},
        cabecario: {flex:1, justifyContent: "center", alignItems: "center",},
        form:{flex: 2, backgroundColor: "#ffffff", padding: 16},
        image: { width: 120, height: 120, margin: 10},
        inputs: { textAlign:"center" ,borderColor:"black", borderWidth: 1, marginBottom: 10, borderRadius: 25, },
        divisor: {flexDirection:"row",},
        content1: { flex:1, marginRight: 10},
        content2: {flex:1},
        text: {fontSize: 20, marginLeft: 12,},
        textBtn: {fontSize: 20, color:"#ffffff"},
        centralzador:{ justifyContent:"center", flexDirection: "row"},
        btnCriar:{backgroundColor:"#9c3f3A", padding: 8, 
            borderRadius: 25, alignItems: "center", width: 140 
            }
        
    }
)
export default styles
