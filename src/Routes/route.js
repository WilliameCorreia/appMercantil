import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Estabelecimento from '../pages/Estabelecimento/Estabelecimento'
import routeBottom from '../Routes/routeBottom'

const Stack = createStackNavigator();

const route = () => {
    return (
        <Stack.Navigator
            headerMode={'screen'}
            screenOptions={{
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
                options={{ headerStyle: { backgroundColor: '#FF7223' } }}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
             <Stack.Screen
                name='Estabelecimento'
                component={Estabelecimento}
            />
             <Stack.Screen
                name='MeusProdutos'
                options={{
                    title: 'Meus Produtos',
                  }}
                component={routeBottom}
            />
        </Stack.Navigator>
    )
}

export default route
