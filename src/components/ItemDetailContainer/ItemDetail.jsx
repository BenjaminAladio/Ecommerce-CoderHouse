import React from 'react'
import { useNavigate } from 'react-router'
import ItemCount from '../ItemCount'
import { useState } from 'react'


const ItemDetail = ({id, name, img, desc, price,item,stock}) => {
        const navigate = useNavigate()
        const [cantidad, setCantidad] = useState(0)
    
        const handleVolver = () => {
            navigate(-1)
        }

        const handleVolverAInicio = () => {
            navigate('/')
        }

    
    return (
        <div>
            
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{desc}</p>
            <h2>${price}</h2>
            
            <ItemCount max={stock} cantidad={cantidad} setCantidad={setCantidad} />

            <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
            <button className="btn btn-dark" onClick={handleVolverAInicio}>Volver al Inicio</button>
        </div>
    )
}

export default ItemDetail
