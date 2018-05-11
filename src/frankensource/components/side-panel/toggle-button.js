import React from 'react'
import PodcastIcon from '../../images/Podcast-icon.svg'
import X from '../../images/X.svg'

class SidePanelToggleButton extends React.Component{
	constructor(props) {
		super(props)

		this.state = {
			showSidePanel: false,
			fixToggle: false,
			fromTop: (window.innerHeight - 100), // lets sit the button slightly under the header image. If you change the header image then change this...
			podcastPlaying: this.props.playing
		}

		this.handleClick = this.handleClick.bind(this)
		this.handleScroll = this.handleScroll.bind(this)
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
	}

	handleScroll() {
		var wrapper =  document.getElementById('wrapper')
		if (typeof(wrapper) !== 'undefined' && wrapper !== null){
			const content = wrapper.getBoundingClientRect() || wrapper.getBoundingClientRect()
			const contentTop = content.top - 100
			if (contentTop < (this.state.fromTop * -1)){
				if ( !this.state.fixToggle ) {
					this.setState({
						fixToggle: true
					})
				}
			} else {
				if ( this.state.fixToggle ) {
					this.setState({
						fixToggle: false
					})
				}
			}
		}
	}

	handleClick(event) {
		const showSidePanel = this.state.showSidePanel ? false : true
		if ( showSidePanel ){
			document.getElementById("app-body").classList.add('side-panel-visible')
		} else {
			document.getElementById("app-body").classList.remove('side-panel-visible')
		}
		
		this.setState({
			showSidePanel: showSidePanel
		})
	}

    updateWindowDimensions() {
      this.setState({ 
        fromTop: (window.innerHeight - 100)
      })
    }

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
      	window.addEventListener('resize', this.updateWindowDimensions)
      	this.updateWindowDimensions()	
    }

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
		window.removeEventListener('resize', this.updateWindowDimensions)
	}

	render() {
		return (
			<button onClick={this.handleClick} className={"btn btn-primary btn-right side-panel-toggle-button " + this.state.fixToggle + " " + (this.state.showSidePanel ? "open" : null)} style={{top: this.state.fromTop}}>
				<img src={this.state.showSidePanel ? X : PodcastIcon} alt="" className="svg-icon pad-right in-pod" />
				<span>{!this.state.showSidePanel && !this.props.playing ? "Play Podcast" : null }{!this.state.showSidePanel && this.props.playing ? "Podcast Playing" : null}{window.innerWidth < 769 && this.state.showSidePanel ? "Close Podcast" : null }</span>
			</button>
		)
	}
}

export default SidePanelToggleButton