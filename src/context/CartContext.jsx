import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
  console.log(cart)

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  }

  const clearCart = () => {
    setCart([]);
  }

  const totalAmount = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0);
    }

  const isInCart = (id) => {
    return cart.find(cartItem => cartItem.id === id);
  }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            isInCart,
            totalAmount,
            totalPrice
        }}>
            {children}

        </CartContext.Provider>

    )

}