import React from 'react'
import ContentfulWorkImage from 'components/ContentfulImage/workImage'
import './style.css'

const WorkPreview = props => {
  const { fields } = props
  const { title, mainPic } = fields

  return (
    <div >
      <figure className="project">
        <div className="overlay"><h5>{title}</h5></div>
        <ContentfulWorkImage id={mainPic.sys.id} />
      </figure>
    </div>
  )
}

export default WorkPreview