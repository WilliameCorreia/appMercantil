import React, { PureComponent, useEffect } from 'react';

import ListaProdutos from '../../Services/ListaProdutos'

export default function MeusProdutos({ route }) {

    const item = route.params 

    console.log('meus produtos => ' + item)
    return(
        <ListaProdutos categoria={item}/>
    )
}