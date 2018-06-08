import React from 'react'
import ContentfulImage from 'components/ContentfulImage'
import './style.css'

const WorkPreview = props => {
  const { fields, sys } = props
  const { mainPic, title } = fields

  return (
    <div className="blog-tile">
      <div className="blog-tile__image">
        <ContentfulImage id={mainPic.sys.id} />
      </div>
      <div className="blog-tile__title">
        <h5>{title}</h5>
      </div>
    </div>
  )
}

export default WorkPreview