import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <ItemCount item={item} />
        </div>
    )
}

export default ItemDetail
