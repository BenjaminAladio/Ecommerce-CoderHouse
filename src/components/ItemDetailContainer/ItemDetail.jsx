import React from 'react'


const ItemDetail = ({id, name, img, desc, price,item}) => {
    return (
        <div>
            
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{desc}</p>
            <h2>{price}</h2>
            
        </div>
    )
}

export default ItemDetail
