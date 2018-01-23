import React, { Component } from 'react'

import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

import './style.css'


class Home extends Component {
  
  componentDidMount() {
    configureAnchors({keepLastAnchorHash: false, scrollDuration: 1000})
  }

  render() {
    return (
      <div className="appContainer">
        <div className="heroContainer">
          <div className="hero">
            <h2>Mario Kennedy</h2>
            <h5>Web Developer</h5>
          </div>

        </div>
        <div className="blurbContainer">
          <p>Need a website? <a href="mailto:mk@mariokennedy.com?Subject=I need a website!">Lets talk!</a></p>
        </div>
      </div>
    )
  }
}

export default Home;
