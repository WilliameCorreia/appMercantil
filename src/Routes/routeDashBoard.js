import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthContext from '../Contexts/Auth'

import MeusPedidos from '../pages/MeusPedidos/MeusPedidos'
import DetalhePedidos from '../pages/MeusPedidos/DetalhePedidos/DetalhePedidos'
import MeusProdutos from '../pages/MeusProdutos/MeusProdutos'
import Ofertas from '../pages/MinhasOfertas/MinhasOfertas'
//import DetalheOfertas from '../pages/MinhasOfertas/DetalheOfertas/DetalheOfertas'
import NewOfertas from '../pages/NewOferta/NewOferta'
import NewProduto from '../pages/NewProduto/NewProduto'
import Produto from '../pages/Produto/Produto'
import HeaderDashBoard from '../Componentes/HeaderDashBoard'
import MyBackButton from '../Componentes/MyBackButton'
import MyDrawerOpen from '../Componentes/MyDrawerOpen'
import { DrawerActions } from '@react-navigation/native'
import DashBoard from '../pages/DashBoard/DashBoard'
import Categorias from '../pages/Categorias/Categorias'
import Mycamera from '../Componentes/MyCamera'
import Estabelecimento from '../pages/Estabelecimento/Estabelecimento'

const Stack = createStackNavigator();


function RouteDashBoard() {

    const { estabelecimento } = useContext(AuthContext);

    console.log("")
    console.log(estabelecimento)

    return (

        estabelecimento ?

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

                        return (
                            <HeaderDashBoard
                                title={title}
                                color={backColor}
                                leftButton={<MyDrawerOpen
                                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />}
                                rightButton={_rightbutton === 'DashBoard' ? null : <MyBackButton onPress={() => navigation.goBack()} />}
                            />
                        )
                    }
                }}>

                <Stack.Screen
                    name='DashBoard'
                    options={{
                        title: 'PLANETA ENTREGAS',
                        headerStyle: { backgroundColor: '#B32728' }
                    }}
                    component={DashBoard}
                />
                <Stack.Screen
                    name={'MeusPedidos'}
                    component={MeusPedidos}
                    options={{
                        title: 'MEUS PEDIDOS',
                        headerStyle: { backgroundColor: '#B32728' }
                    }}
                />
                <Stack.Screen
                    name={'DetalhePedidos'}
                    component={DetalhePedidos}
                    options={{
                        title: 'Detalhe Pedidos',
                        headerStyle: { backgroundColor: '#B32728' }
                    }}
                />
                <Stack.Screen
                    name={'MeusProdutos'}
                    component={MeusProdutos}
                    options={{ title: 'MEUS PRODUTOS', headerStyle: { backgroundColor: '#B32728' } }}
                />
                <Stack.Screen
                    name={'Ofertas'}
                    component={Ofertas}
                    options={{ title: 'OFERTAS', headerStyle: { backgroundColor: '#B32728' } }}
                />
                <Stack.Screen
                    name={'NewOfertas'}
                    component={NewOfertas}
                    options={{ title: 'NOVAS OFERTAS', headerStyle: { backgroundColor: '#B32728' } }}
                />
                <Stack.Screen
                    name={'NovoProduto'}
                    component={NewProduto}
                    options={{ title: 'NOVO PRODUTO', headerStyle: { backgroundColor: '#B32728' } }}
                />
                <Stack.Screen
                    name={'Produto'}
                    component={Produto}
                    options={{ title: 'PRODUTO', headerStyle: { backgroundColor: '#B32728' } }}
                />
                <Stack.Screen
                    name={'Categorias'}
                    component={Categorias}
                    options={{ title: 'CATEGORIAS', headerStyle: { backgroundColor: '#B32728' } }}
                />
                <Stack.Screen
                    name={'Mycamera'}
                    component={Mycamera}
                    options={{ title: 'CODIGO DE BARRAS', headerStyle: { backgroundColor: '#B32728' } }}
                />
            </Stack.Navigator>

            :

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

                        return (
                            <HeaderDashBoard
                                title={title}
                                color={backColor}
                                leftButton={<MyDrawerOpen
                                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />}
                            />
                        )
                    }
                }}>
                <Stack.Screen
                name='Estabelecimento'
                component={Estabelecimento}
                options={{ headerStyle: { backgroundColor: '#B32728' }, title:'ESTABELECIMENTO' }}
            />
            </Stack.Navigator>
    )
}

export default RouteDashBoard
