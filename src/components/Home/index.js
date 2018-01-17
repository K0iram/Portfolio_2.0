import React, { Component } from 'react'
import profilePic from './four_wheeler.png'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

import './style.css'


class Home extends Component {
  
  componentDidMount() {
    configureAnchors({keepLastAnchorHash: false, scrollDuration: 1000})
  }

  render() {
    return (
      <div className="about">
      </div>
    )
  }
}

export default Home;
