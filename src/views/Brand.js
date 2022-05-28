import * as React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { useLocation } from 'react-router-dom'
export const Brand = (props) => {
	const location = useLocation()
	let showData = location.state.show
	console.log(showData)

	return (
		<div className="App">
			<div className="container">
				<NavBar />
				<h1>{showData.title} Brand page</h1>
				<Footer />
			</div>
		</div>
	)
}
