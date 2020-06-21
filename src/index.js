import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Route from './Routes/route'
import RouteDrawer from './Routes/routeDrawer'

const index = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={'#fff'} barStyle='dark-content' translucent={true}/>
            <Route />
        </NavigationContainer>
    )
}

export default index
