import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { db } from '../../Firebase/config'




const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])
    const {catId} = useParams()

    useEffect(() => {

        setLoading(true)
        
        const collectionRef = collection(db, 'productos')

        const queryRef = catId ? query(collectionRef, where('category', '==', catId)) : collectionRef

        getDocs(queryRef)
            .then((collection) => {
               const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
               }))
               console.log(items)
               setProductos(items)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catId])


    return (
       <>
        {
            loading ?
            <Loader />
            : <ItemList items={productos} />
            

            
        }
       </>

            
        
    )
}
    
export default ItemListContainer