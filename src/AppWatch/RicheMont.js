import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class RicheMont extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            someStateBoolean : true
        };

        this.watchImgLoaded = this.watchImgLoaded.bind(this)
    }

    watchImgLoaded(e){
        console.log(e.target.className)
        e.target.className = "rotate-to-placement"
        console.log(e.target.className)
    }

    componentDidMount(){
      addClassToRoot();     
    }
    
    render(){
        return(
            <div className={"page subpages full-width"}>
              <div id="inner" style={{marginTop: "0px"}}>
              	<div className="tiny-heading watch-top watch-white" style={{zIndex: "100",top: "10px"}}>Watch.</div>
                <div id="bg" style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor: "#000" , width:"100%" }}>
                  <div className="richmontTitleCon">
                    <div className="richmontTitleText" style={{fontWeight:"700", fontSize:"34px !important", color:"white", marginTop:"46vh", marginBottom:"54vh"}}>
                      <h1 style={{fontSize:"34px !important"}}>Richemont royalty ramps up retail</h1>
                    </div>
                  </div>
                  <div className="invertDivCol" style={{textAlign:"center", margin:"40px 0 80px"}}>
                      <img src={serverString+"/temp-eugene/jaeger/unfold.png"} className="" style={{width:"50px"}}/>
                    </div>
                  <div className="richmontMainCol">
                  <div className="richmontHeroCon">
                    <img style={{width:"100%", height: "auto", maxHeight: "initial"}} src={serverString+"/temp-eugene/jaeger/Rectangle-26-new.jpg"}/>
                  </div>
                  <div className="alignTextCol aTCRich" style={{color:"#fff", paddingTop:"10vh", paddingBottom:"40px !important", width:"60vw", margin:"0 auto"}}>
                    <p>From December, enthusiasts can enjoy a shorter trip than Singapore to secure one of the limited edition pieces Panerai and IWC reserve for their boutiques. The two are the first pure watch brands in the Richemont stable to open stand alone boutiques in Australia, with dedicated salons at 360 Collins Street, Melbourne ahead of an official launch in the new year.</p>
                    <p>Panerai and IWC are set to join Rolex, Omega, Tag Heuer and Breitling in creating an individual presence, along with jewellery brands Cartier, Van Cleef & Arpels and Chopard.</p>
                    <p>IWC’s brand director for Australia and New Zealand, Florian Gutsmiedl​, (below) told Watch that the Collins Street location was “a logical de­cision, with a large number of leading luxury brands already established on this shopping street and nearby arcades, attracting many tourists.”</p>
                    <p>It’s big news for watch lovers and collectors who have, until now, missed out on the special pieces increasingly reserved by brands for their own outlets.</p>

                  </div>
                  <div className="richMontImgCon" style={{padding:"20px 0"}}>
                    <img className="alignTextCol richMontImg" src={serverString+"/temp-eugene/jaeger/Richemont-new.png"}/>
                  </div>
                  <div className="alignTextCol aTCRich" style={{textAlign:"left",color:"#fff", paddingTop:"40px !important", paddingBottom:"5vh", width:"60vw", margin:"0 auto"}}>
                    <p>Critically for the brands, it allows them to offer clients the full immersive experience and present the stories they rely on to distinguish their timepieces; it also reflects confidence in the ability of the Australian market to grow.</p>
                    <p>A Richemont operative told Watch unofficially that the company believed luxury sales were growing at about 7 per cent a year “mainly due to mono-brand boutiques” and that boutiques were “very important for tourists who look for this level of service and experience.”</p>
                    <p>Both boutiques will be operated in partnership with Kennedy Watches and Jewellery and a second Panerai outlet will follow at Melbourne’s Chadstone.</p>
                  </div>
                  </div>
                </div>
                <div className="tiny-heading watch-bottom watch-white" style={{    transform: "translateY(-50px)", bottom:"initial"}}>Watch.</div>
              </div>
            </div>
        )        
    }
    
}
export default RicheMont
