import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Estabelecimento from '../pages/Estabelecimento/Estabelecimento'
import MyHeader from '../Componentes/MyHeader'
import MeusPedidos from '../pages/MeusPedidos/MeusPedidos'
import MeusProdutos from '../pages/MeusProdutos/MeusProdutos'
import Ofertas from '../pages/MinhasOfertas/MinhasOfertas'
import NewOfertas from '../pages/NewOferta/NewOferta'
import NewProduto from '../pages/NewProduto/NewProduto'
import RouteDrawer from '../Routes/routeDrawer'
import Produto from '../pages/Produto/Produto'

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
                            null
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
                component={RouteDrawer}
            />
            <Stack.Screen
                name={'MeusPedidos'}
                component={MeusPedidos}
                options={{ headerStyle: { backgroundColor: '#B32728' }, headerRight: (() => { }) }}
           />
           <Stack.Screen
                name={'MeusProdutos'}
                component={MeusProdutos}
                options={{ title:'MEUS PRODUTOS', headerStyle: { backgroundColor: '#B32728' }, headerRight: (() => { }) }}
           />
           <Stack.Screen
                name={'Ofertas'}
                component={Ofertas}
                options={{ headerStyle: { backgroundColor: '#B32728' }, headerRight: (() => { }) }}
           />
           <Stack.Screen
                name={'NewOfertas'}
                component={NewOfertas}
                options={{ headerStyle: { backgroundColor: '#B32728' }, headerRight: (() => { }) }}
           />
           <Stack.Screen
                name={'NovoProduto'}
                component={NewProduto}
                options={{ headerStyle: { backgroundColor: '#B32728' }, headerRight: (() => { }) }}
           />
           <Stack.Screen
                name={'Produto'}
                component={Produto}
                options={{ headerStyle: { backgroundColor: '#B32728' }, headerRight: (() => { }) }}
           />
        </Stack.Navigator>
    )
}

export default Route
