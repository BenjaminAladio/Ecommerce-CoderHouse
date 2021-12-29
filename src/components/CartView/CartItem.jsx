import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


export const CartItem = ({name, price, cantidad, id, img}) => {

    const {removeFromCart} = useContext(CartContext)

    return (
        <div>
                            <h4>{name}</h4>
                            <h4>Precio: ${price}</h4>
                            <h5>Cantidad: {cantidad}</h5>
                            <img src={img} style={{width: 150}} />
                            <button 
                                className="btn btn-danger" 
                                onClick={() => {removeFromCart(id)}}
                                >
                                    {<BsFillTrashFill />}
                            </button>
        </div>
    )
}
