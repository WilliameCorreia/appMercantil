import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eef0f3'
    },
    cards:{
        backgroundColor: '#ffff', 
        borderColor: '#9a9696',
        borderWidth: 3,
        borderRadius: 10,
        margin: 15,
        flexDirection: 'row',
        height: 160
    },
    box1:{
        flex: 3,
        padding: 10,
        justifyContent: 'center',
    },
    box2:{
        flex: 1,
        alignItems:'center', 
        justifyContent: 'center',
    },
    prodImg:{
        height: 90,
        width: 80,
        marginBottom: 5
    },
    nomeProduto:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    texto:{
        fontSize:16,
        letterSpacing: 2
    },
    dispon:{
        backgroundColor: '#469b19',
        padding: 10,
        borderRadius: 30
    },
    active:{
        justifyContent: 'center',
        marginTop: 250
    }

})

export default styles