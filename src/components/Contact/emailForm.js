import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

import './style.css'


class EmailForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    subject: '',
    body: '',
    sent: false
  }

  subjectOptions = ['I want to hire you!', 'I need a website!', 'I think you\'re awesome!']

  render() {
    return (
      <form>
        <div className="user-info">
          <TextField
            label="First Name"
            placeholder='First Name'
            value={this.state.name}
            onChange={() => {}}
            required
          />
          <TextField
            label="Last Name"
            placeholder='Last Name'
            value={this.state.name}
            onChange={() => {}}
            required
          />
          <TextField
            label="Email"
            placeholder='Your Email'
            value={this.state.name}
            onChange={() => {}}
            required
          />
          <TextField
            select
            label="Subject"
            value={this.state.subject}
            onChange={() => {}}
            margin="normal"
            className="subject-message"
          >
            {this.subjectOptions.map((option, i) => (
              <MenuItem key={i} value={this.state.subject}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            label="Message Body"
            className="user-message"
            placeholder="Tell me what's on your mind"
            value={this.state.body}
            onChange={() => {}}
            required
            multiline
            rowsMax="4"
          />
        </div>
        <div className="submit__container">
          <Button>Submit</Button>
        </div>

      </form>
    )
  }
}

export default EmailForm