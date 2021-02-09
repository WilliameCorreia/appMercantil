import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import Routes from './Routes/Index'

import { AuthProvider } from './Contexts/Auth'

const index = () => {
    return (
        <NavigationContainer>
            {/* toda aplicação tem o context */}
            <AuthProvider>
                <StatusBar backgroundColor={'#fff'} barStyle='dark-content' translucent={true} />
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    )
}

export default index