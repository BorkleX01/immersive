import React from 'react'
import {serverString} from '../serverInfo.js'
import SwipeableViews from 'react-swipeable-views';
import { addClassToRoot } from './addClassToRoot.js';


class DressingWrist extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            presentIndex : null,
            index : 0
        };
        this.releaseSwipe = this.releaseSwipe.bind(this)
        window.yesItsAGlobalDealWithIt = {left:true, right:false}
        
    }

    releaseSwipe(index, type)
    {
        //console.log(this.state.presentIndex);
        //this.setState({presentIndex:index})
        //console.log("---");
        
        
        if(index == 0)  {
            window.yesItsAGlobalDealWithIt = {left:true, right:false};
            
        } 
        else if(index == 5)  {
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
    
    componentDidMount() {
      addClassToRoot();     
    }

    render(){
        const { index } = this.state;
        return(
        		<div className="dressingWristPage">
                          <SwipeableViews key={1} index={index} className="hello" onChangeIndex={this.releaseSwipe} style={{backgroundColor:"white"}}>
              <FeatureSpreadItem img="Watch-552.png" >
              <div className="dressingWristHeadings">
	              	      <h1>Dressing the wrist</h1>
	              	      <p><em><span className="personTitle">Photographer</span>&nbsp;<span className="personName">Anna&nbsp;Pogossova</span> <span className="gap">|</span> <span className="personTitle">Stylist</span>&nbsp;<span className="personName">Virginia&nbsp;van&nbsp;Heythuysen</span> <span className="gap">|</span> <span className="personTitle">Hair&nbsp;&&nbsp;Make&nbsp;Up</span>&nbsp;<span className="personName">Desiree&nbsp;Wise</span></em></p>
	              	     </div>
	        <div style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>

                  <img className="galleryNavArrow galleryNavArrowLeft" style={{opacity:"0", height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                    <div>
                      <p>Chanel Code Coco watch, iconic house cues from clasp to quilting, $7200.<br/> Bottega Veneta silk jersey dress, $4070; Prada handbag, $2750.</p>
                    </div>
                    <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>
              <FeatureSpreadItem img="Watch-562.jpg">
                <div style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                <div>
              	  <p>Bulgari Octo Finissimo Automatic, the world’s slimmest self-winder, $19,250.<br/> Paul Smith cotton and linen jacket, $637.</p>
                </div>
                <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>
              <FeatureSpreadItem img="Watch-555.png">
                <div style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>

                <div>
                  <p>Hublot Big Bang One Click has a quick-release strap that lets you change the look, $18,900.<br/> Gucci jacket, $3010 and pants, $1660; Alex Fraga sterling silver ring with drusy stone from Pierre Winter Fine Jewels, $480.</p>
                </div>

                <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>
              <FeatureSpreadItem img="Watch-556.png">
                <div style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                    
                <div>
                  <p>Tank Louis Cartier hand-wound calibre with 41 brilliant-cut diamonds, $29,700. Bally brocade coat, $2295;<br/> Lisa Black quartz earrings set in gold, $5200 from Becker Minty; shagreen compact from The Vintage Clothing Shop, $235.</p>
                  
                </div>

                <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>
              <FeatureSpreadItem img="Watch-558.png">
                <div style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                    
                    <div>
                      <p>Franck Muller Vanguard “Kangaroo” limited Australia-only edition, from $13,950.<br/> Bally shearling jacket, $4850; Dior Homme wool twill trousers, $1100.</p>
                    </div>
                    <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>
              <FeatureSpreadItem img="Watch-560.png" >
                <div style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                    <div>
                      <p>Ulysse Nardin Marine Torpilleur, pocket watch charm and precision movement, $9995.<br/> Dior Homme wool twill jacket, $2600; Paul Smith cotton shirt, $245.</p>
                    </div>
                    <img className="galleryNavArrow galleryNavArrowRight" onClick={() => this.handleClick("right")} style={{height:"10vh"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>
              <FeatureSpreadItem img="Watch-561.png" >
                <div style={{display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"space-between", paddingLeft:"1vw", paddingRight:"1vw"}}>
                  <img className="galleryNavArrow galleryNavArrowLeft" onClick={() => this.handleClick("left")} style={{height:"100%", height:"10vh", transform : "scaleX(-1)"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                <div>
                  <p>Rolex Oyster Perpetual Sea-Dweller, good for depths to 1220 metres, $14,400.<br/> Prada mohair and wool suit jacket, $3610, pants, $1310 and cotton shirt, $930.</p>
                </div>
                <img className="galleryNavArrow galleryNavArrowRight" style={{height:"10vh", opacity:"0"}} src={serverString+"/temp-eugene/jaeger/arrow-new.svg"}/>
                </div>
              </FeatureSpreadItem>
            </SwipeableViews>
           </div>
        )
    }
    
}
export default DressingWrist

const FeatureSpreadItem = (props) => {
	return(
		<div style={{textAlign:"center", height:"100vh"}}>
			<img style={{height:"85vh"}} src={serverString+"/temp-eugene/jaeger/"+props.img}/>
			<div>
				<div style={{paddingTop:"3%", fontSize:"x-small"}}>
					{props.children}
				</div>
			</div>
		</div>
	)
}
