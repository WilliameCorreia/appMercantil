import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import Estabelecimento from '../pages/Estabelecimento/Estabelecimento'
import MyHeader from '../Componentes/MyHeader'
import MyBackButton from '../Componentes/MyBackButton'
import DashBoard from '../pages/DashBoard/DashBoard'
import MeusPedidos from '../pages/MeusPedidos/MeusPedidos'
import MeusProdutos from '../pages/MeusProdutos/MeusProdutos'
import Ofertas from '../pages/NewOferta/NewOferta'
import NewOfertas from '../pages/NewOferta/NewOferta'
import NewProduto from '../pages/NewProduto/NewProduto'
import Produto from '../pages/Produto/Produto'
import Usuario from '../pages/Usuario/usuario'
import DrawerContent from '../Componentes/DrawerContent'
import HeaderDashBoard from '../Componentes/HeaderDashBoard'
import MyDrawerOpen from '../Componentes/MyDrawerOpen'
import { DrawerActions } from '@react-navigation/native';
import Categorias from '../pages/Categorias/Categorias'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function RouteDashBoard() {

    return (
        <Stack.Navigator
            initialRouteName={'DashBoard'}
            headerMode={'screen'}
            screenOptions={{
                header: ({ scene, previous, navigation }) => {
                    const { options } = scene.descriptor;
                    const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined
                        ? options.title : scene.route.name;
                    const backColor = options.headerStyle.backgroundColor

                    let _rightbutton = scene.route.name

                    return(
                        <HeaderDashBoard
                        title={title}
                        color={backColor}
                        leftButton={<MyDrawerOpen 
                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>}
                        rightButton={_rightbutton === 'DashBoard' ? null:  <MyBackButton onPress={() => navigation.goBack()}/>}
                    />
                    )
                }
            }}>
            <Stack.Screen
                name='DashBoard'
                options={{
                    title: 'Universo Entregas',
                    headerStyle: { backgroundColor: '#B32728' }
                }}
                component={DashBoard}
            />
            <Stack.Screen
                name={'MeusPedidos'}
                component={MeusPedidos}
                options={{ headerStyle: { backgroundColor: '#B32728' }}}
            />
            <Stack.Screen
                name={'MeusProdutos'}
                component={MeusProdutos}
                options={{ title: 'MEUS PRODUTOS', headerStyle: { backgroundColor: '#B32728' }}}
            />
            <Stack.Screen
                name={'Ofertas'}
                component={Ofertas}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
            <Stack.Screen
                name={'NewOfertas'}
                component={NewOfertas}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
            <Stack.Screen
                name={'NovoProduto'}
                component={NewProduto}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
            <Stack.Screen
                name={'Produto'}
                component={Produto}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
            <Stack.Screen
                name={'Categorias'}
                component={Categorias}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
        </Stack.Navigator>
    )
}

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
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerStyle: { backgroundColor: '#FF7223' } }}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerStyle: { backgroundColor: '#F23132' } }}
            />
            <Stack.Screen
                name='Estabelecimento'
                component={Estabelecimento}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
        </Stack.Navigator>
    )
}

function RouteDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName={'Inicio'}
            drawerStyle={{backgroundColor: '#B32728'}}
            drawerContent={({navigation}) => <DrawerContent navigation={navigation}/>}
        >
            <Drawer.Screen 
                name="InicioDashBoard" 
                component={RouteDashBoard}
                options={{tabBarLabel: 'teste'}}
            />
            <Drawer.Screen 
                name="Inicio" 
                component={Route}
                options={{swipeEnabled:false}}
            />
        </Drawer.Navigator>
    );
}



export default RouteDrawer
