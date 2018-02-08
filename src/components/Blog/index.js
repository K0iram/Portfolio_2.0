import React, { Component } from 'react'
import BlogPost from './blog-post'

import './style.css'


	class Blog extends Component {

	  render() {
	    return (
	      <div>
	     		<h1>MY BLOG</h1>
	     		<div className="blog-post__container">
						<BlogPost />
						<BlogPost />
						<BlogPost />
						<BlogPost />
	     		</div>
	      </div>
	    )
	  }
	}

export default Blog;