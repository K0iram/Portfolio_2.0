import React, { Component } from 'react'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

import './style.css'


class Footer extends Component {

  componentDidMount() {
    configureAnchors({keepLastAnchorHash: false, scrollDuration: 1000})
  }

  render() {
    return (
    <div>
    </div>
    )
  }
}


export default Footer;
