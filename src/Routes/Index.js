import React, { useContext } from 'react'

import Route from '../Routes/route'
import RouteDrawer from '../Routes/routeDrawer'
import AuthContext from '../Contexts/Auth'

import ProdutosProvider from '../Contexts/ProdutoContext'
import EstabelecimentoProvider from '../Contexts/EstabelecimentoContext'

const Routes = () => {

    const { signed } = useContext(AuthContext);

    return (

        signed ?
            <ProdutosProvider>
                {/* {console.log("logado")} */}
                <EstabelecimentoProvider>
                    <RouteDrawer />
                </EstabelecimentoProvider>
            </ProdutosProvider>

            :

            <Route >
                {/* {console.log("não logado")} */}
            </Route>
    )
}

export default Routes
