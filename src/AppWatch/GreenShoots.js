import React from 'react'
import {serverString} from '../serverInfo.js'
import GreenShootsModal from './GreenShootsModal';
import { addClassToRoot } from './addClassToRoot.js';

class GreenShoots extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            someStateBoolean : true,
            showModal:false
        };

        this.watchImgLoaded = this.watchImgLoaded.bind(this)
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this)
    }

    openModal () {
      this.setState({showModal: true})
      
    }

    closeModal (){
      this.setState({showModal: false})
    }

    watchImgLoaded(e){
        
        e.target.className = "rotate-to-placement"
       
    }

    componentDidMount(){
      addClassToRoot();     
    }

    render(){
        return(
            <div className={"page subpages full-width"}>
              <div id="inner" style={{marginTop: "0px"}}>
              	<div className="tiny-heading watch-top watch-white">Watch.</div>
                <div className="watch-article">
                  <div className="black-bg" style={{height: "100vh"}}>
                  <div className="pageLimiterForFooter footerModForGreen">
                    <div className="modal-activator"><img className="greenSVGTL" src={serverString+"/temp-eugene/jaeger/SEEINGTHELIGHT.svg"} onClick={() => this.openModal()}/></div>
                      <img className="ImgMod100" src={serverString+"/temp-eugene/jaeger/green-shoots-bg-new.jpg"}/>
                      <div className="big-green-heading bghMod">Green shoots</div>

                      <div className="dark-bg-green-subheading correctCopy bgSubtextModGreen">After two years of pain things are looking up in the watch world with evidence we’re spending more on watches than we&nbsp;used&nbsp;to. <br/> <em>Bani McSpedden</em> reports.</div>
                    <div className="unfoldExpander invertDivCol">
                      <img src={serverString+"/temp-eugene/jaeger/unfold.png"} className="unfoldArrowImg" style={{width:"45px",height:"auto"}}/>
                    </div>
                    </div>
                  </div>
                  <div className="white-bg" style={{paddingTop:"5vh", paddingBottom:"22vh"}}> 
                    <div className="white-bg-text greenTextAlign correctCopy">    
                      <p>Ask a watch retailer how they’ve been doing in the past year or so and you’re likely to hear things are quiet, even tough. While figures bear that out, there are signs that the dramatic softening of the watch market of 2015 and 2016 has halted and things, if not on the mend, are at least not getting worse.</p>
                      <p>The latest figures to hand indicate that worldwide, the value of Swiss watch exports, regarded as the barometer of the industry’s health, is up this year after more than two years of downturn. That said, the rise is modest: according to the Federation of the Swiss Watch Industry, some 1.5 per cent for the year to September, while Australia is indeed down by 4.2 per cent. As for the three biggest markets in the world, it’s also a mixed bag: Hong Kong up 4.1 per cent, the United States down 4.1 per cent, China up 17.2 per cent.</p>
                      <p>To put that into perspective, total Swiss watch exports this year will approximate 2011 levels, reaching the CHF18 billion ($A24 billion) range which is still below the 2014 peak of CHF20.988 billion.</p>
                    </div>
                    <div className="imageCluster">
                    <div className="rattrapante-figure-1">
                      <img style={{}} src={serverString+"/temp-eugene/jaeger/1815 Rattrapante.png"} className="rattrapanteImg0" alt="A. Lange & Söhn’s 1815 Rattrapante Perpetual Calendar Handwerkskunst." />
                      <div style={{width:"15vw", flexGrow:"1", display:"flex", flexDirection:"column",alignItems:"center"}} className="rattrapanteCentre">
                      	<img style={{display:"none"}} src={serverString+"/temp-eugene/jaeger/1815 Rattrapante.png"} className="rattrapanteImg1" alt="A. Lange & Söhn’s 1815 Rattrapante Perpetual Calendar Handwerkskunst." />
                        <img src={serverString+"/temp-eugene/jaeger/1815-rattrapante-open.jpg"} alt="A. Lange & Söhn’s 1815 Rattrapante Perpetual Calendar Handwerkskunst. The back cover reveals the award-winning movement" className="rattrapanteImg2"/>
                        <div style={{textAlign:"center", fontSize:"small", }} className="rattrapanteCaption">
                          <b>Stellar performer</b><br/>
                          <i>Left and above: </i>
                          <span style={{fontColor:"#bbb"}}>
                          A. Lange & Söhn’s 1815 Rattrapante Perpetual Calendar Handwerkskunst. The back cover reveals the award-winning movement. <span className="hideMobile">Right</span><span className="showMobile">Below</span>: Where Swiss watch exports find a home.
                          </span>
                        </div>
                      </div>
                      <img src={serverString+"/temp-eugene/jaeger/watch-infograhic.svg"} className="rattrapanteImg3" alt="Where Swiss watch exports find a home."/>
                    </div>

                    </div>
                    <div className="white-bg-text greenTextAlign correctCopy">
                     <p>So have we lost our appetite for watches? Are we buying connected devices instead? It would seem not. Most of us already have one if not more watches, so it’s a discretionary purchase and other factors come into play, particularly cost pressure in areas such as power and education.</p>
                      <p>Interestingly, figures reveal that what growth there is has occurred primarily in the $4000 and above segment, suggesting watch buyers are hardly spending less when it comes to individual timepieces.</p>
                      <p>This chimes with word on the street that upmarket brands, A. Lange & Söhne, for example, have been enjoying strong local sales, this for timepieces that populate the healthy five- and six-figure-plus categories.</p>
                    </div>
                  </div>
                  	<div>
	                    	<div className="black-bg" style={{paddingTop:"5vh", paddingBottom:"5vh"}}>
									<div className="affordTitleMod" style={{display:"flex", alignItems:"end", flexDirection:"row", marginLeft:"19vw !important"}}>
	                        	<div className="big-heading-black-bg langePaddingMod" >Can't afford a Lange?</div>
	                        	<img className="watchDividerGreen" src={serverString+"/temp-eugene/jaeger/SINN-SAILORS-WATCH-_240StGZ_F_LB.png"} style={{marginTop:"-260px"}}/>
	                   		</div>
	                      	<div className="black-bg-text greenTextAlign removeMarginsGreen">
										<div className="divider-line divideForGreen">
		                    		<svg className="greenSVG" width="50px" height="70vh">
											<line x1="25px" y1="0" x2="25px" y2="30px" stroke="#FFFFFF"/>
											<line x2="25px" y2="30px" x1="35px" y1="40px" stroke="#FFFFFF"/>
		                          	<line x1="35px" y1="40px" x2="25px" y2="50px"  stroke="#FFFFFF"/>
		                          	<line x2="25px" y2="50px" x1="25px" y1="100%"  stroke="#FFFFFF"/>
										</svg>
	                  	</div>
	                  	<div className="correctCopy greenModTextWide">
	                      	<p>New or used, it is hard to find an A. Lange & Söhne timepiece for under $20,000, in which case you might consider a number of other impressive German brands, the specialty of importer and online retailer Define Watches. Founder Peter Petzold​ credits the internet with educating clients about the quality of brands that, compared with the Swiss, are barely promoted and "not seen on billboards everyday".</p>
	                      	<p>Such brands include the distinctly upmarket Hentschel, Lehmann, Benzinger​ and Moritz Grossmann, along with enthusiast favourites Swiss brand Armin Strom, Dornblüth​ and Austrian maker Habring, with waiting lists of up to six months for some models.</p>
	                      	<p>According to Petzold, the current bestsellers are Sinn – famed for its dive watches constructed of submarine steel – and Fortis models in the $2000 to $5000 range. Or consider this new Sinn sailors model (240 St GZ) with an under-glass tide bezel that gives you the relative water level of your location and time until the next tide. Perfect for summer, yours for $2500.</p>
	                     </div>
                      </div>
                      <div className="tiny-heading watch-bottom watch-white" style={{position:"relative",top:"10px"}}>Watch.</div>
                    </div>
                  </div>
                </div>
              </div>

            <GreenShootsModal showModal={this.state.showModal} closeModal={this.closeModal} />
            </div>
        )
    }
    
}
export default GreenShoots
