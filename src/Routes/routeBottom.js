import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MeusProdutos from '../pages/MeusProdutos/MeusProdutos'
import MeusPedidos from '../pages/MeusPedidos/MeusPedidos'
import NewOferta from '../pages/NewOferta/NewOferta'
import NewProduto from '../pages/MeusProdutos/MeusProdutos'

const Tab = createBottomTabNavigator();

function routeBottom() {
    return (
        <Tab.Navigator 
            initialRouteName='MeusProdutos'
            tabBarOptions={{
                activeTintColor: '#ffff',
                inactiveTintColor: 'black',
                activeBackgroundColor: '#F23132',
                inactiveBackgroundColor: '#B32728',
                labelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold'
                },
                tabStyle:{
                   alignItems: "center",
                   justifyContent: "center"                    
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
