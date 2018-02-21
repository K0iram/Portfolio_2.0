import React, { Component } from 'react'
import { resolveImageUrl } from 'api/posts'

class ContentfulImage extends Component {

	state = {
		url: 'http://placeholder.pics/svg/350/666666-C4C4C4/FFFFFF/%20',
		alt: ''
	}

	async componentDidMount() {
		await this.resolveImage()
	}

	resolveImage = async () => {
		const { id } = this.props
		const { data } = await resolveImageUrl(id)

		this.setState({
			url: data.fields.file.url,
			alt: data.fields.title
		})
	}

	render() {
		const { url, alt } = this.state

		return (
			<img src={`${url}?fit=scale`} alt={alt}/>
		)
	}
}

export default ContentfulImage