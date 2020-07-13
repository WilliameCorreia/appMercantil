import { StyleSheet } from "react-native"


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    box1: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#B32728"
    },
    box2: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding:"5%"
    },
    img: {
        width: 120,
        height: 120,
    },

    item1: { flexDirection: 'row', padding: "7%", paddingTop: 0, paddingBottom: "2%" },
    item1_1: { width: "100%", backgroundColor: "#fff" },
    item1_1Text: { fontFamily: "Montserrat-Medium", fontSize: 18, color: "#B32728" },

    item2: { height: "8%", flexDirection: 'row', paddingTop: 0, marginLeft: "5%", marginBottom: "4%" },
    item2_1: { width: "100%", backgroundColor: "#fff", paddingLeft: "2%" },
    item2_1Input: { elevation:10, backgroundColor:"#fff", textAlign: "center", borderRadius: 25, width: "90%", fontSize: 13, fontFamily: "Montserrat-light", borderColor: "#b4b4b4" },

    item3: { flexDirection: 'row', padding: "7%", paddingTop: 0, paddingBottom: "2%" },
    item3_1: { width: "100%", backgroundColor: "#fff" },
    item3_1Text: { fontFamily: "Montserrat-Medium", fontSize: 18, color: "#B32728" },

    item4: { height: "8%", flexDirection: 'row', paddingTop: 0, marginLeft: "5%", marginBottom: "4%" },
    item4_1: { width: "100%", backgroundColor: "#fff", paddingLeft: "2%" },
    item4_1Input: { elevation:10, backgroundColor:"#fff", textAlign: "center", borderRadius: 25, width: "90%", fontSize: 13, fontFamily: "Montserrat-light", borderColor: "#b4b4b4" },
})

export default Styles