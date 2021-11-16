import React from 'react'
import { useState } from 'react'

function ItemCount  ({stock , initial , onAdd}) {
    
    const [clicks, setClicks] = useState(1) 

    const sumarClick = () => {
        if (clicks < stock) {
            setClicks(clicks + 1)
        }
    }
    const restarClick = () => {
        if (clicks > initial) {
            setClicks(clicks - 1)
        }
    }
    return (
        <>
        <ItemCount />
        <h2>Cantidad</h2>
        <h3>{clicks}</h3>
        <div>
            <button onClick={restarClick}>-</button>
            <button onClick={sumarClick}>+</button>
        </div>
        <button>Agregar al carrito</button>

        
        </>
    )
}

export default ItemCount;