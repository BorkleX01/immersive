import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class AheadCurve extends React.Component {
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
        window.yesItsAGlobalDealWithIt = {left:true, right:true}
        
    }
    render(){
        return(
				<div className={"page subpages full-width"}>
					<div id="inner" style={{marginTop: "0px"}}>
						<div className="tiny-heading watch-top watch-white" style={{zIndex: "100",top: "10px"}}>Watch.</div>
						<div id="bg" style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor: "#000" , width:"100%" }}>

							<div className="arc-pointer"></div>
                  	<div className="arcTextNext" style={{position:"absolute", top:"24vh", left:"17vw", color:"#999", fontSize:"0.7em", zIndex:"2"}}>Cartier Tank Américaine</div>	
                  	
                  	<img style={{height:"100vh"}} src={serverString+"/temp-eugene/jaeger/curve-watch.jpg"}></img>
                  	<div className="aheadCurveTextContainer" style={{color:"white", position:"absolute", width:"25vw", right:"15vw", bottom:"-79vh"}}>
                    		<h1 className="aheadCurveTitleText"><strong style={{fontWeight:"700", fontSize:"2em", lineHeight:"1em"}}>Ahead of the curve</strong></h1>
                    		<h2 className="aCurveDisableOnMob">Most vintage watches look just that, vintage. But the design of Cartier’s Tank has kept it relevant for a century, a quality that has seen it grace the wrists of the rich and famous.</h2>
                    		<span className="aCurveDisableOnMob">Story | Bani McSpedden</span>
                  	</div>

             		</div>

                	<div id="bg" style={{ lineHeight:"2em", paddingTop:"5vh", paddingBottom:"5vh", display:"flex", flexDirection:"column", alignItems:"center", backgroundColor: "#000" , width:"100%" }}>
                    <div className="aheadCurveShowOnlyOnMobile" >

                        <p>Most vintage watches look just that, vintage. But the design of Cartier’s Tank has kept it relevant for a century, a quality that has seen it grace the wrists of the rich and famous.</p>
                        <span>Story | Bani McSpedden</span>

                    </div>
                		<div className="alignTextCol andRemovePaddingOnMobile aTCModCurve" style={{width: "60vw", color:"#fff", paddingTop:"10vh", paddingBottom:"5vh"}}>
                			<p>Looking at the cast of characters that have sported Cartier’s famed Tank watch down the decades, you’d be forgiven for thinking it was crafted with wrist-shots and selfies in mind. But the Tank’s story has its roots in good design and the quest for a watch – successful, as it turned out – that would, literally, stand the test of time. The Tank is now regarded as possibly the most recognisable watch yet created, although some might suggest the Rolex Submariner is similarly iconic.</p>
                			<p>Its story begins with the founder of the maison, Louis Cartier, who had from the early 1900s favoured geometric lines and abstract forms for his jewellery, and saw the opportunity to create a watch that would become an accessory and be as functional as it was elegant. The strength of the design was its break with the prevailing shape of watches – it was a period when elaborate curves were in vogue.</p>
                		</div>

                  	<div id="famous-people-tile" style={{}}>
                    		<div style={{display:"flex", alignItems:"end", flexDirection:"row"}}>
                      		<img  src={serverString+"/temp-eugene/jaeger/Watch-550.png"}/>
                      		<img  src={serverString+"/temp-eugene/jaeger/Watch-544.png"}/>
                    		</div>
                    		<div style={{display:"flex", alignItems:"flex-end", flexDirection:"row", marginTop:"-10vh"}}>
                      		<img  src={serverString+"/temp-eugene/jaeger/Watch-549.png"}/>
                      		<img  src={serverString+"/temp-eugene/jaeger/Watch-551.png"}/>
                    		</div>
                  	</div>

                      <div className="famousPeopleStacked2" >
                          <img  src={serverString+"/temp-eugene/jaeger/Watch-550.png"}/>
                          <img  src={serverString+"/temp-eugene/jaeger/Watch-544.png"}/>
                          <img  src={serverString+"/temp-eugene/jaeger/Watch-549.png"}/>
                          <img  src={serverString+"/temp-eugene/jaeger/Watch-551.png"}/>
                      </div>
                  	
                  	<div className="captionText mobileModCaptionText" style={{color:"white"}}>First: Andy Warhol; Second: punk poet Patti Smith;<br/>Third: French actress Catherine Deneuve; Fourth: Princess Diana</div>

                  	<div className="alignTextCol aTCModCurve" style={{width: "60vw", color:"#fff", paddingTop:"10vh", paddingBottom:"5vh"}}>
                  		<p>Whether Cartier himself pencilled the design, it was said to be based on the overview of a military tank, the case sides or “brancards” representing the treads. Finessing of the design concentrated on aligning the circle of the hours with the strap, seamlessly integrating the lugs by extending them from the case and paring down the design. Traditional Cartier signature touches such as a “railway track” for the minutes, the bold Roman numerals and blue-sapphire-cabochon-set crown followed, the latter something not seen on a watch before. The movement was supplied by Edward Jaeger, later of Jaeger-LeCoultre fame.</p>
                  		<p>It’s perhaps fitting that the first “celebrity” linked with the timepiece was General John Pershing, commander of the American Expeditionary Force in Europe during the First World War, who was said to have been offered one by Cartier in 1918 as a token of thanks.</p>
                  		<p>So be it, but soon it was a different kind of celebrity adopting the not-quite square, not-quite-rectangular timepiece. The roll call of glamorous influencers of the day ranged from Rudolph Valentino in the 1920s to Cary Grant, Gary Cooper, Yves Saint Laurent, Andy Warhol, Jackie Onassis, and Princess Diana. Mind you, it might not have been their only watch.</p>
                  		<p>Warhol’s collection, auctioned by Sotheby’s in 1988, included more than 180 watches, just four of them being Tanks, while his art director Rupert Jasen Smith noted in a preface in the Sotheby’s catalogue that he “only wore one watch, a woman’s gold mid-’70s Rolex”. That aside Warhol was also quoted in 1973 as saying, “I don’t wear a Tank watch to tell the time. In fact, I never wind it. I wear a Tank watch because it’s the watch to wear.”</p>
                  		<p>Likewise Onassis, whose particular watch, a gold 1962 model, was offered at Christie’s in New York in June, bringing $US379,500, triple its high estimate. She wore it for decades as evidenced by numerous photographs – in which it looks tiny by today’s standards.</p>
                  		<p>Just as tastes have changed so has the Tank, with the addition of various models (and sizes) over the years including the Tank Cintrée, Tank Américaine, Tank Française, Tank Basculante, Tank Asymétrique  and Tank Anglaise, all easily recognisable offspring thanks to the strength and adaptability of the original design.</p>
                  	</div>
	                  <div className="flexHolderCurve" style={{display:"flex", alignItems:"center", flexDirection:"row", width:"80%", margin: "0 auto", textAlign:"center", minWidth:"300px", maxWidth:"600px"}}>
	                    <div className="tank-cintree-showpiece">
	                      <img  src={serverString+"/temp-eugene/jaeger/Watch-545.png"}/>
	                      <div className="title">Classic appeal</div>
	                      <div className="pitch">Created in 1922, the new Tank Louis Cartier is closest to the original with softened corners and horns incorporated into the case. The movement is a hand-wound mechanical calibre. From $14,000 to $31,800.</div>
	                      <div className="border"></div>
	                    </div>
	                    <div className="tank-cintree-showpiece">
	                      <img  src={serverString+"/temp-eugene/jaeger/Watch-546.png"}/>
	                      <div className="title">Magical movement</div>
	                      <div className="pitch">The 2017 Tank Cintrée, born in 1921, has a skeletonised in-house movement. The mainspring is at 12 o’clock and balance wheel at six o’clock, supported by hand-finished bridges and a minute track. From $90,000 to $99,500.</div>
	                      <div className="border"></div>
	                    </div>
	                  </div>
	                  <div className="flexHolderCurve" style={{display:"flex", alignItems:"center", flexDirection:"row", width:"80%", margin: "0 auto", textAlign:"center", minWidth:"300px", maxWidth:"600px"}}>
	                    <div className="tank-cintree-showpiece">
	                      <img  src={serverString+"/temp-eugene/jaeger/Watch-547.png"}/>
	                      <div className="title">Jewelled bracelet</div>
	                      <div className="pitch">Dating to 1996, the Tank Française has a more squared-off case mounted on a metal bracelet and now comes in steel with diamonds flanking the dial. It’s powered by a quartz movement. From $9950 to $11,400.</div>
	                      <div className="border"></div>
	                    </div>
	                    <div className="tank-cintree-showpiece">
	                      <img  src={serverString+"/temp-eugene/jaeger/Watch-548.png"}/>
	                      <div className="title">Curvaceous chic</div>
	                      <div className="pitch">First seen in 1989, the Tank Américaine has the curved case of Tank Cintrée but for 2017 is cased in steel. In three sizes the small with a quartz movement, self-winding for the larger. From $7150 to $8050.</div>
	                      <div className="border"></div>
	                    </div>
	                  </div>
                  
                </div>
              </div>
              <div className="tiny-heading watch-bottom watch-white" style={{position:"relative",transform: "translateY(-50px)", bottom:"0px"}}>Watch.</div>
            </div>
        )
    }
    
}
export default AheadCurve
