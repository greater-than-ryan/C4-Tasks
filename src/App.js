import * as React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Brand } from './views/Brand'
import './App.css'

function App() {
	// Store C4 fetched data
	const [data, setData] = React.useState()
	// Fetch C4 data on every render
	React.useEffect(() => {
		fetch('https://www.channel4.com/api/homepage', {
			method: 'GET',
		})
			.then((response) => response.json())
			//.then((data) => setData(data.slices[0].sliceItems))
			.then((data) => setData(data.slices))
	}, [])
	console.log(data)
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home data={data} />} />
				<Route path="/brand/:id" element={<Brand />} />
			</Routes>
		</HashRouter>
	)
}

export default App
