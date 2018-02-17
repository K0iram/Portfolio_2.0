import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const BlogPost = (props) => {
	const { title } = props.fields
	const { id } = props.sys
	const imgURL = `https:${props.image.fields.file.url}?fit=scale`
	const imgALT = props.image.fields.description


	return(
		<div className="blog-post">
			<Link to={`/blog/${id}`}>
				<div className="blog-post__img">
					<img src={imgURL} alt={imgALT}/>
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