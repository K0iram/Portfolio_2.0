import React, { Component } from 'react'
import { fetchPosts } from 'api/posts'
import BlogPage from './blog-page'

import './style.css'

	class Blog extends Component {

		state = {
			blogPosts: []
		}

	componentDidMount() {
		fetchPosts().then((res) => {
			this.setState({
				blogPosts: res.data.items
			})
		})
	}

	  render() {
	    return (
	    	<div>
		    	<div className="blog-title">
						<h1>Keep Up To Date</h1>
		    	</div>
		      <div className="blog-post__container">
		      	{this.state.blogPosts.map((post, i) => <BlogPage {...post} key={i}/>)}
		      </div>
	    	</div>
	    )
	  }
	}

export default Blog;