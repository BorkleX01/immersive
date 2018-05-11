import React, {Component}   from 'react'
//import ReactPlayer          from '../../vendor/react-player/ReactPlayer.js'
import ReactPlayer          from 'react-player'
import Slider               from 'react-rangeslider'
import axios                from 'axios'

//all our images for the controls
import PlayIcon             from '../../images/Play-black.svg'
import PauseIcon            from '../../images/Pause-black.svg'
import PreviousIcon         from '../../images/Next R.svg'
import NextIcon             from '../../images/Next L.svg'
import NoSound              from '../../images/no-sound.svg'
import Sound                from '../../images/Volume.svg'

function timeFormat(seconds) {
	var mins = Math.floor(seconds / 60)
	var secs = Math.floor(seconds - (mins * 60))

	secs = secs.toString().length > 1 ? secs : '0' + secs

	return mins+':'+secs
}

class Podcast extends Component {

	constructor (props, contex) {
		super(props, contex)
		
		this.state = {
			playing: false,
			//progress: 0, //%
			playedSeconds: 0, // amount of seconds
			duration: 0,
			allPodcasts: [],
			currentPodcast: {},
			podcastNumber: 0,
			volume: 0.8,
			max: 0,
			seeking:false
		}

		this.onProgress = this.onProgress.bind(this)
		this.onEnded = this.onEnded.bind(this)
		this.playPauseClick = this.playPauseClick.bind(this)
		this.onDuration = this.onDuration.bind(this)
		this.nextPodcast = this.nextPodcast.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.finishChange = this.finishChange.bind(this)
		this.volumeChange = this.volumeChange.bind(this)
		this.downloadEvent = this.downloadEvent.bind(this)
	}

	componentWillMount(){
		axios.get('https://omny.fm/api/orgs/2a6b7e06-e480-48f0-8d1e-a791000e2b00/playlists/' + unescape(this.props.podcastID) + '/clips').then((response) => {
			var currentPodcast, podcastNumber

			for ( let i = 0; i < response.data.Clips.length; i++ ) {
				if ( response.data.Clips[i].Id === this.props.clipID ) {
					currentPodcast = response.data.Clips[i]
					podcastNumber = i
					break
				}
			}

			this.setState({
				allPodcasts: response.data.Clips,
				currentPodcast, 
				podcastNumber
			})          
		}).catch((e) => {
			console.error(e)
		});     
	}

	componentWillReceiveProps(nextProps) {
		const { allPodcasts, currentPodcast } = this.state

		if ( currentPodcast.Id !== nextProps.clipID ) {
			var current, podcastNumber

			for ( let i = 0; i < allPodcasts.length; i++ ) {
				if ( allPodcasts[i].Id === nextProps.clipID ) {
					current = allPodcasts[i]
					podcastNumber = i
					break
				}
			}

			this.setState({
				currentPodcast: current,
				podcastNumber,
				playing: false,
				progress: 0,
				playedSeconds: 0
			})

			this.props.handler(false)
		}
	}

	volumeChange(value){
		this.setState({
		  volume: (value/100)
		})
	}

	handleChange(value){
		this.setState({
			playedSeconds: Number(value),
			progress: Number(value),
			seeking: true
		})

		this.refs.player.seekTo(value)
	}

	finishChange(){
		this.setState({
			seeking: false
		})
	}

	playPauseClick(playPause){
		var playPaused = playPause ? false : true
		
		this.setState({
			playing: playPaused
		})

		this.props.handler(playPaused)

		if (playPaused === true){
			window.ga('send', 'event', 'Play Podcast', 'clicked', this.props.pageLink)         
		}
	}

	downloadEvent(url){
		window.ga('send', 'event', 'Download Podcast', 'clicked', this.props.pageLink)       
	}

	onDuration(amount){
		if (amount){
			this.setState({
				duration: amount,
				max: Number(amount)
			})
		}
	}

	onProgress(amount){
		const { seeking, playing } = this.state

		if (!seeking && playing){
			if (amount.played !== undefined){
				this.setState({
					playedSeconds: Number(amount.playedSeconds.toFixed(2))
				})
			}
		}
	}

