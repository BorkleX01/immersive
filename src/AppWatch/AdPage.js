import React                                from "react";
import ReactPlayer from 'react-player';

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
        document.getElementById("jaegerWatch").className = "unfaded";
        document.getElementById("wide").className = "faded";
    }

    handleImageLoads(p1){
        console.log(p1.target.id);
        this.state[p1.target.id] = true
        console.log("watch loaded: "+ this.state[p1.target.id]);
        this.state.jaegerWatch ? this.setState({playing:true}) : null;
    }

    componentDidMount(){
        //this.setState({playing:true})
    }
    
    render() {
        var playerOpacity = "0";
        var serverString;
        process.env.NODE_ENV === 'development' ? serverString="http://localhost/immersive/index.php" : serverString = window.location.protocol+"//"+window.location.host;
        var jaegerWatch = {display:this.state.jaegerWatch?"block":"none" , zIndex:"2", minWidth:"6rem", width:"25vh", position:"absolute", bottom:"-93vh", right:"4vh"};
        var leCoultreLogo = {minWidth:"8rem", width:"78%" };
        var blurbGrey = {minWidth:"6rem", width:"100%"};
        var twoButtons = {minWidth: "12rem", width: "16rem",  display:"flex", boxSizing: "initial", marginBottom: "1rem", justifyContent: "center", flexGrow: "0.35", flexWrap:"wrap"};
        var buttons = {flexBasis:"100px", flexGrow:"1", width:"8rem", boxSizing: "initial", textAlign: "center", height: "1.5rem", lineHeight:"1.5rem",  border: "1px solid black", fontFamily: "ProximaNova",fontWeight:"700" ,fontSize: "x-small", padding: "10px", marginLeft:"10px", marginTop:"10px"};
        var lowerRow = { display:"flex", alignItems:"baseline", flexWrap:"wrap", justifyContent:"space-around"};
        var background = {height:"65vh", width:"100%" ,backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url("+serverString+"/temp-eugene/jaeger/AFR_Xmas_Jaeger-Image.jpg" + ")" };
        var videoCSS = {zIndex:"1", marginTop:"-65vh", width:"65vh"};
//<div style={{padding: "1.5rem", position:"absolute"}}>
        return(
            <div className={"page subpages full-width"}>
              <div id="inner" style={{marginTop: "0px", height: window.innerHeight+"px"}}>
                <div className="inside" id="height">
                  <div style={{background: "#ffffff", height:"100%"}}>
	            <div className="row">
		      <div className="large-12 columns" style={{flexDirection:"column", display: "flex", justifyContent:"center", alignItems:"center", padding:"0px"}}>
                        <div style={background} id="vidBG" className="blur" onClick={() => this.handleClickVideo()}></div>
		        <div style={videoCSS} id="wide" className="unfade">
		          <ReactPlayer
                            onEnded={this.onEndVideo}
			    url={serverString+"/temp-eugene/jaeger/1-1_5S_ENTREPRENEUR-ARTISTE.mp4"}  
			    height={"100%"} width={"100%"} 
			    playing={this.state.playing} 
			    onProgress={this.onProgressVideo} 
			    controls={false} 
			    loop={false} 
			    preload={true} 
			    progressFrequency={1000} 
			    id="Video"/>
		        </div>
		        <div className={"play-pause " + this.state.playing} onClick={() => this.buttonClickVideo(this.state.playing, this.props)}>
		          <span><i className="fa fa-play"></i></span>
		          <span><i className="fa fa-pause"></i></span>
		        </div>
		      </div>
		    </div>
                    
                    <div className="row" style={{maxHeight:"50vh"}}>
                      <div className="large-9 medium-9 small-9 columns" style={lowerRow}>
                        <div style={{flexBasis:"12rem", flexGrow:"0.35"}} ><img  src={serverString + "/temp-eugene/jaeger/blurb-grey.svg"} style={blurbGrey}></img></div>
                        <div style={twoButtons}>
                          <div className="adButtons" style={buttons}>1800 888 918</div>
                          <div className="adButtons" style={buttons}>LEARN MORE</div>
                        </div>
                        <div style={{flexBasis:"12rem", flexGrow:"0.7", paddingLeft:"10%", marginRight:"-10%"}}>
                          <img src={serverString + "/temp-eugene/jaeger/Jaeger-logo.svg"} style={leCoultreLogo}/>
                        </div>
                      </div>
                      <div className="large-3 medium-3 small-3 columns"><img onLoad={this.handleImageLoads} className="faded" id="jaegerWatch" style={jaegerWatch} src={serverString + "/temp-eugene/jaeger/AFR_Xmas_Jaeger-watch-web-compressed.png"} ></img></div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default JaegerAd;





        
//width:"100%", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: "url("+serverString+"/temp-eugene/jaeger/AFR_Xmas_Jaeger-Image.jpg" + ")"
//var videoCSS = {opacity: props.state.playerOpacity , display: "inline-block", height: "100%"}
//<div className="poster" style={{ }} onClick={() => props.handleClickVideo(props)}/>
//<div style={{width:"100%", backgroundSize: "cover", backgroundImage: "url("+serverString+"/temp-eugene/jaeger/AFR_Xmas_Jaeger-Image.jpg" + ")"}} className={"cover-me "  + "show"}></div>
//config={{ file: { attributes: { poster: serverString+"/temp-eugene/jaeger/AFR_Xmas_Jaeger-Image.jpg" } } }}
//<div className="poster" style={{ }} onClick={() => props.handleClickVideo()}/>
//<div className="small-3 columns" style={jaegerWatch}><img src={serverString +  "/temp-eugene/jaeger/AFR_Xmas_Jaeger-watch.png"} serverString></img></div> 
