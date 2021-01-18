import React, {useContext} from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../Componentes/DrawerContent'
import RouteDashBoard from '../Routes/routeDashBoard'
import { EstabelecimentosContext } from '../Contexts/EstabelecimentoContext'

const Drawer = createDrawerNavigator();

export default function RouteDrawer() {
    const { Estabelecimento } = useContext(EstabelecimentosContext);
    return (
        <Drawer.Navigator
            drawerStyle={{backgroundColor: '#B32728'}}
            drawerContent={({navigation}) => <DrawerContent navigation={navigation} Estabelecimento={Estabelecimento}/>}
        >
            <Drawer.Screen 
                name="Inicio" 
                component={RouteDashBoard}
                options={{tabBarLabel: 'teste'}}
            />
        </Drawer.Navigator>
    );
}