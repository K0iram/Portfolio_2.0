import React, { Component } from 'react'
import { fetchPosts } from 'api/posts'
import BlogPost from './blog-post'

import './style.css'

	class Blog extends Component {

		state = {
			blogPosts: [],
			featuredImages: []
		}

	componentDidMount() {
		fetchPosts().then((res) => {
			this.setState({
				blogPosts: res.data.items,
				featuredImages: res.data.includes.Asset
			})
			console.log(res.data)
		})
	}

	  render() {
	    return (
	    	<div>
		    	<div className="blog-title">
						<h1>Keep Up To Date</h1>
		    	</div>
		      <div className="blog-post__container">
		      	{this.state.blogPosts.map((post, i) => <BlogPost {...post} image={this.state.featuredImages[i]} key={i}/>)}
		      </div>
	    	</div>
	    )
	  }
	}

export default Blog;