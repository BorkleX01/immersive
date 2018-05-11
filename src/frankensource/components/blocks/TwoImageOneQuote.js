import React from 'react'
import PropTypes 	from 'prop-types'
import { connect }	from 'react-redux'

class BlockTwoImageOneQuote extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			parallaxOffset: 0,
			scrollTop: document.body.scrollTop,
			maxScroll: 800,
			height: '0'
		}

		this.handleScroll = this.handleScroll.bind(this)
		this.updateParallaxOffset = this.updateParallaxOffset.bind(this)
	}

	handleScroll(event) {
		this.setState({
			parallaxOffset: this.updateParallaxOffset()
		})
	}

	updateParallaxOffset() {
		const quoteBlock = document.getElementById(this.props.theID)
		if (quoteBlock !== null ){
			const quoteTop = quoteBlock.offsetTop
			const scrollyTop = document.documentElement.scrollTop || document.body.scrollTop
			const theHeight = window.innerHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight)
			const scrollDistance = (quoteTop - scrollyTop - theHeight)
			const stopParralax = scrollDistance + (theHeight * 1.5)
			if  ( (stopParralax / 100)*0.8 < 10){
				if (scrollDistance < 0 && stopParralax > 0){
					return `${(stopParralax / 100)*0.8}%`
				}
			}  else {
					return `${(stopParralax / 100)*0.8}%`
				}
		}
	}

	componentWillMount() {
		this.setState({
			parallaxOffset: this.updateParallaxOffset()
		})
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
      	window.addEventListener('resize', this.updateWindowDimensions)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
		window.removeEventListener('resize', this.updateWindowDimensions)
	}


	render() {

		const { first_image, second_image, caption, caption_location, top_color, bottom_color, caption_color, theID, breakpoints } = this.props
		const { parallaxOffset } = this.state
		var holderStyle = ''
		if (breakpoints.isDesktop || breakpoints.isLarge){
			holderStyle = `#${theID} .first-image {
				-ms-transform: translate(0,${parallaxOffset});
				-webkit-transform: translate(0,${parallaxOffset});
				transform: translate(0,${parallaxOffset});
			}#${theID} .second-image {
				-ms-transform: translate(0,-${parallaxOffset});
				-webkit-transform: translate(0,-${parallaxOffset});
				transform: translate(0,-${parallaxOffset});
			}`
		}

			return (
				<div className={"outerQuote row " + caption_location} id={theID}>
	        		<span className="top-half" style={{background: top_color}}></span>
	        		<span className="bottom-half" style={{background: bottom_color}}></span>
			          	<div className="TwoImageOneQuote">
			          	    	<div className="first-image">
			          	    		{caption_location ? <span className="caption top" style={{color: caption_color}} dangerouslySetInnerHTML={{__html: caption}}/> : null}     
									<img src={first_image.url} alt={first_image.alt}/> 
									{caption_location ? null : <span className="caption" style={{color: caption_color}} dangerouslySetInnerHTML={{__html: caption}}/>}      
								</div>  
								{breakpoints.isDesktop || breakpoints.isLarge ? <img src={second_image.url} alt={second_image.alt} className={"second-image " + (caption_location ? true : false)}/> : null}	    		
						</div>
					{breakpoints.isDesktop || breakpoints.isLarge ? <style dangerouslySetInnerHTML={{ __html: holderStyle }}></style> : null }
		        </div>
		)
	}
}

BlockTwoImageOneQuote.propTypes = {
	breakpoints: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	const { breakpoints } = state
	return {
		breakpoints
	}
}

export default connect(mapStateToProps)(BlockTwoImageOneQuote)