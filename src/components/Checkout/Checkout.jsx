import React from 'react'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { useState } from 'react'
import { validarDatos } from '../../helpers/validarDatos'
import { Navigate } from 'react-router-dom'
import { generarOrden } from '../firebase/generarOrden'


export const Checkout = () => {
   

    const {cart, totalPrice, clearCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm: '',
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    

    const handleSubmit = (e) => {
        e.preventDefault()

       if (!validarDatos(values)) {return}

       generarOrden(values, cart, totalPrice, clearCart)


    }
    
    return (
        <>
            {cart.length === 0 
            ? <Navigate to='/' />
            :

            <div className='container my-5'>
                <h2>Resumen de Compra</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input
                    onChange={handleInputChange}
                    name='nombre'
                    value={values.nombre}
                    className='form-control my-2'
                    type='text' 
                    placeholder='Nombre'
                    />
                {values.nombre.length < 3 && <small>Nombre Invalido</small>}

                
                    <input
                    onChange={handleInputChange}
                    name='apellido'
                    value={values.apellido}
                    className='form-control my-2'
                    type='text' 
                    placeholder='Apellido'
                    />
                {values.apellido.length < 3 && <small>Apellido Invalido</small>}

                
                    <input
                    onChange={handleInputChange}
                    name='email'
                    value={values.email}
                    className='form-control my-2'
                    type='email' 
                    placeholder='E-mail'
                    />
                {values.email.length < 8 && <small>E-mail Invalido</small>}

                <input
                    onChange={handleInputChange}
                    name='emailConfirm'
                    value={values.emailConfirm}
                    className='form-control my-2'
                    type='email' 
                    placeholder='Confirmar E-mail'
                    />
                {values.emailConfirm !== values.email && <small>Los E-mails no coinciden</small>}

                

                <button type="submit" className="btn btn-success">Enviar</button>

                </form>
            </div>
            }
        </>
    )
}