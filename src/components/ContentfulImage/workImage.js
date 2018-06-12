import React, { Component } from 'react'
import { resolveWorkImageUrl } from 'api/exampleWork'
import './style.css'

class ContentfulWorkImage extends Component {

  state = {
    url: '',
    alt: ''
  }

  async componentDidMount() {
    await this.resolveImage()
  }

  resolveImage = async () => {
    const { id } = this.props
    const { data } = await resolveWorkImageUrl(id)

    this.setState({
      url: data.fields.file.url,
      alt: data.fields.title
    })
  }

  render() {
    const { url, alt } = this.state

    return (
      <div className="iframe-loader">
        <img src={`${url}?fit=scale`} alt={alt}/>
      </div>
    )
  }
}

export default ContentfulWorkImage