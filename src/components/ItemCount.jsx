import React from 'react'


const ItemCount  = ({max, setCantidad, cantidad, onAdd}) => {

   

    const sumarCant = () => {
        cantidad < max && setCantidad (cantidad + 1)
        
    }


    const restarCant = () => {
        cantidad > 0 && setCantidad (cantidad - 1)
        
    }
    
    return (
        <>
        <h2>Cantidad</h2>
        <h3>{cantidad}</h3>
        <div>
            <button 
            onClick= {restarCant}
            className="btn btn-dark"
            disabled={cantidad === 0}>
                - 
            </button>
                
                   

            <button onClick={sumarCant} 
            className="btn btn-dark"
            disabled={cantidad === max}>
                +
            </button>
                 

        </div>
        <button className="btn btn-success"
            onClick={onAdd}
            disabled={cantidad === 0}
        >
            Agregar al carrito
        </button>

        
        </>
    )
}

export default ItemCount;
