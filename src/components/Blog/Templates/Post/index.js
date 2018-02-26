import React from 'react'
import { Link } from 'react-router-dom'
import arrow from './icons/back.svg'
import ContentfulImage from 'components/ContentfulImage'
import './style.css'

const Post = props => {
	const { title, description, body, secondBody, links, media, heroImage } = props

	return (
		<div>
			<Link to="/blog" className='back-link'>
				<img src={arrow} alt="back-arrow"/>
				<p>Back to all posts</p>
			</Link>
			<div className="blog-post__container">
				<div className="blog-post__title">
					<h1>{title}</h1>
					<h3>{description}</h3>
				</div>
				<figure className="blog-post__hero">
					<img src={heroImage} alt="main-hero-image"/>
				</figure>
				<div className="blog-post__body">
					<p>{body}</p>
				</div>
				<div className="blog-post__gallery">
					{media.map((img, i) => <ContentfulImage id={img.sys.id} key={`img-${i}`}/>)}
				</div>
				{secondBody !== '' &&
				<div className="blog-post__body">
					<p>{secondBody}</p>
				</div>
				}
				<div className="helpful-links">
					<h5>Check out these links</h5>
					<ul>
						<li><a href={links}>THIS IS A LINK</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Post