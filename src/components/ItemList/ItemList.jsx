import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Carrusel } from '../Carrusel/Carrusel'
import { Item } from "../Item/Item"


export const ItemList = ({items}) => {

    return (
        <Container className="my-3">
            <h2><Carrusel /></h2>
            <Row>
                {items.map((prod) => <Item key={prod.id} {...prod} />)}
            </Row>
            
        </Container>

    )
}
