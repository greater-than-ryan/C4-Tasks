import * as React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

export const Brand = () => {
	return (
		<div className="App">
			<div className="container">
				<NavBar />
				<h1>Brand page</h1>
				<Footer />
			</div>
		</div>
	)
}
