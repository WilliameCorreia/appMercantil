import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Estabelecimento from '../pages/Estabelecimento/Estabelecimento'
import routeBottom from '../Routes/routeBottom'
import MyHeader from '../Componentes/MyHeader'
import HeaderDashBoard from '../Componentes/HeaderDashBoard'
import MeusPedidos from '../pages/MeusPedidos/MeusPedidos'

const Stack = createStackNavigator();

function Route() {

    return (
        <Stack.Navigator
            initialRouteName={'Home'}
            headerMode={'screen'}
            screenOptions={{
                header: ({ scene, previous, navigation }) => {
                    const { options } = scene.descriptor;
                    const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined
                        ? options.title : scene.route.name;
                    const backColor = options.headerStyle.backgroundColor
                    if (title === 'Universo Entregas') {
                        return (
                            <HeaderDashBoard title={title} color={backColor} />
                        )
                    } else {
                        return (
                            <MyHeader title={title} color={backColor} />
                        );
                    }
                }
            }}>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerStyle: { backgroundColor: '#FF7223' }, headerRight: (() => { }) }}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerStyle: { backgroundColor: '#F23132' }, headerRight: (() => { }) }}
            />
            <Stack.Screen
                name='Estabelecimento'
                component={Estabelecimento}
                options={{ headerStyle: { backgroundColor: '#B32728' }, headerRight: (() => { }) }}
            />
            <Stack.Screen
                name='DashBoard'
                options={{
                    title: 'Universo Entregas',
                    headerStyle: { backgroundColor: '#B32728' }
                }}
                component={routeBottom}
            />
            <Stack.Screen
                name={'MeusPedidos'}
                component={MeusPedidos}
                options={{ headerStyle: { backgroundColor: '#B32728' }, headerRight: (() => { }) }}
           />
        </Stack.Navigator>
    )
}

export default Route
