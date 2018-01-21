import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import { Link } from 'react-router-dom'

import './style.css'


class Navigation extends Component {

  render() {
    return (
      <div className="nav-bar">
        <div>
          <ul className="nav-menu">
            <li><Link to="/home" activeStyle={{color: 'red'}}>Home</Link></li>
            <div className="seperator"></div>
            <li><Link to="/portfolio" activeStyle={{color: 'red'}}>Portfolio</Link></li>
            <div className="seperator"></div>
            <li><Link to="/contact" activeStyle={{color: 'red'}}>Contact</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}



export default Navigation;
