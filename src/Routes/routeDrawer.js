import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import DashBoard from '../pages/DashBoard/DashBoard'
import Usuario from '../pages/Usuario/usuario'
import DrawerContent from '../Componentes/DrawerContent'
import Route from '../Routes/route'

const Drawer = createDrawerNavigator();

export default function RouteDrawer() {
    return (
        <Drawer.Navigator
            drawerStyle={{backgroundColor: '#B32728'}}
            drawerContent={({navigation}) => <DrawerContent navigation={navigation}/>}
            
        >
            <Drawer.Screen 
                name="Inicio" 
                component={Route}
            />
            <Drawer.Screen 
                name="Usuario" 
                component={Usuario}
            />
        </Drawer.Navigator>
    );
}