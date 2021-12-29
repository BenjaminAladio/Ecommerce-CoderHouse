import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { Loader } from '../Loader/Loader'
import { db } from '../../Firebase/config'
import { doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)


    const { itemId } = useParams()

    useEffect(() => {

        setLoading(true)
       
        const collectionRef = doc(db, 'productos', itemId)
        getDoc(collectionRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
        .finally(() => {
            setLoading(false)
        })

    }, [itemId]) 

    return (
            <div className="container my-5">
                {
                    loading 
                    ? <Loader />
                    : <ItemDetail {...item} />
                }
            </div>
            )
}

export default ItemDetailContainer