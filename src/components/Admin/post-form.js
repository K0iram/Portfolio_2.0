import React, { Component } from 'react'

import './style.css'


	class PostForm extends Component {

		submitForm = event => {
			event.preventDefault()
			alert('form submitted')
		}

	  render() {
	    return (
	      <div className="post-form">
	      	<h3>Create A Post</h3>
	     		<form>
	     			<input type="text" placeholder="Title"/>
	     			<input type="date"/>
	     			<textarea rows="4" cols="50"/>
	     			<input type="file"/>
	     		</form>
	     		<button onClick={this.submitForm}>Submit</button>
	      </div>
	    )
	  }
	}

export default PostForm;