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

/* useEffect(() => {
    const subscriber = auth().onUserChanged(SignIn);
    return subscriber; // unsubscribe on unmount
}, []);
 */
/* export function onAuthStateChanged(user) {
    setTimeout(function () {
        //verifica se o usuario existe
        if (user) {
            let { uid } = user
            database().ref('/Estabelecimento/' + uid).once('value').then(snapshot => {
                console.log(snapshot.exists())
                if (snapshot.exists()) {
                    //navigation.navigate('InicioDashBoard')
                    //if (initializing) setInitializing(false);
                } else {
                    //navigation.navigate('Estabelecimento', token={uid})
                    //if (initializing) setInitializing(false);
                }
            })
        } else {
            SetRouteName('Home')
            Setloading(false)
            console.log(loading)
        }
    }, 5000)
} */