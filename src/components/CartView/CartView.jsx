import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

import { CartItem } from './CartItem'

export const CartView = () => {

    const {cart, clearCart, totalPrice} = useContext(CartContext)


    return (
        <div className='container my-5'>
           

            {
                cart.length > 0 
                ?   <>
                        <section>

                            {
                                cart.map((prod) => <CartItem key={prod.id} {...prod} />)
                            }

                        </section>
                        
                        <hr/>
                        <div>
                            <h2>Total: ${totalPrice()}</h2>
                            <button className='btn btn-danger' onClick={clearCart}>Vaciar Carrito</button>
                            <Link to="/checkout" className='btn btn-success'>Terminar Compra</Link>
                        </div>
                    </>

                :   <>
                        <h2>No hay productos en el carrito</h2>
                        <hr/>
                        <Link to="/" className='btn btn-dark'>Volver</Link>
                    </>
                
            }


        </div>
    )
}