	onEnded(){
		this.setState({
			playing: false,
			progress: 0,
			playedSeconds: 0
		})
	}

	nextPodcast(direction){
		const { podcastNumber, allPodcasts } = this.state

		const theLength = allPodcasts.length
		var currentPodcastNum = podcastNumber
		var sum

		if (direction === 'next'){
			if ((theLength - 1) === currentPodcastNum) {
				sum = 0
			} else {
				sum = currentPodcastNum + 1
			}

			this.setState({
				currentPodcast: allPodcasts[sum],
				podcastNumber: sum,
				playedSeconds: 0,
				progress: 0,
				playing: false
			})

			this.props.handler(false)
		}
		if (direction === 'prev'){
			if (currentPodcastNum === 0) {
				sum = (theLength -1)
			} else {
				sum = currentPodcastNum - 1
			}

			this.setState({
				currentPodcast: allPodcasts[sum],
				podcastNumber: sum,
				playedSeconds: 0,
				progress: 0,
				playing: false
			})

			this.props.handler(false)
		}
	}

	render() {
		const { allPodcasts, currentPodcast, playedSeconds, playing, volume, max, /*progress,*/ duration } = this.state
		const finalProgress = timeFormat(playedSeconds)
		const finalDuration = timeFormat(duration)

		// assign current clip object
		var clip = currentPodcast

		// check that the current clip is defined
		if ( currentPodcast === undefined && allPodcasts.length ) {
			// undefined but other clips exist, use first
			clip = allPodcasts[0]
		} else if ( currentPodcast === undefined && !allPodcasts.length ) {
			// undefined and no other clips exist, set clip to false
			clip = false
		}

		if ( clip ){
			return (
				<div className="podcast-wrapper" >

					<img alt={clip.Title + " image"} src={clip.ImageUrl} id="on-top"/>

					<ReactPlayer 
						url={clip.AudioUrl}  
						playing={playing} 
						onDuration={this.onDuration}
						onProgress={this.onProgress}
						onEnded={this.onEnded}
						volume={volume}
						controls={false} 
						height={0}
						width={0}
						loop={false} 
						preload={true} 
						ref="player"
						progressFrequency={1000} />

					<Slider
						min={0}
						max={max}
						value={playedSeconds}
						step={1}
						onChange={this.handleChange}
						onChangeComplete={this.finishChange}
						tooltip={false}                          
						id="scrub"/>

					<div className="elapsed-remaining">
						<span className="elapsed">{finalProgress}</span>
						<span className="remaining">{finalDuration}</span>
					</div>

					<h4>{clip.Title}</h4>

					<div className="control-wrap">
						<img alt="next arrow" src={NextIcon} className="next next-prev" onClick={() => this.nextPodcast('prev')}/>
						<button className={"play-pause " + playing} onClick={(event) => { this.playPauseClick(playing) }}><img alt="play pause button" src={playing ? PauseIcon : PlayIcon} /></button>
						<img alt="previous arrow" src={PreviousIcon} className="prev next-prev" onClick={() => this.nextPodcast('next')}/>
					</div>

					<div className="volume-block">
						<img alt="no sound" src={NoSound} className="sound no-sound" />
							<Slider
								min={0}
								max={100}
								value={(volume * 100)}
								step={1}
								onChange={this.volumeChange}
								tooltip={false}
								className="volume" />  
						<img alt="increase sound" src={Sound} className="sound full"/>
					</div>

					<span onClick={(event) => { this.downloadEvent(clip.AudioUrl)}}>
						<a href={clip.AudioUrl}>
							<button className="btn btn-primary btn-lg">Download Podcast</button>
						</a>
					</span>

				</div>
			);
		} else {
			return (
				<div className="podcast-wrapper text-center">
					<small>
						<h5>Sorry, there was a problem loading the podcast.</h5>
						<p>Try refreshing this window to fix the issue.</p>
					</small>
				</div>
			);
		}
	}
}

export default Podcast
