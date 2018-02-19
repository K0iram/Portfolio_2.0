import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'


class Home extends Component {

	componentDidMount() {
		window.drift.show()
	}
	
	componentWillUnmount() {
		window.drift.hide()
	}

	render() {
		return (
			<div className="home-container">
				<div className="hero-container">
					<div className="hero">
						<h2>Mario Kennedy</h2>
						<h5>Web Developer</h5>
					</div>

				</div>
				<div className="blurb-container">
					<p>
						Need a website? 
						<br/>    
						<Link to='/contact'><button>Lets talk!</button></Link>
					</p>
				</div>
			</div>
		)
	}
}

export default Home;
