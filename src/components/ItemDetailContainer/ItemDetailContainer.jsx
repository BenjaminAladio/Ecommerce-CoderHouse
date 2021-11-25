import React from 'react'
import { useState, useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)


    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)
       
        pedirDatos()
            .then(resp => {
                setItem(resp.find(prod => prod.id === Number(itemId) ) )
            })
            .finally(() => {
                setLoading(false)
            })
    }, []) 

    return (
            <div className="container my-5">
                {
                    loading 
                    ? <div>Cargando...</div>
                    : <ItemDetail {...item} />
                }
            </div>
            )
}

export default ItemDetailContainer