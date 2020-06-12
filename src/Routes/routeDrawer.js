import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ofertas from '../pages/MinhasOfertas/MinhasOfertas'
import DashBoard from '../pages/DashBoard/DashBoard'

const Drawer = createDrawerNavigator();

export default function RouteDrawer() {
    return (
        <Drawer.Navigator
            drawerStyle={{backgroundColor: '#B32728', height:900}}
            openByDefault
        >
            <Drawer.Screen 
                name="Feed" 
                component={DashBoard}
            />
        </Drawer.Navigator>
    );
}