import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'


class DownPage extends Component {

  render() {
    return (
      <div className='container'>
        <h1>Sorry This Page is Down</h1>
        <h4>Please Check Back Soon!</h4>

        <h5>
          Feel Free to
          <Link to="/contact"> Contact Me </Link>
          With Any Questions
        </h5>
      </div>
    )
  }
}

export default DownPage