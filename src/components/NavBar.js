import * as React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
	return (
		<div className="nav-container">
			<ul className="navbar">
				<li className="nav-item">
					<img
						src={
							'https://all4nav.channel4.com/globalnav/static/2.0.143/images/all4_logo_negative.svg'
						}
						alt="Channel 4 Logo"
						width="35em"
					></img>
				</li>
				<li className="nav-item">
					<Link to="/">Home</Link>
				</li>
				<li className="nav-item">Sign in to My4</li>
				<li className="nav-item">Live TV</li>
				<li className="nav-item">Categories</li>
				<li className="nav-item">Box Sets</li>
				<ul className="navbar navbar-right">
					<li className="nav-item">Parental Controls: Off</li>
					<li className="nav-item">Search</li>
				</ul>
			</ul>
		</div>
	)
}
