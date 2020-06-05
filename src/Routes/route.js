import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const route = () => {
    return (

        <View>
            <Text>Route</Text>
        </View>
       /*  <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#f23132' },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen
                name='Home'
                component={}
                options={{ title: '' }}
            />

            <Stack.Screen
                name='Login'
                component={}
                options={{ title: '' }}
            />

            <Stack.Screen
                name='Cadastro'
                component={}
                options={{ title: '' }}
            />

            <Stack.Screen
                name='Home'
                component={}
                options={{ title: '' }}
            />

        </Stack.Navigator> */
    )
}

export default route
