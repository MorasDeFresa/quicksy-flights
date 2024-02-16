'use client'

import Formfly from "../components/Formfly"
import Sellingticket from "../components/Sellingticket"

function Buytickets() {
  return (
    <div>
        <h1 className="center-title">Comprar Vuelos</h1>
        <div className="search-fly-components">
        <Formfly title='Origen'/>
        <Formfly title='Destino'/>
        </div>
        <Sellingticket/>
        <Sellingticket/>
    </div>
  )
}

export default Buytickets