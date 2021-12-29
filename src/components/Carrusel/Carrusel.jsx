import React from 'react'
import {Carousel} from 'react-bootstrap'

export const Carrusel = () => {
    return (
        
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://http2.mlstatic.com/D_NQ_NP2X_857378-MLA48234439177_112021-B.webp"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://http2.mlstatic.com/D_NQ_NP2X_990965-MLA48234264935_112021-B.webp"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://http2.mlstatic.com/D_NQ_NP_2X_964880-MLA48268840757_112021-OO.webp"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>
        
    )
}
