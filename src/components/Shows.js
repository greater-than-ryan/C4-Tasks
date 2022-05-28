import * as React from 'react'
import '../App.css'
import { ShowCategory } from './ShowCategory'
// TODO
// Separate this component into a main component, and show category components, this is the main window of content
const ShowsComponent = (props) => {
	if (props.data) {
		return (
			<div className="inner-container">
				{props.data.map((data, i) => (
					<ShowCategory
						key={i}
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
