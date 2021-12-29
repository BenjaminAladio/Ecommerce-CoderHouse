import React from 'react'
import { useNavigate } from 'react-router'
import ItemCount from '../ItemCount'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, name, img, desc, price, item, stock}) => {

        const {addToCart, isInCart} = useContext(CartContext)
        
        const navigate = useNavigate()
        const [cantidad, setCantidad] = useState(0)
        const [agregado, setAgregado] = useState(false)
    
        const handleVolver = () => {
            navigate(-1)
        }

        const handleVolverAInicio = () => {
            navigate('/')
        }

        const handleAddToCart = () => {
            if (cantidad>0) {
                addToCart({
                    id,
                    name,
                    price,
                    img,
                    cantidad
                })

            setAgregado(true)
        }
    }


    return (
        <div>
            
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>{desc}</p>
            <h2>${price}</h2>
            
            {
                !isInCart(id) 
                ?   <ItemCount 
                        max={stock} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad} 
                        onAdd={handleAddToCart}
                    />

                :    <Link to="/cart" className='btn btn-success'>Terminar mi Compra</Link>
            }

            <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
            <button className="btn btn-dark" onClick={handleVolverAInicio}>Volver al Inicio</button>
        </div>
    )
}

export default ItemDetail
