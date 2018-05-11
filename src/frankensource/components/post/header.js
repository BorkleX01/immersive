import React from 'react'
import BlockImage from '../blocks/image.js'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'


function hexToRgb(hex, alpha) {
   hex   = hex.replace('#', '');
   var r = parseInt(hex.length === 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
   var g = parseInt(hex.length === 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
   var b = parseInt(hex.length === 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
   if ( alpha ) { return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'; }
   else { return 'rgb(' + r + ', ' + g + ', ' + b + ')';}
}

export default class PostHeader extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			parallaxOffset: 0,
			scrollTop: (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop,
			maxScroll: 1600,
			height: window.innerHeight * 0.75
		}

		this.handleScroll = this.handleScroll.bind(this)
		this.updateParallaxOffset = this.updateParallaxOffset.bind(this)
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
	}

	handleScroll(event) {
		var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		if (width > 768){
			this.setState({
				parallaxOffset: this.updateParallaxOffset()
			})
		}
	}

	updateParallaxOffset() {
		const { maxScroll } = this.state
		let offset = document.body.scrollTop/60;

		if ( document.body.scrollTop < maxScroll && offset <= 15 ) {
			return `-${offset}%`
		} else {
			return '-15%'
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
      	this.updateWindowDimensions()
      	configureAnchors({offset: window.innerHeight * 0.75, scrollDuration: 1000})
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
		window.removeEventListener('resize', this.updateWindowDimensions)
	}

    updateWindowDimensions() {
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (width > 768){
	      this.setState({
	        height: (window.innerHeight * 0.75) //client request
	      })
	    }
	}

	render() {
		const { acf, title, excerpt } = this.props.postData
		const { sponsor_message, sponsor_logo, sponsor_message_color } = acf
		const { parallaxOffset } = this.state
		const headHeight = this.state.height

		const holderStyle = `.post .img-thumbnail .bg-holder {
			-ms-transform: translate(0,${parallaxOffset});
			-webkit-transform: translate(0,${parallaxOffset});
			transform: translate(0,${parallaxOffset});
		}`
		const headStyle = {backgroundColor: acf.show_color ? hexToRgb(acf.feature_bg_colour, acf.bg_color_opacity) : null}
		return (
			<header className="head text-center" style={{height: headHeight}}>
				<div className="bg-outer" style={headStyle}>
					{ sponsor_message || sponsor_logo ?
					<div className="head-top container-fluid">
						<div className="center-block content">
							<div className="info text-center">

								{sponsor_message ? <div className="sponsored" style={{color: sponsor_message_color}} dangerouslySetInnerHTML={{ __html: sponsor_message }}></div> : null}

								{sponsor_logo ?
								<div className="logo-sponsor">
									<a href="http://www.vodafone.com.au"><img src={sponsor_logo.url} alt={sponsor_logo.alt} width={sponsor_logo.width} height={sponsor_logo.height}></img></a>
								</div>
								: null}

							</div>
						</div>
					</div>
					: null}

					<div className="head-bottom container-fluid">
						<div className="center-block content">

							{title.rendered ?
							<div className="heading">
								<h1>{title.rendered}</h1>
							</div>
							: null}

							{excerpt.rendered ?
							<div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
							: null}
							<div className="read-more">
								<a className="btn btn-primary btn-lg" type="button" href="#anchor">
								<div className="downArrow bounce">
								  <img alt="" width="30" height="30" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjZmZmIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
								</div>
								Read more</a>
							</div>

						</div>
					</div>
				</div>
				<style dangerouslySetInnerHTML={{ __html: holderStyle }}></style>

				<div className="img-thumbnail">
					<div className="bg-holder">
						<BlockImage desktop={acf.feature_image_desktop} mobile={acf.feature_image_mobile} asBackground={true} />
					</div>
				</div>
				<ScrollableAnchor id={"anchor"}><span></span></ScrollableAnchor>
			</header>
		)
	}
}
