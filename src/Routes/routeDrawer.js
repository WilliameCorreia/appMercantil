import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Usuario from '../pages/Usuario/usuario'
import DrawerContent from '../Componentes/DrawerContent'
import RouteDashBoard from '../Routes/routeDashBoard'

const Drawer = createDrawerNavigator();

export default function RouteDrawer() {
    return (
        <Drawer.Navigator
            drawerStyle={{backgroundColor: '#B32728'}}
            drawerContent={({navigation}) => <DrawerContent navigation={navigation}/>}
        >
            <Drawer.Screen 
                name="Inicio" 
                component={RouteDashBoard}
                options={{tabBarLabel: 'teste'}}
            />
            <Drawer.Screen 
                name="Usuario" 
                component={Usuario}
            />
        </Drawer.Navigator>
    );
}