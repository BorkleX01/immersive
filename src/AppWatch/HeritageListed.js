import React from 'react'
import {serverString} from '../serverInfo.js'
import SwipeableViews from 'react-swipeable-views';
import { addClassToRoot } from './addClassToRoot.js';

class HeritageListed extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            presentIndex : null,
            index : 0
        };
        this.releaseSwipe = this.releaseSwipe.bind(this)
        window.yesItsAGlobalDealWithIt = {left:true, right:false}
        
    }

    
    releaseSwipe(index, type){
        //console.log(this.state.presentIndex);
        //this.setState({presentIndex:index})
        //console.log("---");
       
        if(index == 0)  {
            window.yesItsAGlobalDealWithIt = {left:true, right:false};
            
        } 
        else if(index == 6)  {
            window.yesItsAGlobalDealWithIt = {left:false, right:true};
            
        }
        else {
            window.yesItsAGlobalDealWithIt = {left:false, right:false}
            
        }
        //console.log(window.yesItsAGlobalDealWithIt);

    }
    //onSwitching={this.releaseSwipe}
    handleClick(dir) {
        
        var ind = this.state.index;
        
        if (dir === "left"){
            ind--;
            this.setState({index:ind})
            
        } else {
            ind++;
            this.setState({index:ind})
            
        }
        
    }

    componentDidMount(){
      addClassToRoot();     
    }

    render(){
        const { index } = this.state;
        return(
            <div className="heritageListedPage" style={{backgroundColor:"white"}}>
              <div className="topTitle">
              	<div className="tiny-heading watch-top watch-black" style={{zIndex: "100",top: "0px", left:"0"}}>Watch.</div>
                <div style={{color:"#DC7601", fontSize:"2em", fontWeight:"700", textAlign:"center"}}>Heritage listed</div>
                <div style={{fontWeight:"700", fontSize:"1", textAlign:"center"}}>This year’s crop of watches hauled from the archives</div>
              </div>
              <div className="heritageGallery">
            <SwipeableViews key={1} index={index} onChangeIndex={this.releaseSwipe} >
              
              <FeatureSpreadItem img="ulysse-nardin-diver-vintage-le-locle-web.jpg" >
                <div className="heritageImgBlockWrapper" style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" style={{height:"100%", height:"10vh", transform : "scaleX(-1)", opacity:"0"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                	<div>Ulysse Nardin Diver Le Locle, 1964.</div>
                	<img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh", opacity:"1"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>

              <FeatureSpreadItem img="seiko-prospex-first-dive-watch-re-issue-web.jpg" >
                <div className="heritageImgBlockWrapper" style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                <div>Seiko Prospex Dive Watch, 1965</div>
                <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh", opacity:"1"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>

              <FeatureSpreadItem img="rado-captain-cook-web.jpg" >
                <div className="heritageImgBlockWrapper" style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                    <div>Rado Hyperchrome Captain Cook, 1962.</div>
                    <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>

              <FeatureSpreadItem img="oris-big-crown-1917-web.jpg">
                <div className="heritageImgBlockWrapper" style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                    <div>Oris Big Crown, 1917.</div>
                    <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>

              <FeatureSpreadItem img="omega-1957-railmaster-web.jpg">
                <div className="heritageImgBlockWrapper" style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                    
                <div>Omega Railmaster, 1957.</div>

                <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>

              <FeatureSpreadItem img="longines-heritage-1945-web.jpg">
                <div className="heritageImgBlockWrapper" style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                <div>Longines Heritage, 1945.</div>
                <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>
              <FeatureSpreadItem img="iwc-mark-xi-web.jpg">
                <div className="heritageImgBlockWrapper" style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>

                <div>IWC Tribute to Mark Xl, 1948.</div>

                <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>
              
              <FeatureSpreadItem img="blancpain-fifty-fathoms-web.jpg" >
	        <div className="heritageImgBlockWrapper" style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{opacity:"1", height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                  <div>Blancpain Tribute to Fifty Fathoms
                    <br/>MIL-SPEC, 1950s.</div>
                  <img className="galleryNavArrow galleryNavArrowRight" style={{height:"10vh", opacity:"0"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>

            </SwipeableViews>
            </div>
            </div>
			
        )
    }
    
}
export default HeritageListed

const FeatureSpreadItem = (props) => {
    //console.log(props.pageTurn);
    //props.pageTurn ? window.yesItsAGlobalDealWithIt = {left:props.pageTurn.left, right:props.pageTurn.right} : null
    return(
        <div className="heritageImgBlock" style={{textAlign:"center"}}>
          <img className="heritageImg" style={{maxWidth:"620px", width:"auto", height:"100%"}} src={serverString+"/temp-eugene/jaeger/vintage/"+props.img}/>
          <div>
            <div style={{paddingTop:"2%"}}>
              {props.children}
            </div>
          </div>
        </div>)
}
