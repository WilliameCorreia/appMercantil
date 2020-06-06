import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Estabelecimento from '../pages/Estabelecimento/Estabelecimento'

const Stack = createStackNavigator();

const route = () => {
    return (
        <Stack.Navigator
            headerMode={'screen'}
            screenOptions={{
                headerStyle: { backgroundColor: '#9C3F3A' },
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
        </Stack.Navigator>
    )
}

export default route
