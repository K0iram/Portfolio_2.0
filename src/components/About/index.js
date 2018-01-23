import React, { Component } from 'react'

import './style.css'


class About extends Component {

  render() {
    return (
      <div className="about-container">
        <img src="https://s3.amazonaws.com/mariosbucket/four_wheeler.png" alt="" className="profile-pic"/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil atque quidem laudantium officiis 
          facilis eligendi? Quas consequuntur aliquid quis. Quaerat, sint at facere laboriosam delectus 
          consectetur beatae, incidunt nisi nesciunt.
        </p>
        Download my resume <a href="https://s3.amazonaws.com/mariosbucket/mario_kennedy_resume.pdf" download>here</a>
      </div>
    )
  }
}

export default About;
