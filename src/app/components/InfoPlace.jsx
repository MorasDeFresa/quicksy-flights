import React from 'react'

function InfoPlace({city,date,hour,typefly}) {
  return (
    <div>
        <div className='info-ticket-place'>
            <h3>{city}</h3>
            <p>Fecha: {date}</p>
            <p>Hora: {hour}</p>
            <p>Vuelo: {typefly}</p>
        </div>
    </div>
  )
}

export default InfoPlace