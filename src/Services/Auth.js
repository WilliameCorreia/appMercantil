import auth from '@react-native-firebase/auth'
//import database from '@react-native-firebase/database';

export async function SignIn(user){

    const teste = auth().currentUser

    return teste
    /* return new Promise(resolve =>{
        setTimeout(() =>{
            resolve({
                user: {
                    nome: 'williame',
                    email: 'williame_lima@hotmail.com'
                },
                token: 'asdfasdfasfrçotqwujrtqp~wioer[qwerkqw~erçlk',
            })
        }, 2000)
    }) */

}

/* export function getCategoria(){

    const categorias = [
        { "foto_Png": "acougue.png", "nome": "AÇOUGUE", "nomeBusca": "ACOUGUE" },
        { "foto_Png": "autos.png", "nome": "AUTOS", "nomeBusca": "AUTOS" },
        { "foto_Png": "bazar.png", "nome": "BAZAR", "nomeBusca": "BAZAR" },
        { "foto_Png": "bebidas.png", "nome": "BEBÊ", "nomeBusca": "BEBE" },
        { "foto_Png": "cereais.png", "nome": "BEBIDAS", "nomeBusca": "BEBIDAS" },
        { "foto_Png": "congelados.png", "nome": "CONGELADOS", "nomeBusca": "CONGELADOS"},
        { "foto_Png": "eletro.png", "nome": "ELETRO", "nomeBusca": "ELETRO"},
        { "foto_Png": "frios.png", "nome": "FRIOS E LATICÍNIOS", "nomeBusca": "FRIOS E LATICINIOS"},
        { "foto_Png": "higiene.png", "nome": "HIGIENE E BELEZA", "nomeBusca": "HIGIENE E BELEZA"},
        { "foto_Png": "hortifruti.png", "nome": "HORTIFRUTI", "nomeBusca": "HORTIFRUTI"},
        { "foto_Png": "limpeza.png", "nome": "LIMPEZA", "nomeBusca": "LIMPEZA"},
        { "foto_Png": "mercearia.png", "nome": "MERCEARIA", "nomeBusca": "MERCEARIA"},
        { "foto_Png": "padaria.png", "nome": "PADARIA", "nomeBusca": "PADARIA"},
        { "foto_Png": "papelaria.png", "nome": "PAPELARIA", "nomeBusca": "PAPELARIA"},
        { "foto_Png": "perfumaria.png", "nome": "PERFUMARIA", "nomeBusca": "PERFUMARIA"}
    ]
    return categorias
} */