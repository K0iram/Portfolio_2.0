import React, { Component } from 'react'
import { fetchPost } from 'api/posts'
import Post from './Templates/Post'

import "./style.css"

class BlogPost extends Component {
	componentDidMount() {
		fetchPost(this.props.match.params.postId).then(res => {
			const type = res.data.fields
			this.setState({
				type: type.templateType,
				date: type.postDate,
				title: type.postTitle,
				description: type.postDescription || null,
				body: type.mainBody,
				secondBody: type.secondaryBody || null,
				links: type.referenceLinks || null,
				media: type.postMedia,
				heroImage: type.hero
			})
		})
	}

	state = {
		type: '',
		date: '',
		title: '',
		description: '',
		body: '',
		secondBody: '',
		links: '',
		media: [],
		heroImage: ''
	}

	render() {
		return (
			<div className="blog-post">
				<Post {...this.state}/>
			</div>
		)
	}
}

export default BlogPost
