import React, { Component } from 'react'

import './style.css'


class Contact extends Component {

  render() {
    return (
      <div className="contactContainer">
        <div className="contact--hero">
          <img src="https://s3.amazonaws.com/mariosbucket/deskPic.jpeg" alt="desk"/>
          <h5>Contact Me</h5>
        </div>
  
        <div className="contact--item">
          <a href="mailto:mk@mariokennedy.com">mk@mariokennedy.com</a>
        </div>
        <div className="contact--item">
          <a href="tel:7747221431">774-722-1431</a>
        </div>
        <div className="contact--item">
          1929 Columbia St. #502
          San Diego, CA 92101
        </div>
      </div>
    )
  }
}

export default Contact;
