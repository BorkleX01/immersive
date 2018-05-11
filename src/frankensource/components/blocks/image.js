import React 		from 'react'
import PropTypes 	from 'prop-types'
import { connect }	from 'react-redux'

class BlockImage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			showCredit: false
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState({
			showCredit: this.state.showCredit ? false : true
		})
	}

	render() {
		const { desktop, mobile, credit, asBackground, breakpoints, link_url } = this.props
		const { showCredit } = this.state
		if ( !desktop && !mobile ) {
			return (null)
		} else {
			var currentImage = desktop
			var style = {}

			if ( !breakpoints.isDesktop && !breakpoints.isTablet && !breakpoints.isLarge ) {
				currentImage = mobile
			}

			if ( asBackground ) {
				style.backgroundImage = `url(${currentImage.url})`
			}

			return (
				<div className="block-image">
					<div className={asBackground ? 'image image-background' : 'image'}>
						<div className="inner" style={style}>

							{credit ?
							<div className="image-credit">
								<button className="credit-toggle" onClick={this.handleClick}>i<span className="sr-only">Toggle tooltip</span></button>
								<div className={`credit-tooltip${showCredit ? '' : ' hidden'}`}>
									<div className="credit-tooltip-inner" dangerouslySetInnerHTML={{ __html: credit }}></div>
								</div>
							</div>
							: null}
							
							{!asBackground && !link_url ?
							<img 
								className="" 
								src={currentImage.url} 
								alt={currentImage.alt !== '' ? currentImage.alt : currentImage.title} />
							: null}
							{!asBackground && link_url ?
							<a href={link_url} target="_blank">
								<img 
									className="" 
									src={currentImage.url} 
									alt={currentImage.alt !== '' ? currentImage.alt : currentImage.title} />
							</a>
							: null}

						</div>
					</div>
				</div>
			)
		}
	}
}

BlockImage.propTypes = {
	breakpoints: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	const { breakpoints } = state

	return {
		breakpoints
	}
}

export default connect(mapStateToProps)(BlockImage)