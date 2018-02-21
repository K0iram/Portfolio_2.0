import React from "react"
import ContentfulImage from "components/ContentfulImage"

const Blog2 = props => {
	const { title, description, body, secondBody, links, media} = props

	return (
		<div className="blog-post__container">
			<h1>{title}</h1>
				<h3>{description}</h3>

				<p>{body}</p>

				<p>{secondBody}</p>

				{media.map((img) => <ContentfulImage id={img.sys.id} />)}

				<a href={links}>THIS IS A LINK</a>
		</div>
	)
}

export default Blog2