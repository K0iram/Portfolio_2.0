import React, { Component } from 'react'
import gitHubIcon from './icons/github.svg'
import linkedInIcon from './icons/linkedin.svg'
import fbIcon from './icons/facebook.svg'
import instaIcon from './icons/instagram.svg'
import soundCloudIcon from './icons/soundcloud.svg'
import './style.css'


class Footer extends Component {

  render() {
    return (
      <div className="social-links">
        <ul>
          <li><a href="https://www.github.com/mario7746" target="_blank"><img src={gitHubIcon} alt=""/></a></li>
          <li><a href="https://www.linkedin.com/in/mariokk/" target="_blank"><img src={linkedInIcon} alt=""/></a></li>
          <li><a href="https://www.facebook.com/Koiram" target="_blank"><img src={fbIcon} alt=""/></a></li>
          <li><a href="https://www.instagram.com/Koiram" target="_blank"><img src={instaIcon} alt=""/></a></li>
          <li><a href="https://soundcloud.com/mario-kennedy" target="_blank"><img src={soundCloudIcon} alt=""/></a></li>
        </ul>
      </div>
    )
  }
}


export default Footer
