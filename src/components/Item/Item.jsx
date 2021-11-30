import React from 'react'
import { BsTextCenter } from 'react-icons/bs'
import { Link } from 'react-router-dom'


export const Item = ({id, name, img, desc, price}) => {
    return (
        
            <div key={id} className="card m-5 shadow-lg" style={{width: "16rem"}}>
                <img src={img} alt={name} />
                <div>
                    <h2 className="card-title">${price}</h2>
                    <p className="card-text">{desc}</p>
                    <Link to={`/detail/${id}`} className="btn btn-dark">Detalle</Link>
                </div>
            </div>
        
    )
}
