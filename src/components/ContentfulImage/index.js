import React, { Component } from 'react'
import { resolveImageUrl } from 'api/posts'

class ContentfulImage extends Component {

	state = {
		url: 'http://putadefultimagehere.jpg'
	}

	async componentDidMount() {
		await this.resolveImage()
	}

	resolveImage = async () => {
		const { id } = this.props
		const { data } = await resolveImageUrl(id)

		this.setState({
			url: data.fields.file.url
		})
	}

	render() {
		const { alt } = this.props
		const { url } = this.state

		return (
			<img src={url} alt="alt"/>
		)
	}
}

export default ContentfulImage