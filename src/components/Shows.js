import * as React from 'react'
import '../App.css'
import { ShowCategory } from './ShowCategory'
// TODO
// Separate this component into a main component, and show category components, this is the main window of content
const ShowsComponent = () => {
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
	console.log('Fetched data:', data)
	// TODO
	// Center image and text
	if (data) {
		return (
			<div className="inner-container">
				{data.map((data, i) => (
					<ShowCategory
						title={data.title}
						showArray={data.sliceItems.slice(0, 4)} // note I am only showing the first four
						// later I will add pagination like on the C4 site
					/>
				))}
			</div>
		)
	} else {
		return <div>'No data'</div>
	}
}

export default ShowsComponent
