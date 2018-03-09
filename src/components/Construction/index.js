import React from 'react'
import Construction from '../../images/Under_Construction_Sign.png'

import './style.css'

const UnderConstruction = () => (
  <div className="hero-container">
    <div className="hero-image">
      <img src={Construction} alt="Construction Sign"/>
    </div>
    <h5>Sorry, this page is currently under construction</h5>
  </div>
)

export default UnderConstruction