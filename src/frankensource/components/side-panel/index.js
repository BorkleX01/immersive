import React 						from 'react'
import podcastbg 					from '../../images/podcast-repeat.jpg'
import Podcast 						from './podcast.js'
import SidePanelToggleButton 		from './toggle-button.js'


export default class SidePanel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            playing: false
        }
    	this.handler = this.handler.bind(this)
	}

	handler(playing) {
       	this.setState({
            playing: playing
        })		
	}

	render() {
		const style = {
			backgroundImage: `url(${podcastbg})`
		}
		return (
			<div>
				<SidePanelToggleButton playing={this.state.playing}/>
				<div className="side-panel"  id="podcast" style={style}>
	                <Podcast 
	                	handler={this.handler} 
	                	pageLink={this.props.postData.link} 
	                	podcastID={this.props.postData.acf.podcast_playlist_id} 
	                	clipID={this.props.postData.acf.podcast_clip_id} />
	            </div>
	        </div>
		)
	}
}