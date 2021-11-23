import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from "../Item/Item"


export const ItemList = ({items}) => {

    return (
        <Container className="my-3">
            <h2>Bienvenidos</h2>
            <hr />
            <Row>
                {items.map((prod) => <Item key={prod.id} {...prod} />)}
            </Row>
            
        </Container>

    )
}
