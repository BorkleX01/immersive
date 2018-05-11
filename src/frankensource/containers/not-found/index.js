import React from 'react'

export default class NotFound extends React.Component {
	render() {
		return (
			<main id="main" role="main">
				<article className="post">
					<div id="content" className="container-fluid">
						<div className="content">
							<div className="content-holder text-center">
								<h1><br />Oops!</h1>
								<h3>Sorry, we couldn't find that page.</h3>
							</div>
						</div>
					</div>
				</article>
			</main>
		)
	}
}