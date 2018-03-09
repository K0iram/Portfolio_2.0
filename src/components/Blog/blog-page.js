import React from 'react'
import { Link } from 'react-router-dom'
import ContentfulImage from 'components/ContentfulImage'
import './style.css'

const BlogPage = props => {
  const { fields, sys } = props
  const { featuredImage, postTitle } = fields

  return (
    <div className="blog-tile">
      <Link to={`/blog/${sys.id}`}>
        <div className="blog-tile__image">
          <ContentfulImage id={featuredImage.sys.id} />
        </div>
        <div className="blog-tile__title">
          <h5>{postTitle}</h5>
        </div>
      </Link>
    </div>
  )
}

export default BlogPage
