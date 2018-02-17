import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { resolveImageUrl } from 'api/posts'
import './style.css'

class BlogPost extends Component {

	state = {
		featuredImageUrl: 'http://putadefultimagehere.jpg'
	}

	async componentDidMount() {
		await this.resolveFeaturedImage()
	}

	resolveFeaturedImage = async () => {
		const { featuredImage } = this.props.fields
		const { data } = await resolveImageUrl(featuredImage.sys.id)

		this.setState({
			featuredImageUrl: data.fields.file.url
		})
	}

	render() {
		const { title, id } = this.props
		const { featuredImageUrl } = this.state

		return(
			<div className="blog-post">
				<Link to={`/blog/${id}`}>
					<div className="blog-post__img">
						<img src={featuredImageUrl} alt="change me later"/>
					</div>
					<div className="blog-post__title">
						<h5>
							{title}
						</h5>
					</div>
				</Link>
			</div>
		)
	}
}

export default BlogPost