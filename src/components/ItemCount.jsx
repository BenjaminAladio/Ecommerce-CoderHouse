import React from 'react'


const ItemCount  = ({max, setCantidad, cantidad}) => {

   

    const sumarCant = () => {
        if(cantidad < max){
            setCantidad(cantidad + 1)
            console.log(sumarCant)
        }
    }
    
    const restarCant = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }
    
    return (
        <>
        <h2>Cantidad</h2>
        <h3>{cantidad}</h3>
        <div>
            <button className="btn btn-dark"
                onClick={restarCant} 
                disabled={cantidad === 0}>
                    -
            </button>

            <button className="btn btn-dark"
                onClick={sumarCant} 
                disabled={cantidad === 5}>
                    +
            </button>

        </div>
        <button className="btn btn-success"
        >
            Agregar al carrito
        </button>

        
        </>
    )
}

export default ItemCount;
// exportado en ItemListContainer