import React from 'react'
import PropTypes 	from 'prop-types'
import { connect }	from 'react-redux'

class BlockAd extends React.Component{
	render() {
		const { ad_image, ad_image_mobile, ad_link, top_color, bottom_color, breakpoints } = this.props
		if ( !ad_link ) {
			return (null)
		} else {
			var currentImage = ad_image_mobile
			if ( !breakpoints.isMobile && !breakpoints.isTablet ) {
				currentImage = ad_image
			}
			return (
				<div className="block-ad row">
					<span className="top-half" style={{background: top_color}}></span>
		        	<span className="bottom-half" style={{background: bottom_color}}></span>
						<div className="ad">
							<span>Advertisement</span>
							<a href={ad_link} className="inner" target="_blank">
								<img src={currentImage.url} alt={ad_image.alt} />
							</a>
						</div>
				</div>
			)
		}
	}
}

BlockAd.propTypes = {
	breakpoints: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	const { breakpoints } = state

	return {
		breakpoints
	}
}

export default connect(mapStateToProps)(BlockAd)