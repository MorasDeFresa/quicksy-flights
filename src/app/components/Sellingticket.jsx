import React from 'react'
import InfoPlace from './InfoPlace'
import PriceTicket from './PriceTicket'

function Sellingticket() {
  return (
    <div>
        <div className='selling-ticket'>
            <img src="" alt="PRQ" />
            <InfoPlace city="Origen: Bogota" date="12-12-2024" hour="12:00" typefly = "Directo"/>
            <InfoPlace city="Destino: Medellin" date="12-12-2024" hour="14:00" typefly = "Directo"/>
            <hr/>
            <PriceTicket price = "200.000"/>
        </div>
    </div>
  )
}

export default Sellingticket