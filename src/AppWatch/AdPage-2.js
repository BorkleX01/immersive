import React                                from "react";
import ReactPlayer from 'react-player';
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class JaegerAd extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ended: false,
            playing: false,
	    progress: 0,
            watchOpacity: 0,
            jaegerWatch: false
        };
        this.handleClickVideo = this.handleClickVideo.bind(this);
	this.onProgressVideo = this.onProgressVideo.bind(this);
	this.buttonClickVideo = this.buttonClickVideo.bind(this);
        this.onEndVideo = this.onEndVideo.bind(this);
        this.handleImageLoads = this.handleImageLoads.bind(this)
    }
    
    handleClickVideo(props) {
    	
    	setTimeout(function(){ 
    	    document.getElementById("wide").classList.add("goodbye");
    	}, 500);

        this.setState({ playing: true });
    }

    buttonClickVideo(playPause, props){
       
    	var playingPause = playPause ? false : true;
    	var playing = this.state.playing ? false : true;
	this.setState({
    	    playing: playingPause, playing: playing
    	});
        if (playing){
           
            document.getElementById("vidBG").className = "blur";
            document.getElementById("jaegerWatch").className = "faded";
            document.getElementById("wide").className = "unfaded";
        } 
    }
    
    onProgressVideo(amount){
        
    	var theAmount = amount.played.toFixed(2) * 100;
	this.setState({
    	    progress: theAmount
    	});
    }
    
    onEndVideo(){
       
        this.setState({ended:true , playing:false});
        document.getElementById("vidBG").className = "not-blur";
        document.getElementById("wide").className = "faded";
        document.getElementById("jaegerWatch").className = "unfaded";
        
    }

    handleImageLoads(p1){
        
        this.state[p1.target.id] = true
        
        //this.state.jaegerWatch ? this.setState({playing:true}) : null;
    }

    componentDidMount(){
        addClassToRoot();
        var isiPad = navigator.userAgent.match(/iPad/i) != null;

        if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i) || isiPad )) {
        	this.setState({ playing:false});
        	console.log('iPhone/iPad detected, playing false');
        	this.setState({ended:true , playing:false});
        	document.getElementById("vidBG").className = "not-blur";
        document.getElementById("wide").className = "faded";
        document.getElementById("jaegerWatch").className = "unfaded";
        }else{
        	this.setState({ playing:true});
        	
        }
        //console.log("componentDidMount: " + this.state.playing);
    }
    componentDidUpdate (){
       
        
    }
    render() {
        var playerOpacity = "0";
        // var serverString;
        // process.env.NODE_ENV === 'development' ? serverString="http://localhost/immersive" : serverString = window.location.protocol+"//"+window.location.host;
        var jaegerWatch = {};
        var leCoultreLogo = {};
        var blurbGrey = {};
        var twoButtons = {};
        var buttons = {};
        var lowerRow = {};
        var background = {height:"65vh", width:"100%" ,backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url("+serverString+"/temp-eugene/jaeger/AFR_Xmas_Jaeger-Image.jpg" + ")" };
        var videoCSS = {};

        return(
            <div className={"page subpages full-width"}>
              <div id="inner" style={{marginTop: "0px"}}>
                <div className="inside" id="height">
                  <div style={{background: "#ffffff", height:"100%"}}>
                    <div style={{top:"43.5vh", left:"48.8vw", zIndex:"2"}} className={"play-pause " + this.state.playing} onClick={() => this.buttonClickVideo(this.state.playing, this.props)}>
		      <span><i className="fa fa-play"></i></span>
		      <span><i className="fa fa-pause"></i></span>
		    </div>
                    <div style={{position:"absolute",  zIndex:"1", height:"100vh", display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}} id="wide" className=".unfaded vid-padding-resp">
                      <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                        <div onClick={() => this.onEndVideo()} style={{alignSelf:"flex-end"}}>
                          <img style={{ width:"75px", paddingRight:"10px", paddingBottom:"5px"}} src={serverString+"/temp-eugene/jaeger/Close.svg"}/>
                        </div>
		        <ReactPlayer
                          onEnded={this.onEndVideo}
		          url={serverString+"/temp-eugene/jaeger/15_DANDY-BIKER.mp4"}
                          height={"100%"} width={"100%"} 
		          playing={this.state.playing} 
		          onProgress={this.onProgressVideo} 
		          controls={false} 
		          loop={false} 
		          preload={true} 
		          progressFrequency={1000} 
		          id="Video"/>
                      </div>
                    </div>
                    <div id="vidBG" className="blur">
		      <div style={{flexDirection:"column", display: "flex", justifyContent:"center", alignItems:"center"}}>
                        <div className="bannerHeroJC"> <img className="bannerHeroIMG" src={serverString+"/temp-eugene/jaeger/AFR_Xmas_Jaeger-Image.jpg"}/></div>
                        <div style={{position: "absolute",top: "6vh",width: "100%",textAlign: "center"}}>
                          <img src={serverString + "/temp-eugene/jaeger/Jaeger-logo-white.svg"} style={{width:"270px"}}/>
                        </div>
                        <div style={{top:"43.5vh", left:"48.8vw"}}className={"play-pause " + this.state.playing} onClick={() => this.buttonClickVideo(this.state.playing, this.props)}>
		          <span><i className="fa fa-play"></i></span>
		          <span><i className="fa fa-pause"></i></span>
		        </div>
		      </div>
                      <div style={{display:"flex", alignItems:"center", flexDirection:"column", paddingBottom:"5vh" , marginTop: "-37vh"}}  >
                        <div className="watch-ad-watch-img-showpiece-resp">
                          <img id="jaegerWatch" onLoad={this.handleImageLoads} className=""  style={{height:"50vh"}} src={serverString + "/temp-eugene/jaeger/AFR_Xmas_Jaeger-watch-web-compressed.png"} />
                        </div>
                        <div style={{fontFamily:"ProximaNova", fontWeight:"700", fontSize:"3em", lineHeight:"1em"}} className="watch-ad-alignment-resp relignText">
                          <img style={{width:"35vw", display:"block"}} src={serverString+"/temp-eugene/jaeger/reverso-classic.svg"}/>
                          <img style={{width:"30vw"}} src={serverString+"/temp-eugene/jaeger/large-duoface.svg"}/>
                          <div className="secondary-text-resp">
                            <img style={{width:"20vw"}} src={serverString+"/temp-eugene/jaeger/Automatique@2x.png"}/>
                          </div>
                        </div>
                        
                        <div style={{}}>
                          <div className="adButtons" style={{}}><a href="http://www.jaeger-lecoultre.com/au/en/watches/reverso.html" target="_blank">DISCOVER NOW</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
        )
    }
}

export default JaegerAd;
