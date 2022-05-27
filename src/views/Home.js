import * as React from 'react'
import { CatFact } from '../components/CatFact'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import ShowsComponent from '../components/Shows'

export const Home = (props) => {
	return (
		// text is a prop we pass down to the Footer component
		<div className="App">
			<div className="container">
				<NavBar />
				<ShowsComponent />
				<Footer />
			</div>
		</div>
	)
}
