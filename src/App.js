import * as React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Brand } from './views/Brand'
import './App.css'

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route
					path="/"
					element={<Home footerText="Ryan Nash &copy;" />}
				/>
				<Route path="/brand" element={<Brand />} />
			</Routes>
		</HashRouter>
	)
}

export default App
