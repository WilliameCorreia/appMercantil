import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'

const Stack = createStackNavigator();

const route = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#f23132' },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
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
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default route
