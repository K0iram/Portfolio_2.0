import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { Client } from 'postmark'

import './style.css'

const client = new Client('495ef090-039d-42ee-84fe-996b56280358')

class EmailForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    body: '',
    sent: false
  }

  subjectOptions = ['I want to hire you!', 'I need a website!', 'I think you\'re awesome!']

  onInputChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  sendEmail = () => {
    const {firstName, lastName, email, subject, body } = this.state
    const data = {
      "From": email,
      "To": "mk@mariokennedy.com",
      "Subject": subject,
      "TextBody": body
    }

    client.sendEmail(data)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      body: '',
      sent: true
    })
  }

  render() {
    const {sent} = this.state
    if(sent) {
      return (
        <h5>
          Thanks For Your Message! <br/>
          I'll get back to you as soon as possible!
        </h5>
      )
    }
    return (
      <form>
        <div className="user-info">
          <TextField
            label="First Name"
            name="firstName"
            placeholder='First Name'
            value={this.state.name}
            onChange={this.onInputChange}
            required
          />
          <TextField
            label="Last Name"
            name="lastName"
            placeholder='Last Name'
            value={this.state.name}
            onChange={this.onInputChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            placeholder='Your Email'
            value={this.state.name}
            onChange={this.onInputChange}
            required
          />
          <TextField
            select
            label="Subject"
            name="subject"
            value={this.state.subject}
            onChange={this.onInputChange}
            margin="normal"
            className="subject-message"
          >
            {this.subjectOptions.map((option, i) => (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            label="Message Body"
            name="body"
            className="user-message"
            placeholder="Tell me what's on your mind"
            value={this.state.body}
            onChange={this.onInputChange}
            required
            multiline
            rowsMax="4"
          />
        </div>
        <div className="submit__container">
          <Button onClick={this.sendEmail}>Submit</Button>
        </div>

      </form>
    )
  }
}

export default EmailForm