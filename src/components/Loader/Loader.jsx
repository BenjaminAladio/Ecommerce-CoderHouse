import React from 'react'
import { Spinner } from 'react-bootstrap'
import "./Loader.css"

export const Loader = () => {
    return (
        <div className='Loader'>
           <Spinner animation="grow" />
        </div>
    )
}
