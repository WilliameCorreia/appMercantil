import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'

import MeusProdutos from '../pages/MeusProdutos/MeusProdutos'
import MeusPedidos from '../pages/MeusPedidos/MeusPedidos'
import NewOferta from '../pages/NewOferta/NewOferta'
import NewProduto from '../pages/NewProduto/NewProduto'
import DashBoard from '../pages/DashBoard/DashBoard'

const Tab = createBottomTabNavigator();

function routeBottom() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size}) => {
                    size = 50
                    switch (route.name) {
                        case 'DashBoard':
                            return <Image resizeMethod={'scale'} source={require('../Assets/home.png')} 
                                style={{ width: 70, height: 70, borderRadius: 10,  }}/> 
                            break;
                        case 'Nova Oferta':
                            return <Image source={require('../Assets/opcoes.png')} 
                                style={{ width: 70, height: 70, borderRadius: 10,  }}/> 
                            break;
                        case 'Novo Produto':
                            return <Image source={require('../Assets/user.png')} 
                                style={{ width: 70, height: 70, borderRadius: 10,  }}/> 
                            break;
                        default:
                            //return <Image source={require('../Assets/7.png')} style={{ width: size, height: size }}/>
                            break;
                    }
                }
            })}
            initialRouteName='DashBoard'
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
                name="DashBoard"
                component={DashBoard}
            />
            <Tab.Screen
                name="Novo Produto"
                component={NewProduto}
            />
            <Tab.Screen
                name="Nova Oferta"
                component={NewOferta}
            />
           
           
        </Tab.Navigator>
    )
}

export default routeBottom
