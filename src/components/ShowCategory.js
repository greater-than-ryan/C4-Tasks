import * as React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
export const ShowCategory = (props) => {
	return (
		<>
			<div className="row-left">
				<h2>{props.title}</h2>
			</div>
			<div className="grid-container">
				{props.showArray.map((show, i) => (
					<div className="column" key={i}>
						<div className="card">
							<img src={show.image.href} alt={show.summary} />
							<div className="caption">
								<div className="row row-left">
									<img
										className="caption-text"
										src={
											'https://all4nav.channel4.com/globalnav/static/2.0.143/images/all4_logo_negative.svg'
										}
										alt="Channel 4 Logo"
										width="28em"
									></img>
								</div>
								<div className="row row-left">
									<Link
										className="caption-text"
										to={{
											pathname: `/brand/${show.title}`,
										}}
										state={{ show: show }}
									>
										{show.title}
									</Link>
								</div>
								<div className="caption-text">
									{show.summary}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	)
}
