import React 				                   	from "react"
import ReactPlayer                              from 'react-player'

class Video extends React.Component {
  	constructor (props, contex) {
	    super(props, contex)
	    this.state = {
	    	playing: null,
	    	progress: 0
	    }
		this.handleClick = this.handleClick.bind(this)
	    this.onProgress = this.onProgress.bind(this)
	    this.buttonClick = this.buttonClick.bind(this)
  	}

    handleClick() {
    	document.getElementById("wide").classList.add("fade")
    	setTimeout(function(){ 
    		document.getElementById("wide").classList.add("goodbye")
    	}, 500);
    	this.setState({ playing: true })
    }

    buttonClick(playPause){
    	var playingPause = playPause ? false : true
		this.setState({
    		playing: playingPause
    	})

    }

	componentWillUnmount(){
		this.setState({
    		playing: false 
    	})
    }

    onProgress(amount){
    	var theAmount = amount.played.toFixed(2) * 100
		this.setState({
    		progress: theAmount
    	})  
	}


    render() {
        return (
        	<div style={{background:this.props.theData.background_color}} className="outerVideo">
	        	<div className="row">
		        	<div className="large-12 columns">
			        	<div className="video" id="wide" >
			        	<div className="video-title" onClick={() => this.handleClick()}>
			        		<div className="inside-video" dangerouslySetInnerHTML={ {__html: this.props.theData.video_title} }/>
			        		<span><i className="fa fa-play" aria-hidden="true"></i> Play</span>
			        	</div>
			        	<div className="poster" style={{backgroundImage: 'url(' + this.props.theData.poster.sizes.large + ')' }} onClick={() => this.handleClick()}/>
			                {this.props.theData.video ? <ReactPlayer 
			                	url={this.props.theData.video}  
			                	height={"544px"} width={"100%"} 
			                	playing={this.state.playing} 
			                	onProgress={this.onProgress} 
			                	controls={false} 
			                	loop={true} 
			                	preload={true} 
			                	progressFrequency={1000} 
			                	config={{ file: { attributes: { poster: this.props.theData.poster.sizes.large } } }}
			                	id="Video"/> : <div></div>
			                } 
				        	<div className={"play-pause " + this.state.playing} onClick={() => this.buttonClick(this.state.playing)}>
				        		<span><i className="fa fa-play" aria-hidden="true"></i></span>
				        		<span><i className="fa fa-pause" aria-hidden="true"></i></span>
				        	</div>
				        	<div className="progressOuter">
				        		<div className="videoProgress" style={{"width": this.state.progress + "%" }}/>
				        	</div>
				        </div>
				    </div>
				</div>
			</div>
        );
    }
}

export default Video