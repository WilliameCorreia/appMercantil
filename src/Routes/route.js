import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Estabelecimento from '../pages/Estabelecimento/Estabelecimento'
import routeBottom from '../Routes/routeBottom'
import MyGetOutButton from '../Componentes/MyGetOutButton'
import Teste from '../pages/teste/teste'
import MyBackButton from '../Componentes/MyBackButton'
import MyHeader from '../Componentes/MyHeader'

const Stack = createStackNavigator();

function Route() {

    return (
        <Stack.Navigator
            initialRouteName={'Home'}
            headerMode={'screen'}
            screenOptions={{
                headerRight: ({ }) => {
                    return <MyGetOutButton />
                },
                headerStyle: { backgroundColor: '#B32728' },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    letterSpacing: 3
                },
                headerTitleAlign: 'center'
            }}>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerStyle: { backgroundColor: '#FF7223' }, headerRight:(() =>{})}}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                    options={{ headerStyle: { backgroundColor: '#B32728' }, headerRight:(() =>{})}}
            />
            <Stack.Screen
                name='Estabelecimento'
                component={Estabelecimento}
                options={{ headerStyle: { backgroundColor: '#B32728' }, headerRight:(() =>{})}}
            />
            <Stack.Screen
                name='MeusProdutos'
                options={{
                    title: 'Meus Produtos',
                }}
                component={routeBottom}
            />
            <Stack.Screen
                name='Teste'
                options={{
                    title: 'Teste',
                }}
                component={Teste}
            />
        </Stack.Navigator>
    )
}

export default Route

/* function sair() {
      auth()
          .signOut()
          .then(() => Alert.alert('User signed out!'));
  }

  if (initializing) return null;

  if (!user) {
      return (
          <View>
              <Text>Login</Text>
          </View>
      );
  }

  if(user){
      return (
          <View>
              <Text>Welcome {user.email}</Text>
              <TouchableHighlight onPress={() => sair()}>
                  <Text>sair</Text>
              </TouchableHighlight>
          </View>
      );
  }
   */
