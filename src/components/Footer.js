import * as React from 'react'

export const Footer = (props) => {
	return (
		<div className="margin-top-auto">
			<div className="footer">
				<div className="row row-center dark-bg">
					<div className="column">
						<ul>
							<li className="nav-item">Parental Control</li>
							<li className="nav-item">All 4 Accessibility</li>
							<li className="nav-item">How to Watch</li>
							<li className="nav-item">Help</li>
						</ul>
					</div>
				</div>
				<div className="row row-center">
					<div className="column footer-logo">
						<img
							src={
								'https://all4nav.channel4.com/globalnav/static/2.0.143/images/all4_logo_negative.svg'
							}
							width="35em"
							alt="Channel 4 Logo"
						></img>
					</div>
				</div>
				<div className="row row-center">
					<div className="column-center">
						<p>&copy; Channel Four Television Corporation 2022</p>
					</div>
				</div>
			</div>
		</div>
	)
}
