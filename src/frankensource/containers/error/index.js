import React from 'react'

export default class Error extends React.Component {
	render() {
		return (
			<main id="main" role="main">
				<article className="post">
					<div id="content" className="container-fluid">
						<div className="content">
							<div className="content-holder text-center">
								<h1><br />Oops!</h1>
								<h3>Sorry, there was a problem accessing that page.</h3>
								<h3>Try refreshing this window to fix the issue.</h3>
							</div>
						</div>
					</div>
				</article>
			</main>
		)
	}
}