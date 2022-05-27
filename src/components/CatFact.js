import * as React from 'react'

export const CatFact = (props) => {
	// Define state of the component - its properties/data
	const [data, setData] = React.useState()
	// useEffect is run every time the component/page is refreshed
	React.useEffect(() => {
		fetch('https://catfact.ninja/facts')
			.then((response) => response.json())
			.then((data) => setData(data.data))
	}, [])
	console.log(data)
	if (data) {
		return (
			<div>
				{data.map((data, i) => (
					<div className="row">
						{data.fact}
					</div>
				))}
			</div>
		)
	} else {
		return <div>Error</div>
	}
}
