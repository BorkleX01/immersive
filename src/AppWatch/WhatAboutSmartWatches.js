import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class WhatAboutSmartWatches extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            someStateBoolean : true
        };

        this.watchImgLoaded = this.watchImgLoaded.bind(this)
    }

    watchImgLoaded(e){
      
        e.target.className = "rotate-to-placement"
        
    }

    componentDidMount(){
      addClassToRoot();     
    }
    
    render(){
        return(
            <div className={"page subpages full-width base-font"}>
              <div id="inner" style={{marginTop: "0px"}}>
              	<div style={{position:"absolute", background:"none"}} className="tiny-heading watch-top watch-white" >Watch.</div>
                <div style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor: "#e2e2e2" }}>
                  <img id="l-vuitton-hack" src={serverString+"/temp-eugene/jaeger/Louis-Vuitton-BG.jpg"}  />
                  <div className="LVheader" style={{color:"#F42388", fontWeight:"700", fontSize:"x-large", maxWidth:"75vw", textAlign:"center"}}><div className="h1Fix"><h1>What about smart watches?</h1></div></div>
                  <div className="lvTextBody1" style={{width:"35vw"}}><h2>Vuitton makes a case.</h2> 
                    <p>Louis Vuitton is the latest famed name to enter the connected watch fray, this year launching the first such device “conceived in Paris” with the panache and price tag to match. An Android/Google/ Qualcomm Technologies collaboration, the 42mm Tambour Horizon differs from other Android devices by offering not just fancy Vuitton faces, but dedicated travel and flight functions, as befitting a brand that made its name crafting transatlantic steamer trunks. Priced from $3500, it comes with an array of quick-change strap options – some 60 patterns all up and counting. All good, but what we wondered was the thinking behind the venerable brand’s foray into technology? Who better to ask than Hamdi Chatti (right), vice-president of Louis Vuitton Watches and Jewellery.</p>
                  </div>
                </div>
                

                <div className="limitWidthLV" style={{paddingLeft:"5%", paddingTop:"10%", paddingRight:"5%",justifyContent: "space-around", display:"flex", flexDirection:"row", alignItems:"top", backgroundColor: "#e2e2e2" , width:"100%" }}>
                
                  <div className="editor-columns left2" style={{paddingBottom: "0px"}}>
                    <div className="spacer"></div>
                    <div className="lower-left lvLowerLeft" style={{alignSelf:"baseline", marginLeft: "-100px"}}>
                        <div style={{color:"white", fontStyle:"normal", lineHeight:"1.2em", fontSize:"smaller"}}>
                          <p className="lvP makePBlack">Hamdi Chatti, vice-president of Louis Vuitton Watches and Jewellery.</p>
                        </div>
                        <img className="lvHamdi lvLowerLeftIMG" style={{height:"45vh" , maxWidth:"none"}} src={serverString+"/temp-eugene/jaeger/HamdiLV.png"}/>
                    </div>
                  </div>
                  <div className="divider-line">
                    <svg width="50px" height="100%">
                          <line x1="25px" y1="0" x2="25px" y2="30px" stroke="#95989A"/>
                          <line x2="25px" y2="30px" x1="35px" y1="40px" stroke="#95989A"/>
                          <line x1="35px" y1="40px" x2="25px" y2="50px"  stroke="#95989A"/>
                          <line x2="25px" y2="50px" x1="25px" y1="100%"  stroke="#95989A"/>
                        </svg>
                  </div>
                  <div className="editor-columns right" ><p><strong>What was the rationale for creating a Vuitton connected watch?</strong></p>
                    <p>We wanted to offer a beautiful object that does things a traditional watch doesn’t do. At different times our clients will wear different things – different shoes, sometimes sneakers, or jeans – with a different watch. Sometimes that will be a minute repeater, now there is the option of a connected watch but a Vuitton product in terms of quality and functionality.</p>
                    <p><strong>Are you concerned about obsolescence, given this is a relatively expensive item and operating systems are constantly being upgraded?</strong></p>
                    <p>We have a very simple answer to that: we’re only adding functionalilty that fits with Vuitton, and you’re still going to have it in five years’ time – or as long as you want – and we will maintain it. We can even fit a new module or mechanical one in the same case, although we don’t publicly offer this because it suggests we aren’t confident in the technology, which we are. One thing I see changing is battery life – I believe it will be much longer.”</p>
                    <p><strong>Has the take-up of the Horizon lived up to expectations?</strong></p>
                    <p>We planned to launch with six months’ stock and it went in two months, and we’re out of stock on the straps. We thought clients would buy maybe an extra strap – it comes with two – but the trend is three. Most of our traditional clients have shown big interest – they’re not comparing the Horizon to a traditional watch but to other smart watches, where there is no comparison.</p>
                    <p><strong>You’re a watch aficionado yourself, are you wearing the Horizon?</strong></p>
                    <p>Yes, on the alligator strap but the yellow is very cool even though I don’t wear much yellow! Changing the strap will become like changing your tie.</p>
                    </div>
                </div>
                <div style={{ paddingTop:"5vh", paddingBottom:"5vh", display:"flex", alignItems:"center", flexDirection:"column", backgroundColor:"white", color:"black"}}>
                  <img style={{width:"70vw", maxWidth: "520px"}}className="lvLinkoutImageMod" src={serverString+"/temp-eugene/jaeger/Apple Watch Series 3 ref.jpg"}/>
                  <p style={{marginTop: "3%"}}>Apple Watch Series 3.</p>
                  <div className="body2LV lvTextBody11" style={{}}>
                    <h2>Apple’s share of the pie</h2>
                    <p>The wearer of the heavyweight crown when it comes to smart watch sales is Apple after shipments grew 60 per cent in the first quarter and 50 per cent in the second quarter of this year, according to Strategy Analytics. The Series 3 ups the ante with built-in cellular and health and fitness enhancements, including an upgraded heart rate monitor and a 70 per cent faster dual-core processor.The upgrade means users can stay connected, make calls and receive texts without having their iPhone nearby. The Series 3 comes in two models, one with GPS and cellular from $559, the other with GPS only priced from $459, while the Apple Watch Edition cased in grey or white ceramic comes in at $1829. All accommodate an impressive range of bands, a feature which is shaping up as the wrist’s colourful new battleground.</p>
                  </div>
                </div>
               <div className="smart-watch-showcase" style={{width: "100%" ,display:"flex", alignItems:"center", flexDirection:"row"}}>
                  
               	<div className="secondBreakfast" style={{display: "flex", margin:"0 auto"}}>
	                  <div className="smartWatchImgCap">
	                  	<img style={{ paddingRight: ""}} src={serverString+"/temp-eugene/jaeger/Fossil.png"}/>
	                  	<p className="caption">Fossil Q Neely.</p>
	                  </div>
	                  <div className="watchHoldersLV" style={{}}>
	                  	<p style={{borderTop:"2px solid #95989A", paddingTop:"81px"}}><strong style={{fontWeight:"700", fontSize:"1.3em", paddingTop:"5%", paddingBottom:""}}>Fossil targets the other half</strong></p>
								<p>While Tag Heuer with its Connected might be the best-known watch brand in the smart space, Fossil has beaten all comers to releasing a dedicated feminine device, the 36mm Q Neely and Q Jacqueline hybrid watches. The smallest smart watch to date, they’re Android and iPhone compatible and traditionally styled, offering a blend of analogue and connected features including phone notifications, fitness (including steps and calories) tracking and customised push-button shortcuts. Priced from $279, perhaps the best feature is a battery life of up to six months. By that time don’t be surprised if Tag has something just for her on offer in their Connected range, which continues to prove popular.</p>
	                  </div>
	                  <div className="spacerBreak">&nbsp;</div>
	               </div>
               </div>

               <div className="smart-watch-showcase" style={{width: "100%",display:"flex", alignItems:"center", flexDirection:"row", paddingTop:"", paddingBottom:"5vh" }}>
               	<div className="secondBreakfast" style={{display: "flex", margin:"0 auto"}}>
               		<div className="spacerBreak">&nbsp;</div>
							<div className="watchHoldersLVMo" style={{}}>
                    		<p style={{borderTop:"2px solid #95989A", paddingTop: "81px"}}><strong style={{fontWeight:"700", fontSize:"1.3em"}}>Dab of vintage</strong></p>
                    		<p>If a ceramic Apple is not appetising enough for you, the Apple Watch Hermès collection is likewise refreshed with new bands and colours, including a Single Tour Rallye in perforated Gala calfskin, inspired by Hermès driving gloves, and a Single Tour Éperon d’Or with a printed equestrian scarf pattern from the ’70s on Gala calfskin. There’s also a new watch face inspired by the Carrick Hermès from 1993 to add a vintage touch to your device.</p>
                  	</div>
                   	<div className="smartWatchImgCap">
                   		<img src={serverString+"/temp-eugene/jaeger/Dab.png"}/><p className="caption" style={{}}>Apple Watch Hermès.</p>
                   	</div>
                  </div>
					</div>

					<div className="tiny-heading watch-bottom watch-black" style={{position:"relative",top:"0px"}}>Watch.</div>

              </div>
            </div>)}
}
export default WhatAboutSmartWatches
