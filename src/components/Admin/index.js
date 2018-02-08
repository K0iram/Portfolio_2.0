		import React, { Component } from 'react'
		import SignIn from './sign-in'
		import PostForm from './post-form'

		import './style.css'


		class Admin extends Component {

		  render() {
		    return (
		      <div className="admin-container">
		      	<SignIn />
		      	<PostForm />
		      </div>
		    )
		  }
		}

		export default Admin;