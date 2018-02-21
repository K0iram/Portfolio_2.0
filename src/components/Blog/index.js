import React, { Component } from 'react'
import { fetchPosts } from 'api/posts'
import BlogPage from './blog-page'
import ReactLoading from 'react-loading'
import './style.css'


	class Blog extends Component {

		state = {
			blogPosts: [],
			isLoading: false,
			errMessage: ''
		}

	componentDidMount() {
		this.setState({isLoading: true})
		fetchPosts().then((res) => {
			this.setState({
				blogPosts: res.data.items,
				isLoading: false
			})
		})
		.catch((err) => {
			console.error(err)
			this.setState({
				isLoading: false,
				errMessage: "Something went wrong please refresh the page."
			})
		})
	}

	componentWillUnmount() {
		this.setState({errMessage: ''})
	}

	render() {
		return (
			<div className="blog">
				<div className="blog__title">
					<h1>Keep Up To Date</h1>
				</div>
				<div className="blog__container">
					{ this.state.blogPosts.map((post, i) => <BlogPage {...post} key={i}/>)}
					{ !!this.state.isLoading &&
						<div className="loader">
							<ReactLoading type="bubbles" color="#808080" className="loader-gif__load" />
						</div>
					}
					<div className="error">
						<h3>{this.state.errMessage}</h3>
					</div>
				</div>
			</div>
		)
	}
}

export default Blog