import React from 'react'

function PriceTicket({price}) {
  return (
    <div>
        <div className='price-fly'>
            <p>Desde: </p>
            <h3>Precio: {price}</h3>
            <button className='button'>COMPRAR VUELO</button>
        </div >
    </div>
  )
}

export default PriceTicket