import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class HighEnd extends React.Component {
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
            <div className={"page subpages full-width"} style={{}}>
              <div id="inner" style={{marginTop: "0px", backgroundColor:"white"}}>
              	<div className="tiny-heading watch-top watch-black" style={{zIndex: "100",top: "0px"}}>Watch.</div>
                <div id="bg" className="highOnHighBg" style={{marginTop:"50px"}}>
	                 <div style={{maxWidth:"1200px", margin:"0 auto"}}>
	                 		<div className="captionBlock">
	                 			<img style={{width:"75vw", maxWidth:"100%"}} src={serverString+"/temp-eugene/jaeger/high/hero.png"}/>
	                 			<span className="captionText" style={{display: "block", margin:"10px 0 40px"}}>From left: Watches of Switzerland chairman Ed van der Griend, owner Eric van der Griend and managing director Sam van der Griend.</span>
	                 		</div>
	                  <div style={{textAlign:"center", fontWeight:"700", fontSize:"25pt", paddingTop:"1vh", paddingBottom:"1vh"}}>
	                    <h1 className="headingMod">High-end on a high</h1>
	                  </div>
	                  <div className="highSubtext">
	                    <div className="highSubTextInner"><h2>We talk to the founder of Watches of Switzerland, who has been at the coalface of watch retailing for 20 years.</h2>
	                      <span>Story | Bani McSpedden</span>
	                    </div>
	                  </div>
                  
							<div className="" style={{textAlign:"center", margin:"40px 0"}}>
                      <img src={serverString+"/temp-eugene/jaeger/unfold.png"} className="" style={{width:"50px"}}/>
                    </div>
						</div>
                  <div className="highCenText" style={{paddingTop:"0"}}>
                    <p>Eric van der Griend is a man who has form. He brings high-end German brand A. Lange & Söhne to Australia and while you may not have heard of him, watch buyers certainly know his company, Watches of Switzerland, and the timepieces it specialises in from Perth to Australia’s eastern seaboard.</p>
                    <p>This year Watches of Switzerland celebrates its 20th anniversary, although founder van der Griend’s experience as an importer goes back further than that – he was the man who put Tag Heuer and later IWC on the map in the early 1990s before the brands decided he’d done such a good job they’d take over distribution themselves.</p>
                    <p>Van der Griend had formed a wholesaler, Swisstime, in 1989 but it was not to last. As he explains it, “The brands we were distributing kept being integrated into a luxury group, so we thought that, as a wholesaler, we should look at retail and hopefully become an expert retailer.”</p>
                    <p>Surprisingly, the Melbourne-based salesman chose Perth as the starting point telling Watch, “I used to go there to supply Tag Heuers and realised there was no predominant watch specialist there.</p>
                    <p>“There was a really large Asian and Indonesian population of students there, but no one catering to watches. It was the ideal opportunity to establish ourselves. It’s a good market, and local consumers are becoming a lot more sophisticated and a lot more educated about watches.”</p>
                    <p>If the staples then were Longines and Tag Heuer timepieces, the business has evolved dramatically van der Griend says, “particularly since 2012 when we brought Rolex into the business, a big growth driver, along with Lange & Söhne – I was surprised how quickly Lange took off here.”</p>
                    <p>Selling more watches is one thing but selling at a higher price point is another. “You can see it in our average prices; people are probably paying two-and-a-half times [for a watch] what they were paying in 2012.” He gives the example of the Rolex Submariner. “Everyone wants a Rolex – they might want other brands, but at some stage they will want a Rolex”. It is a model that is popular with all age groups and for which there’s still a waiting list despite an $11,000 price tag.</p>
                    <p>As to finding clients willing to spend at higher levels, van der Griend cites Watches of Switzerland’s database of existing clients as particularly fertile ground, and mentions a typical mailing goes to 35,000 people.</p>
                    <p>“We’ve got a lot of clients who’ve been with us for years and have bought repetitive Tags and IWCs and others, and are now upgrading to higher-end brands.”</p>
                    <p>Competition is nonetheless intense – from brands opening their own boutiques to more brands focusing on online sales, as witnessed by luxury goods company Richemont increasingly populating its Net-a-Porter Group with pieces from its stable of thoroughbreds which includes Cartier, Jaeger-LeCoultre, IWC and Panerai. Oh, and A. Lange & Söhne for that matter.</p>

                    <div id="break-out-box" className="highQuoteText" style={{ width:"45vw", float:"left", marginLeft:"-20vw", padding:"5vw", fontWeight:"700", fontSize:"18pt", lineHeight:"1em", display:"flex", flexDirection:"row"}}>
                      <div>
                        <svg width="50px" height="100%">
                          <line x1="25px" y1="0" x2="25px" y2="30px" stroke="#95989A"/>
                          <line x2="25px" y2="30px" x1="35px" y1="40px" stroke="#95989A"/>
                          <line x1="35px" y1="40px" x2="25px" y2="50px"  stroke="#95989A"/>
                          <line x2="25px" y2="50px" x1="25px" y1="100%"  stroke="#95989A"/>
                        </svg>
                      </div>
                      <div className="quoteHolderHighEnd">
                        “Customer cornerstones – staff and store ambience – are critical but digital is going to be where growth comes from.” 
                      </div>
                    </div>
                    <p>“People now have a lot more information and a lot more options when it comes to buying a watch,” says van der Griend. “From our point of view, we’re building a relationship. It’s about trust and after-sales service, something we really take on. Rather than say, ‘we can’t help you’ and sending the watch to a brand, we have our own service department which builds credibility with clients.”</p>
                    <p>That said, van der Griend is under no illusion that digital will be key to the future of watch retailing.</p>
                    <p>“The usual customer cornerstones – an organisation with people and expertise in it, staff, store ambience and location – are critical. But digital is going to be where growth comes from and we’ve got to be part of it. The internet is the biggest change that’s happened in the business.”</p>
                    <p>That might be about to become a little easier. “We as an official retailer have been banned from doing digital in terms of transacting anything – it means you either do new-on-box, vintage or grey market, which we don’t do.</p>
                    <p>“Now brands are starting to embrace the idea that an authorised dealer can actually get involved. For us things like Facebook and Instagram are a big part of that process, particularly Facebook where you can tailor to different segments of the market.”</p>
                    <p>For the moment that means a halt to opening any new Watches of Switzerland stores (in addition to the current five in Perth, Cairns, Sydney and Melbourne), with attention turning to the digital space.</p>
                    <p>As to connected watches, van der Griend believes their advantage is price-point but notes “the younger generation are still really interested in brands and watches – they’re all online and they’re passionate.”</p>
                    <p>This brings us to the subject of vintage watches, a category that he believes can no longer be ignored.</p>
                    <p>“We’re not going to try and corner the vintage watch market, but see it as another pillar. It’s part of the mix that customers are going to want.”</p>
                  </div>
                  
                </div>
                <div className="tiny-heading watch-bottom watch-black" style={{position:"relative",bottom:"60px"}}>Watch.</div>
              </div>
            </div>
        )
    }
    
}
export default HighEnd
