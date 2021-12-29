import React from 'react'
import {BsFillCartCheckFill} from 'react-icons/bs';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./CartWidget.css";
import { Link } from 'react-router-dom';
import {CartView }   from '../CartView/CartView';


export const CartWidget = () => {

    const {totalAmount} = useContext(CartContext)

    return (
        
        <div>
            
            <Link to="/Cart" element={<CartView/>}>
            
            <BsFillCartCheckFill style={{color:"#fff" , fontSize:40 , marginRight :40}} />
            </Link>
            
                        <br/>
            <span className='totalAmount'>{totalAmount()}</span>

        </div>
        
        
    )
}
