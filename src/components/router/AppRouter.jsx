import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import { CartView } from '../CartView/CartView'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { Checkout } from '../Checkout/Checkout'



export const AppRouter = () => {

    const routes = useRoutes ([
        {path: "/", element: <ItemListContainer />},
        {path: "/productos/:catId", element: <ItemListContainer />},
        {path: "/detail/:itemId", element: <ItemDetailContainer />},
        {path: "/cart", element: <CartView />},
        {path: "/checkout", element: <Checkout />},
        {path: "*", element: <Navigate to="/" />}
    ])

    return routes
}

