import React from 'react'
import { Link } from 'react-router-dom'
import ContentfulImage from 'components/ContentfulImage'
import './style.css'

const BlogPage = (props) => {
	const { fields, sys } = props
	const { featuredImage, title } = fields
	

	return(
		<div className="blog-post">
			<Link to={`/blog/${sys.id}`}>
				<div className="blog-post__img">
					<ContentfulImage id={featuredImage.sys.id}/>
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

export default BlogPage