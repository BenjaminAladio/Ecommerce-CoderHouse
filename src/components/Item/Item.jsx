import React from 'react'

export const Item = ({id, name, img, desc, price}) => {
    return (
        <div style={{width: "20rem"}}>
            <div key={id} className="card m-5" style={{width: "18rem"}}>
                <img src={img} alt={name} />
                <div>
                    <h2 className="card-title">${price}</h2>
                    {/* <p className="card-text">Precio: ${price}</p> */}
                    <p className="card-text">{desc}</p>
                    <button className="btn btn-dark">Detalle</button>
                </div>
            </div>
        </div>
    )
}
