import React, { Component } from 'react'
import { fetchPost } from 'api/posts'
import Blog1 from './Templates/Tmp1'
import Blog2 from './Templates/Tmp2'
import Blog3 from './Templates/Tmp3'

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
				heroImage: type.heroImage.sys.id || null
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

	templateSwitch = () => {
		switch(this.state.type) {
    case 1:
        return <Blog1 {...this.state}/>
    case 2:
        return <Blog2 {...this.state}/>
    case 3:
        return <Blog3 {...this.state}/>
    default:
        return <Blog1 {...this.state}/>
		}
	}

	render() {
		return (
			<div className="blog-post">
				{this.templateSwitch()}
			</div>
		)
	}
}

export default BlogPost
