import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Estabelecimento from '../pages/Estabelecimento/Estabelecimento'
import MyHeader from '../Componentes/MyHeader'
import MyBackButton from '../Componentes/MyBackButton'

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
                    console.log(backColor)
                    return (
                        <MyHeader
                            title={title}
                            color={backColor}
                            leftButton={<MyBackButton onPress={() => navigation.goBack()} />}
                        />
                    )
                }
            }}>
            <Stack.Screen
                name='Home'
                component={Home}
                initialParams={{loading: false}}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerStyle: { backgroundColor: '#FF7223' }, title: 'LOGIN' }}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerStyle: { backgroundColor: '#F23132' }, title: 'CADASTRO' }}
            />
            <Stack.Screen
                name='Estabelecimento'
                component={Estabelecimento}
                options={{ headerStyle: { backgroundColor: '#B32728' }, title:'ESTABELECIMENTO' }}
            />
        </Stack.Navigator>
    )
}

export default Route
