import React, { useEffect } from 'react'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { pedirDatos }  from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'



const ItemListContainer = ({greeting}) => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
   

    useEffect(() => {

        setLoading(true)
        pedirDatos()
        .then( (response) => {
            setProductos(response)
        })
        .catch( (error) => {
            console.log(error)
        })
        .finally( () => {         
            setLoading(false)
        })
    }, [])


    return (
       <>
        {
            loading ?
            <h2>Cargando...</h2>
            : <ItemList items={productos} />

            
        }
       </>

            
        
    )
}
    
export default ItemListContainer