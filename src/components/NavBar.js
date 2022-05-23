import * as React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
	return (
		<div className="nav">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	)
}
