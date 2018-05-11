import React from 'react'
import YouTube from 'react-youtube'
import PlayIcon from '../../images/Play.svg'
import PauseIcon from '../../images/Pause.svg'

export default class BlockVideo extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			showOverlay: true, // show/hide the overlay
			videoBlockId: 'post-video-' + props.videoKey, // unique id for the block
			videoReady: false, // has the video loaded or is it ready to play
			videoPlaying: false, // is the video playing
			player: {} // player element for JS api's
		}

		this.handleOverlayClick = this.handleOverlayClick.bind(this)
		this.handleVideoReady = this.handleVideoReady.bind(this)
		this.handleVideoStateChange = this.handleVideoStateChange.bind(this)
		this.handleVideoPlay = this.handleVideoPlay.bind(this)
		this.handleVideoPause = this.handleVideoPause.bind(this)
		this.handleVideoSeek = this.handleVideoSeek.bind(this)
		this.updateVideoSeek = this.updateVideoSeek.bind(this)
	}

	// Handle clicks on the overlay layer
	handleOverlayClick(event) {
		event.preventDefault()

		const { videoReady, player } = this.state
		const { video_type } = this.props

		// Only handle click if video is ready to play
		if ( videoReady ){
			// Hide the overlay
			this.setState({
				showOverlay: false
			})

			// Youtube
			if ( video_type === 'youtube' ) {
				player.playVideo()

			// Wordpress / HTML5
			} else if ( video_type === 'wordpress' ) {
				player.play()
			}
		}
	}

	// Sets some basic state for each video when it is ready to play or has loaded
	handleVideoReady(event) {
		// Set the video as ready and add video element to state for JS api's
		if ( !this.state.videoReady ) {
			this.setState({
				videoReady: true,
				player: event.target
			})
		}
	}

	// Monitor and perform actions on state change
	handleVideoStateChange(event) {
		const { video_type } = this.props

		var timer = false // Video position update timer for seek bar

		// Youtube
		if ( video_type === 'youtube' ) {
			switch ( event.data ) {
				case -1: // unstarted
				case 0: // ended
				case 2: // paused
					// clear timer
					if ( timer ) {
						clearInterval(timer)
						timer = false
					}
					this.setState({
						videoPlaying: false
					})
					break;
				case 1: // playing
					// create timer
					timer = setInterval(this.updateVideoSeek, 200)
					this.setState({
						videoPlaying: true
					})
					break;
				default:
					if ( timer ) {
							clearInterval(timer)
							timer = false
						}
						this.setState({
							videoPlaying: false
					})
			}

		// Wordpress / HTML5
		} else if ( video_type === 'wordpress' ) {
			switch ( event.type ) {
				case 'pause': // paused
				case 'ended': // paused
					// clear timer
					if ( timer ) {
						clearInterval(timer)
						timer = false
					}
					this.setState({
						videoPlaying: false
					})
					break;
				case 'play': // play
				case 'playing': // playing
					// create timer
					timer = setInterval(this.updateVideoSeek, 200)
					this.setState({
						videoPlaying: true
					})
					break;
				default:
					if ( timer ) {
							clearInterval(timer)
							timer = false
						}
						this.setState({
							videoPlaying: false
					})
			}
		}
	}

	handleVideoPlay(event) {
		const { player } = this.state
		const { video_type } = this.props

		// Youtube
		if ( video_type === 'youtube' ) {
			player.playVideo()

		// Wordpress / HTML5
		} else if ( video_type === 'wordpress' ) {
			player.play()
		}
	}

	handleVideoPause(event) {
		const { player } = this.state
		const { video_type } = this.props

		// Youtube
		if ( video_type === 'youtube' ) {
			// Pause video
			player.pauseVideo()

		// Wordpress / HTML5
		} else if ( video_type === 'wordpress' ) {
			// Pause video
			player.pause()
		}
	}

	// Update video to time set by user seek
	handleVideoSeek(event) {
		const { player } = this.state
		const { video_type } = this.props

		const x = event.nativeEvent.offsetX // X position of user click
		const width = event.currentTarget.offsetWidth // width of video seek bar container
		const duration = video_type === 'youtube' ? player.getDuration() : player.duration // video duration

		var seekPosition = (duration / width) * x // time in seconds to update video current position to

		// Youtube
		if ( video_type === 'youtube' ) {
			// Move video to specified time
			player.seekTo(seekPosition)

		// Wordpress / HTML5
		} else if ( video_type === 'wordpress' ) {
			// Move video to specified time
			player.currentTime = seekPosition
		}
	}

	// Update the seek bar position based on current time and video duration
	updateVideoSeek() {
		const { player, videoBlockId } = this.state
		const { video_type } = this.props

		const playerSeekProgress = document.getElementById(videoBlockId).querySelector('.video-progress') // Seek inner bar

		// Youtube
		if ( video_type === 'youtube' ) {
			// Set seek bar width
			playerSeekProgress.style.width = ((player.getCurrentTime() / player.getDuration()) * 100) + '%'
		
		// Wordpress / HTML5
		} else if ( video_type === 'wordpress' ) {
			// Set seek bar width
			playerSeekProgress.style.width = (player.currentTime / player.duration * 100) + '%'
		}
	}

	render() {
		const { video_type, video_poster, video_id, video_title, video_mp4, video_ogg, video_webm, isFeature } = this.props
		const { showOverlay, videoBlockId, videoPlaying, videoReady } = this.state

		// Overlay background image
		const style ={
			backgroundImage: `url(${video_poster.url})`
		}

		// Youtube video options
		const youtubeVideoOptions = {
			width: 640,
			height: 360,
			playerVars: {
				modestbranding: 1,
				showinfo: 0,
				rel: 0,
				controls: 0,
				disablekb: 1
			}
		}

		if ( !video_id && !video_mp4 && !video_ogg && !video_webm ) {
			return (null)
		} else {
			return (
				<div className={`block block-video row ${!videoReady ? 'block-loading' : null} ${isFeature ? 'block-video-feature' : null}`} id={videoBlockId}>
					<div className="video">
						
						{/* Video overlay */}
						{showOverlay && video_type !== 'brightcove' ?
						<span className="overlay" onClick={(event) => this.handleOverlayClick(event)} style={style}>
							
							{isFeature ? <div className="overlay-blur"><div className="overlay-blur-inner" style={style}></div></div> : null}
							
							<div className="overlay-inner">
								<div className="content">
									
									{isFeature ? <span dangerouslySetInnerHTML={{ __html: video_title }}></span> : null}
									
									<span className="video-overlay-play">
										<img src={PlayIcon} alt="play" className="play icon" /> PLAY
									</span>
								</div>
							</div>
						</span>
						: null }
						
						{/* Custom video controls */}
						{video_type !== 'brightcove' ?
						<div className={showOverlay ? 'video-controls hidden' : 'video-controls'}>
							
							{!videoPlaying ? 
							<button className="video-play" onClick={this.handleVideoPlay}><img src={PlayIcon} alt="play icon" className="play icon" /><span className="sr-only">Play</span></button>
							: <button className="video-pause" onClick={this.handleVideoPause}><img src={PauseIcon} alt="pause icon" className="pause icon" /><span className="sr-only">Pause</span></button>}
							
							<div className="video-seek" onClick={(e) => this.handleVideoSeek(e)}>
								<div className="video-progress"></div>
							</div>

						</div>
						: null}

					{/* Custom full video invisible play/pause overlay to duplicate Youtube video click play and pause */}
						{video_type === 'wordpress' && !videoPlaying ? <div className="video-play-overlay" onClick={this.handleVideoPlay}></div> : null}
						{video_type === 'wordpress' && videoPlaying ? <div className="video-pause-overlay" onClick={this.handleVideoPause}></div> : null}
						
						{/* Youtube */}
						{video_type === 'youtube' ?
						<YouTube 
							videoId={video_id} 
							id={videoBlockId} 
							onReady={this.handleVideoReady} 
							onStateChange={this.handleVideoStateChange} 
							opts={youtubeVideoOptions} />
						: null}

						{/* Wordpress / HTML5 */}
						{video_type === 'wordpress' ?
						<video 
							onLoadedMetadata={(event) => this.handleVideoReady(event)} 
							onPlay={this.handleVideoStateChange} 
							onPause={this.handleVideoStateChange} 
							poster={video_poster.url} 
							width="640" 
							height="360" 
							controls={false}
							autoPlay={false}
							allowFullScreen>
							<source src={video_mp4.url} type="video/mp4" />
							<source src={video_ogg.url} type="video/ogg" />
							<source src={video_webm.url} type="video/webm" />
							Sorry, your browser does not support the video tag.
						</video>
						: null}

						{/* Brightcove */}
						{video_type === 'brightcove' ?
						<iframe 
							title="brighcover movie"
							onLoad={this.handleVideoReady} 
							id={video_id} 
							src={`//players.brightcove.net/3910869709001/r1iMXzgF_default/index.html?videoId=${video_id}`}
							allowFullScreen>
						</iframe>
						: null}
					</div>
				</div>
			)
		}
	}
}