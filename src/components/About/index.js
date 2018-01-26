import React, { Component } from 'react'

import './style.css'


class About extends Component {

  render() {
    return (
      <div className="about-container">
        <img src="https://s3.amazonaws.com/mariosbucket/four_wheeler.png" alt="" className="profile-pic"/>
        <p>
          My name is Mario, and I am a web developer. I started in this industry to make cool applications 
          people can use every day. I've worked a number of odd jobs before making the move to tech, which 
          means I have an extensive collection of nametags and hairnets. Web development is the perfect fit 
          me for because it, like my life, is always changing. I strive to make kick-ass web apps with 
          like-minded people that have a vision of changing the world.
        </p>

        <div className="resume-download">
          Download my resume 
          <a href="https://s3.amazonaws.com/mariosbucket/mario_kennedy_resume.pdf" download>
            <button className="download-btn">
              here
            </button>
          </a>
        </div>
      </div>
    )
  }
}

export default About;
