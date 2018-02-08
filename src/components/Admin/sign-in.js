import React, { Component } from 'react'

import './style.css'


class SignIn extends Component {
	
	state = {
		userEmail: '',
		userPassword: ''
	}

	onEmailChange = event => {
		this.setState({userEmail: event.target.value})
	}

	onPasswordChange = event => {
		this.setState({userEmail: event.target.value})
	}

	submitForm = event => {
		event.preventDefault()
		alert('form submitted')
	}

  render() {
    return (
      <div className="admin-container">
      	<h3>Admin Sign In</h3>
     		<form className="admin-form">
					<input onClick={this.onEmailChange}type="text" placeholder="Email"/>
					<input onClick={this.onPasswordChange}type="password" placeholder="Password"/>

					<button onClick={this.submitForm}>Submit</button>
     		</form>
      </div>
    )
  }
}

export default SignIn