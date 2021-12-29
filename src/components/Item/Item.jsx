import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"


export const Item = ({id, name, img, desc, price}) => {
    return (
        
            <div key={id} className="card m-5 shadow-lg" style={{width: "16rem"}}>
                <img  className='img-prod' src={img} alt={name} />
                <div>
                    <h2 className="card-title">${price}</h2>
                    <p className="card-text">{name}</p>
                    <Link to={`/detail/${id}`} className="btn btn-dark">Detalle</Link>
                </div>
            </div>
        
    )
}
