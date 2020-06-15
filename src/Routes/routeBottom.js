import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'

import MeusProdutos from '../pages/MeusProdutos/MeusProdutos'
import MeusPedidos from '../pages/MeusPedidos/MeusPedidos'
import NewOferta from '../pages/NewOferta/NewOferta'
import NewProduto from '../pages/NewProduto/NewProduto'
<<<<<<< HEAD
=======
import DashBoard from '../pages/DashBoard/DashBoard'
>>>>>>> 1c68070e365709deebc0debe4bbcbe8176e48968

const Tab = createBottomTabNavigator();

function routeBottom() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    size = 50
                    switch (route.name) {
                        case 'Inicio':
                            return <Image resizeMethod={'scale'} source={require('../Assets/home.png')}
                                style={{ width: 50, height: 50, borderRadius: 10, }} />
                            break;
                        case 'Conta':
                            return <Image source={require('../Assets/user.png')}
                                style={{ width: 50, height: 50, borderRadius: 10, }} />
                            break;
                        case 'Mais':
                            return <Image source={require('../Assets/opcoes.png')}
                                style={{ width: 50, height: 50, borderRadius: 10, }} />
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
                //showLabel: false,
                labelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold'
                },
                style: {
                    height: 70
                },
                tabStyle: {
                    alignItems: "center",
                    justifyContent: "center",
                }
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={DashBoard}
            />
            <Tab.Screen
                name="Conta"
                component={NewProduto}
            />
            <Tab.Screen
                name="Mais"
                component={NewOferta}
            />


        </Tab.Navigator>
    )
}

export default routeBottom
