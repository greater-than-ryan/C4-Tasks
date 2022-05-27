import * as React from 'react'
import '../App.css'

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
			.then((data) => setData(data.slices[0].sliceItems))
	}, [])
	console.log('Fetched data:', data)
	// TODO
	// Center image and text
	if (data) {
		return (
			<div>
				<div className="row">
					{data.map((data, i) => (
						<div className="column card">
							<img src={data.image.href} width="300px" />
							{data.title}
						</div>
						//<div>{data.image}</div>
					))}
				</div>
			</div>
		)
	} else {
		return <div>'No data'</div>
	}
}

export default ShowsComponent
