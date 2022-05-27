import * as React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Contact } from './views/Contact'
import './App.css'

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route
					path="/"
					element={<Home footerText="Ryan Nash &copy;" />}
				/>
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</HashRouter>
	)
}

export default App
