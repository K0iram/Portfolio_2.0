import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { resolveImageUrl } from 'api/posts'
import ContentfulImage from 'components/ContentfulImage'
import './style.css'

const BlogPost = (props) => {
	const { title, id, fields } = props
	const { featuredImage } = fields

	return(
		<div className="blog-post">
			<Link to={`/blog/${id}`}>
				<div className="blog-post__img">
					<ContentfulImage id={featuredImage.sys.id} alt="change me later" />
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

export default BlogPost