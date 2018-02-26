import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import marked from 'marked'
import arrow from './icons/back.svg'
import ContentfulImage from 'components/ContentfulImage'
import './style.css'

class Post extends Component {
  getMarkdownText(text) {
      var rawMarkup = marked(text, {sanitize: true});
      return { __html: rawMarkup };
  }

	render() {
		const { title, description, body, secondBody, links, media, heroImage } = this.props

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
						<div dangerouslySetInnerHTML={this.getMarkdownText(body)} />
					</div>
					<div className="blog-post__gallery">
						{media.map((img, i) => <ContentfulImage id={img.sys.id} key={`img-${i}`}/>)}
					</div>
				</div>
			</div>
		)
	}
}

export default Post