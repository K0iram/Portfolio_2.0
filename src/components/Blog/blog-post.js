import React, { Component } from 'react'
import { fetchPost } from 'api/posts'

import './style.css'


class BlogPost extends Component {

	componentDidMount() {
		fetchPost(this.props.match.params.postId).then((res) => {
			this.setState({postBody: res.data.fields.body})
		})
	}

	state = {
		postBody: ''
	}

	createMarkup = () => (
  {__html: this.state.postBody}
	)

  render() {
    return (
     <div dangerouslySetInnerHTML={this.createMarkup()} />
    )
  }
}

export default BlogPost;