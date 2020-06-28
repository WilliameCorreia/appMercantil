import React, { useContext } from 'react'

import Route from '../Routes/route'
import RouteDrawer from '../Routes/routeDrawer'
import AuthContext from '../Contexts/Auth'

const Routes = () => {

    const { signed } = useContext(AuthContext)

    return (
        signed ? <RouteDrawer/> : <Route/>
    )
}

export default Routes
