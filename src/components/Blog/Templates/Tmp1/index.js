import React from "react"
import ContentfulImage from "components/ContentfulImage"
import './style.css'

const Blog1 = props => {
	const { title, description, body, secondBody, links, media, heroImage } = props

	return (
		<div className="blog-post__container">
			<div className="blog-post__title">
				<h1>{title}</h1>
				<h3>{description}</h3>
			</div>
			<figure className="blog-post__hero">
				<img src="https://placehold.it/1000x400" alt={heroImage}/>
			</figure>
			<div className="blog-post__body">
				<p>{body}</p>
			</div>
			<div className="blog-post__gallery">
				{media.map((img, i) => <ContentfulImage id={img.sys.id} key={`img-${i}`}/>)}
			</div>
			<div className="helpful-links">
				<h5>Check out these links</h5>
				<ul>
					<li><a href={links}>THIS IS A LINK</a></li>
				</ul>
			</div>
		</div>
	)
}

export default Blog1