import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { Image } from 'react-native'

import MeusProdutos from '../pages/MeusProdutos/MeusProdutos'
import MeusPedidos from '../pages/MeusPedidos/MeusPedidos'
import NewOferta from '../pages/NewOferta/NewOferta'
import NewProduto from '../pages/NewProduto/NewProduto'

const Tab = createBottomTabNavigator();

function routeBottom() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size}) => {
                    size = 50
                    switch (route.name) {
                        case 'Produtos':
                            return <Image source={require('../Assets/meusProdutos.png')} style={{ width: size, height: size, }}/> 
                            break;
                        case 'Pedidos':
                            return <Image source={require('../Assets/meusPedidos.png')} style={{ width: size, height: size }}/> 
                            break;
                        case 'Nova Oferta':
                            return <Image source={require('../Assets/Ofertas.png')} style={{ width: size, height: size }}/> 
                            break;
                        case 'Novo Produto':
                            return <Image source={require('../Assets/novoProduto.png')} style={{ width: size, height: size }}/> 
                            break;
                        default:
                            //return <Image source={require('../Assets/7.png')} style={{ width: size, height: size }}/>
                            break;
                    }
                }
            })}
            initialRouteName='MeusProdutos'
            tabBarOptions={{
                activeTintColor: '#ffff',
                inactiveTintColor: 'black',
                activeBackgroundColor: '#F23132',
                inactiveBackgroundColor: '#B32728',
                showLabel: false,
                labelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold'
                },
                style:{
                    height: 70
                },
                tabStyle: {
                    alignItems: "center",
                    justifyContent: "center",
                }
            }}
        >
            <Tab.Screen
                name="Produtos"
                component={MeusProdutos}
            />
            <Tab.Screen
                name="Pedidos"
                component={MeusPedidos}
            />
            <Tab.Screen
                name="Nova Oferta"
                component={NewOferta}
            />
            <Tab.Screen
                name="Novo Produto"
                component={NewProduto}
            />
        </Tab.Navigator>
    )
}

export default routeBottom
