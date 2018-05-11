import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class InsideStory extends React.Component {
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
					<div className="tiny-heading watch-top watch-black" style={{zIndex: "100",top: "30px", left:"0"}}>Watch.</div>
					<div id="bg" style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor: "#fff"}}>
						<div className="iSTopSectionHolderDesktop">
							<div className="iSTitleTextContainer">
								<div className="iSTitleDiv" style={{color:"#009DE0"}}>
									<h1 style={{textAlign:"left"}}>Inside story</h1>
								</div>

								<div className="iSSubtext forceNormalFonts">
									<p>The habits of the past are giving way to unprecedented moves on movements.</p>
									<span>Story | BANI McSPEDDEN</span>
								</div>
							</div>
							<div className="iSHeroDiv">
								<img src={serverString+"/temp-eugene/jaeger/watch14Hero.jpg"}/>
							</div>
						</div>


							<div className="iSTopSectionHolderMobile">  
							<div className="iSTitleTextContainer">
								<div className="iSTitleDiv" style={{color:"#009DE0"}}>
									<h1 style={{textAlign:"left"}}>Inside story</h1>
								</div>

								<div className="iSSubtext forceNormalFonts">
									<p>The habits of the past are giving way to unprecedented moves on movements.</p>
									<span>Story | BANI McSPEDDEN</span>
								</div>
							</div>
							<div className="hDivMobiS">
								<img src={serverString+"/temp-eugene/jaeger/watch14Hero.jpg"}/>
							</div>
						</div>

							<div className="iSTopSectionHolderTablet">  
							<div className="iSTitleTextContainer">
								<div className="iSTitleDiv" style={{color:"#009DE0"}}>
									<h1 style={{textAlign:"left"}}>Inside story</h1>
								</div>

								<div className="iSSubtext forceNormalFonts">
									<p>The habits of the past are giving way to unprecedented moves on movements.</p>
									<span>Story | BANI McSPEDDEN</span>
								</div>
							</div>
							<div className="hDivMobiS">
								<img src={serverString+"/temp-eugene/jaeger/watch14Hero.jpg"}/>
							</div>
						</div>



					<div className="limitColWidthiS" style={{width:"60vw", paddingTop:"12%", paddingBottom:"5vh"}}>
					<div className="pushPage"></div>
						<p>The revival of the mechanically driven watch, since its near-death at the hands of quartz interlopers in the 1970s, is testament to the resilience of an art once deemed to have no future. This is a fact worth bearing in mind as the business faces new challenges from connected devices that compete for the limited acreage available on our wrists.</p>
						<p>Without underestimating high-end German and Japanese contributions, the main actor in mechanical watchmaking is the Swiss, with some 700 companies and 50,000 employees producing the bulk of the world’s high-end calibres.</p>
						<p>It is estimated that watchmaking at this level has multiplied threefold in the past 10 years with luxury groups grabbing 65 per cent of the market.</p>
						<p>Distinguishing between the quantity of watches produced and the value, while the Swiss account for just 2 per cent of world watch production by units, their output represents 48 per cent by value.</p>
						<p>Given this, and that cog-driven watches first appeared in the 16th century, the question of how to keep them relevant into the future becomes significant. Most watch brands have been happy to tick along with movements supplied by the Swatch Group and its subsidiaries which, according to recent estimates, have been providing the workings for more than 70 per cent of Switzerland’s production.</p>
						<p>For various reasons – such as Swatch not wishing to continue carrying responsibility for supplying all and sundry with its ETA calibres – we’re entering a period of less reliance on one supplier.</p>
						<div className="iSscaledBodyImage">
							<img src={serverString+"/temp-eugene/jaeger/watch-factory-watch-only.jpg"}/>
							<span className="captionBlock">The Zenith Defy Lab is clothed in aeronith, which is made of alumnium foam and a polymer.</span>
						</div>
						<p>Other specialists such as Sellita, Ronda and Soprod have entered the fray, joined by those brands willing to develop their own internals or part thereof, no mean feat given the complexity and investment involved. Much of the resulting cogwork has replicated the ETA calibres the brands are familiar with and some have resulted from unexpected collaborations – Tag putting its head together with Seiko for its Calibre 1887 chronograph movement, Tudor with Breitling for the Calibre MT5813 movement found in the Black Bay Chronograph.</p>
						<p>The surprise this year though has come from LVMH brand Zenith. In an attempt to lift awareness of the member of its stable that, compared with bedfellows Hublot and Tag Heuer has been drifting, LVMH has given Zenith first dibs on a mechanical movement that sheds years – centuries – of accepted practice.</p>
						<p>Announced in September, it was introduced in a Zenith Defy Lab model and does away with one of the foundation principles behind clock or watch movements: the coupling of the hairspring and balance, something that’s been in use since Christiaan Huygens presented it to the French Academy of Sciences in 1675.</p>
						<p>In place of the balance and 30-odd ancillary components found in a traditional timepiece is a monocrystalline silicon oscillator 20 microns and 30 millimetres in diameter, its blades and outer element flexing away like a heartbeat to deliver power. The benefit? No need for oil given the absence of friction or wear and accuracy to within an unheard-of 0.3 seconds a day that it maintains for 95 per cent of its 60-hour power reserve.</p>
						<p>All good, but it’s LVMH’s plans for the innovation that reveal a refocusing of its research and development efforts to benefit not just Zenith but other brands, including its competitors.</p>
						<div className="iSscaledBodyImage facHands">
						<img src={serverString+"/temp-eugene/jaeger/watch-factory-hands-2.jpg"}/>
						<span className="captionBlock">Left: The monolithic 30mm oscillator replaces about 30 components found in a traditional watch. Right: The handiwork of LVMH guru Guy Sémon.
						</span>
						</div>
					</div>

					<div className="limitColWidthiSmaller limitColWidthiSModLeft" style={{display:"flex", alignItems:"top", flexDirection:"row"}}>
						<div className="divider-line" style={{paddingTop:"5vh", paddingBottom:""}}>
							<svg width="50px" height="100%">
								<line x1="25px" y1="0" x2="25px" y2="30px" stroke="#95989A"/>
								<line x2="25px" y2="30px" x1="35px" y1="40px" stroke="#95989A"/>
								<line x1="35px" y1="40px" x2="25px" y2="50px"  stroke="#95989A"/>
								<line x2="25px" y2="50px" x1="25px" y1="100%"  stroke="#95989A"/>
							</svg>
						</div>
						
						<div className="limitColWidthiS" style={{paddingTop:"5vh", paddingBottom:"5vh", width:"60vw"}}>
							<h2 style={{fontWeight:"700", fontSize:"4em", lineHeight:"1em" }}>Sharing a revolution</h2>
							<p>The Zenith Defy Lab is no mere concept watch but rather a limited edition whose revolutionary oscillator is destined to appear not only in its forthcoming models but also those of its competitors.</p>
							<p>Announcing the first edition of 10 pieces, LVMH head of watchmaking Jean-Claude Biver (above) predicted that in the short term it would “create a revolution” and be a driver for Zenith, but the potential was not limited to one brand. He told Watch, “We are working on open source, ready to sell it to other brands.”</p>
							<p>It was in Japan as Zenith’s guest for the unveiling of the Zenith Lab’s movement that I realised I’d seen it before, when visiting Tag Heuer in Switzerland, a few years ago.</p>
							<p>I was in the lair of Guy Sémon, Tag’s then vice-president of science and engineering, and he was explaining the MikroPendulumS or some such wonder, when he pulled out his iPhone and showed me what was really exciting him. The prototype movement he displayed pulsed like a living thing.</p>
							<p>So how did it end up waving the flag for Zenith this year? Simple: in the intervening period Biver took on stewardship of Tag, put Sémon in charge and then this year established – without fanfare – an R & D department to service the three brands under his purview, Hublot, Zenith and Tag Heuer.</p>
							<p>Although yet to be officially announced, it’s a department we could be hearing a lot more from as I discovered when I met with Biver after the oscillator’s launch.</p>
							<div>
								<img  className="iSlimitInlineImg" src={serverString+"/temp-eugene/jaeger/Watchmaker-guy.png"}/>
								<span className="captionBlock">Jean-Claude Biver</span>
							</div>
							<p>As he put it: “For the brands to do research and development work individually, three times, would be a waste of investment. So we said let’s keep for Hublot their specialty, they’re masters in metallurgy; for Zenith let’s keep their reputation for movements. For Tag there was also movements, and in the last five years they’ve done more than Zenith – two chronographs movements, a tourbillon and the famous V4 movement. Historically it’s less than Zenith but in practice more because the last time Zenith did a movement was 1969.”</p>
							<p>Biver refers to the oscillator as “the Sémon oscillator because Guy invented it and because if we called it the Zenith oscillator others might not want to buy it.”</p>
							<p>As to why Zenith got it first, Biver explains: “Because Zenith needs to be promoted for its art, not for its ambassadors or marketing. I said to Mr Arnault [Bernard Arnault, chairman and chief executive of LVMH], Zenith should be promoted on the basis of innovation because it establishes substance. And that brought me to create a special department, the Science Institute of LVMH.”</p>
							<p>I ask why we haven’t heard about this institute given its importance to the group? “Because we don’t sell institutes, we sell watches,” says Biver. “The first big announcement is the new oscillator.”</p>
							<p>But it’s not only the watch business on Biver’s mind. “Since we created the institute we’ve noticed many of our innovations can apply outside the watch industry, especially our carbon nano-tube work which, for example, can be effective for stents in heart surgery because the material is not rejected by the human body.</p>
							<p>“We also noticed that in aerospace there are applications, and this is the reason why we have not called the department the Science Institute of Watches.”</p>
						</div>
					</div>
				</div>
				<div className="tiny-heading watch-bottom watch-black" style={{    transform: "translateY(-50px)", bottom:"initial"}}>Watch.</div>
			</div>
		</div>
		)
	}
    
}
export default InsideStory
