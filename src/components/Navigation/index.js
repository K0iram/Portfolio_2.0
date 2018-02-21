import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './style.css'


class Navigation extends Component {

	render() {
		return (
			<div className="nav-bar">
				<div className="nav-bar__links">
					<ul className="nav-menu">
						<li><NavLink to="/home" className="nav-link" activeClassName="active"><p>Home</p></NavLink></li>

						<li><NavLink to="/portfolio" className="nav-link" activeClassName="active"><p>Portfolio</p></NavLink></li>

						<li><NavLink to="/about" className="nav-link" activeClassName="active"><p>About</p></NavLink></li>

						<li><NavLink to="/contact" className="nav-link" activeClassName="active"><p>Contact</p></NavLink></li>
					</ul>
				</div>
			</div>
		)
	}
}



export default Navigation
