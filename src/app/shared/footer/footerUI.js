import React from 'react'

function footerUI() {
  return (
    <footer className='footer'>
      <div className="quicksy-flights__section">
        <img src="/logos/logo.png" alt="Quicksy Flights Logo" />
        <span>Primera y única aplicación de boletos de avión basada en Blockchain de Colombia.</span>
        <span>© 2022 Quicksy Flights. Todos los derechos reservados. Términos de servicio. Política de privacidad.</span>
      </div>
      <div className="tags__section">
        <span className="tag">BLOCKCHAIN</span>
        <span className="tag">CRYPTO</span>
        <span className="tag">AIRPLANE</span>
        <span className="tag">FLIGHT</span>
        <span className="tag">SOLANA</span>
      </div>
      <div className="social__section"></div>
      <div className="about__section"> </div>
    </footer>
  )
}

export default footerUI