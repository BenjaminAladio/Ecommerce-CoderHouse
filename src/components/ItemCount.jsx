import React from 'react'
import { useState } from 'react'
import ItemListContainer from './ItemListContainer/ItemListContainer';

const ItemCount  = ({stock , initial , onAdd}) => {

    const initialClick = initial || 1;
    const [clicks , setClicks] = useState(initialClick)

    const sumarClick = () => {
        if (clicks < stock) {
            setClicks(clicks + 1)
            console.log(clicks)
        }
    }
    
    const restarClick = () => {
        if (clicks > 0) {
            setClicks(clicks - 1)
            console.log(clicks)
        }
    }
    
    return (
        <>
        <h2>Cantidad</h2>
        <h3>{clicks}</h3>
        <div>
            <button className="btn btn-dark"
                onClick={restarClick} 
                disabled={clicks === 0}
                >
                    -
            </button>

            <button className="btn btn-dark"
                onClick={sumarClick} 
                disabled={clicks === 5}
                >
                    +
            </button>

        </div>
        <button className="btn btn-success"
        onClick={() => onAdd(clicks)}
        >
            Agregar al carrito
        </button>

        
        </>
    )
}

export default ItemCount;
// exportado en ItemListContainer