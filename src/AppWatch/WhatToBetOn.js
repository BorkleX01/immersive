import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class WhatToBetOn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            someStateBoolean : true
        };

        this.watchImgLoaded = this.watchImgLoaded.bind(this);
        window.yesItsAGlobalDealWithIt = {left:true, right:true};
        
    }

    watchImgLoaded(e){
        
        e.target.className = "rotate-to-placement"
        
    }
    componentDidMount() {
      addClassToRoot();
      window.yesItsAGlobalDealWithIt = {left:true, right:true};
        
    }
    render(){
        return(
            <div className={"page subpages full-width"}>
              <div id="inner" style={{marginTop: "0px"}}>
              	<div className="tiny-heading watch-top watch-black" style={{zIndex: "100",top: "30px", left:"0"}}>Watch.</div>
                <div id="bg" style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor: "#fff", paddingTop:"15vh"}}>
                  <div style={{textAlign:"center",color:"#009DE0", fontSize:"28px"}}>
                    <h2 className="betOnTitle">What to bet on</h2>
                  </div>
                  <img style={{width:"75vw"}} src={serverString+"/temp-eugene/jaeger/watch13hero.jpg"}/>
                  <span className="captionBlock">Paul Newman’s record-breaking Rolex Daytona.</span>
                  <div className="alignTextCol redoText" style={{width:"40vw", minWidth:"280px", paddingTop:"5%", paddingBottom:"25%"}}>
                    <p>In general, watches can be compared to cars when it comes to future value. Most depreciate the moment they leave the showroom or boutique, while a few grow in stature over time.</p>
                    <p>The brands to bet on have included Patek Philippe, Vacheron Constantin and Rolex, along with A. Lange & Söhne​ and certain models from Audemars Piguet, while newcomers such as Richard Mille and Greubel Forsey are finding favour with younger collectors. What might take off can be devilishly hard to predict and Rolex’s Daytona and Tag Heuer’s Monaco are two cases in point, both being unloved on their release years ago, but both enjoying legendary status and the prices that go with it today.</p>
                    <p>At Sotheby’s in May it was a 1970 Rolex Daytona “Paul Newman” model that broke the record for any watch sold at auction in Australia, bringing $219,600 including buyer’s premium against estimates of $80,000 to $120,000. Its original price was a few hundred dollars.</p>
                    <p>Then in November Newman’s very own Daytona broke the all-time record, achieving $US17,752,500 at an auction in New York. The actor became linked to the watch after his wife, Joanne Woodward, gave him one when he began racing cars in 1972, and he wore one virtually every day.</p>
                    <p>The record-breaker carries a message from Woodward, “Drive Carefully Me” and was gifted by Newman to James Cox, who was dating Newman’s daughter at the time, in 1984. It’s the most expensive wristwatch ever sold at auction, the previous record-holder being a steel Patek Philippe Reference 1518 that brought CHF11,002,000 ($A15,084,000) in Geneva in 2016.</p>
                    <p>As for more recent off-the-shelf watches, something you might enjoy every day rather than a complication you’d cosset, recent performers include Rolex’s Deepsea​ model and the latest Daytona, and Panerai’s Bronzo, a green-dialled diver that retailed for $12,000 six years back and now commands about $40,000. Yes, it was a limited edition, but above all had that indefinable appeal that caught the eye of collectors. While that’s something you can never bet on, provenance, particularly a famous former owner, emerges as safer ground for the investor. A number of modest pieces owned by the well-known have had stunning success, for example the Omega Seamaster Planet Ocean worn by Daniel Craig in Skyfall, which brought £157,250 ($264,000) at Christie’s in 2012.</p>
                    <p>Put provenance and a rare watch together and you’re really talking, as illustrated by Eric Clapton’s 1987 Patek Philippe perpetual calendar auctioned by Christie’s five years ago. One of two cased in platinum rather than the usual gold, it brought CHF3,443,000 ($A4.5 million) having been originally purchased for CHF418,000 ($549,000).</p>
                    <p>Like Newman’s Daytona it was enjoyed by its owner which did wonders for the price. To a watch lover that association is where the real value lies.</p>
                  </div>
                </div>
                <div className="tiny-heading watch-bottom watch-black" style={{    transform: "translateY(-50px)", bottom:"initial"}}>Watch.</div>
              </div>
            </div>
        )
    }
    
}
export default WhatToBetOn
