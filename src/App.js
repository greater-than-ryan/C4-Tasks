import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home'
import { Contact } from './views/Contact'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
