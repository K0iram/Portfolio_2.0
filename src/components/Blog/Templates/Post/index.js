import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import arrow from './icons/back.svg'
import ContentfulImage from 'components/ContentfulImage'
import Markdown from './markdown.js'
import './style.css'

class Post extends Component {

  render() {
    const { title, description, body, secondBody, media, heroImage } = this.props

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
            <img src={heroImage} alt="main-hero"/>
          </figure>
          <div className="blog-post__body">
            <Markdown text={body} />
          </div>
          <div className="blog-post__gallery">
            {media.map((img, i) => <ContentfulImage id={img.sys.id} key={`img-${i}`}/>)}
          </div>
          {secondBody !== null &&
            <div className="blog-post__body">
              <Markdown text={secondBody} />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Post