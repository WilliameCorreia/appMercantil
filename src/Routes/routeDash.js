import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MeusPedidos from '../pages/MeusPedidos/MeusPedidos'
import DashBoard from '../pages/DashBoard/DashBoard'

const Stack = createStackNavigator(); 

export default function routeDash() {
    return (
       <Stack.Navigator>
           <Stack.Screen
                name={'DashBoard'}
                component={DashBoard}
           />
           <Stack.Screen
                name={'MeusPedidos'}
                component={MeusPedidos}
           />
       </Stack.Navigator>
    )
}
