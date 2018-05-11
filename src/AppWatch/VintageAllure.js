import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class VintageAllure extends React.Component {
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
        window.yesItsAGlobalDealWithIt = {left:true, right:true}
        addClassToRoot();
    }
    
    render(){
		return(
			<div className={"page subpages full-width"}>
				<div id="inner" style={{marginTop: "0px"}}>
					<div className="tiny-heading watch-top watch-black" style={{zIndex: "100",top: "10px"}}>Watch.</div>
					<div id="bg" className="bgExtraAllure" style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor: "#fff", paddingTop:"15vh"}}>
						<div className="allurBoundBox">
							<img style={{width:"100%"}} src={serverString+"/temp-eugene/jaeger/allur.jpg"}/>
							<span className="captionBlock">Ronny Wachtel of Vintage Watch Co.</span>
						</div>
						<div className="vAHeaderCon" style={{textAlign:"center", fontWeight:"700", fontSize:"25pt", paddingTop:"5vh", paddingBottom:"1vh", color:"#96915B"}}>
							<h1>Vintage allure</h1>
						</div>
						<div className="alignTextCol" style={{textAlign:"center", width:"50vw"}}> 
							<div>
								<h2>Whether it’s old watches or newcomers, you’d be forgiven for thinking this is the year we discovered yesteryear, and it’s not only brands eyeing the trend but retailers, too.</h2>
								<p>Story | Bani McSpedden &nbsp;&nbsp;&nbsp; Photograph | Jessica Hromas</p>
							</div>
						</div>

						<div className="alignTextCol aTCModCurve" style={{width:"60vw", paddingTop:"40px", paddingBottom:"20px"}}>

							<p>In an era when mechanical watches barely make sense as accurate timekeepers, it seems the allure of early models has never been greater.</p>
							<p>While collectors have always had a penchant for watches they might have admired in their younger days, it seems a new generation of the style-conscious has also taken to vintage watches with a vengeance. The attraction? You could argue it’s their un-iPhone-like imperfection, their ticking presence, their modest dimensions, their story and the added value of a more affordable price. Then there’s the artistry of the movement and above all the appearance and patina of wristwear from decades past.</p>
							<p>This appeal has not gone unnoticed by the major brands, many of whom this year ransacked their archives and produced current versions of watches they first released as far back as a century ago.</p>
							<p>Some observers cite this as a lack of imagination or direction, but you can’t blame folk for picking up on a trend.  Debuts in 2017 included the Oris Big Crown 1917, Longines’ Heritage 1945, Tissot’s Heritage 1948, IWC’s Tribute to Mark Xl from the same year, Blancpain’s 1950s Tribute to Fifty Fathoms MIL-SPEC, Omega’s 1957 Speedmaster/Railmaster/Seamaster trio, Rado’s 1962 HyperChrome Captain Cook diver, Ulysse Nardin’s 1964 Diver Le Locle​ and Seiko’s replica of its 1965 Prospex​ dive watch.</p>
							<p>Given such official tributes to the past, it’s no surprise retailers are now casting an envious eye over a market that’s traditionally been denied them due to stringent arrangements with the brands that supply them.</p>
							<p>Watches of Switzerland, multi-state purveyors of new wristwear from A. Lange & Söhne to Zenith, is advancing plans to enter the secondary market with a dedicated sales, service and trading operation. Chairman and founder Eric van der Griend told Watch, “Vintage is something we’re going to get into as a retailer.” In the tight world of watch retailing, where sales of new and old seldom mix, at least not overtly, this is big news.</p>

							<div className="vAQuotebox" id="break-out-box" style={{ width:"390px", float:"left", marginLeft:"-50%", padding:"40px", fontWeight:"700", fontSize:"18pt", lineHeight:"1em", display:"flex", flexDirection:"row"}}>
								<div>
									<svg width="50px" height= 
									"100%">
										<line x1="25px" y1="0" x2="25px" y2="30px" stroke="#95989A"/>    
										<line x2="25px" y2="30px" x1="35px" y1="40px" stroke="#95989A"/>          
										<line x1="35px" y1="40px" x2="25px" y2="50px"  stroke="#95989A"/> 
										<line x2="25px" y2="50px" x1="25px" y1="100%"  stroke="#95989A"/>
									</svg>
								</div>
								<div style={{color:"#96915B"}}>
								“Influencers and Instagram impact on what people are buying in a big way. Whoever heard of a wrist-shot before Instagram?”
								</div>
							</div>

							<p>Van der Griend explains: “We see particularly an opportunity with customers we’ve sold three or four watches to … they’re starting to not wear a few of them and if we can offer them an opportunity to take it back and sell them something else, we will do that. We have things organised – we have some very experienced people who understand vintage very well – and will do it online as well.</p>
							<p>“I’m not going to go out and buy a lot of watches and try and sell them, but the interest is there and we’ll start organically. We’re not going to try and corner the vintage watch market, but see it as another pillar. It’s part of the mix that customers are going to want.”</p>
							<p>That sentiment hardly comes as a surprise to the virtual veteran of the vintage market, Ronny Wachtel, a man known to collectors on the eastern seaboard thanks to his Vintage Watch Co’s outlets in Sydney, Brisbane and online, formerly Brisbane Vintage Watches and Sydney Vintage Watches (or to old hands Fredman SVW.)</p>
							<p>For Sydneysiders, the Strand Arcade mecca remains one of the few places you can buy new (Grand Seiko, Longines, Rado, Oris, MeisterSinger) or used, but it’s the latter category Wachtel has over two decades made almost his own, at least until now. (This is not to forget his Melbourne counterparts, Shonie Herbath’s​ European Watch Gallery or the Watch Gallery in the Block Arcade.)</p>
							<p>Wachtel is not surprised brands are displaying a greater interest in the secondary market than they were. “It’s part of their history and they’re starting to understand the commercial value of it.” He notes that Rolex is the one brand that will service and repair any of its models from the past.</p>
							<p>As to his own interest in timepieces, he first started buying watches as a hobby. “My father had an antique jewellery store in Brisbane. I was buying, selling and travelling a lot – this was before the internet. It was more localised – shows in Hong Kong, Singapore, Miami, Munich – and you’d buy, you’d sell, you’d advertise in the paper. Back then the only way you’d find out what a watch was worth was to ask around or look at what things brought in America. We weren’t aware of the tiny differences in dials and markings that would come to mean so much to collectors.”</p>
							<p>According to Wachtel, the massive growth of enthusiast ranks is due primarily to the internet. “The internet changed everything, it’s made the market huge.” Not only huge, but more youthful, meaning you can forget picturing some fusty retiree obsessing over an old pocket piece. Wachtel: “Our biggest demographic is getting younger – men in their late 20s to late 40s.”</p>
							<p>As to why they’ve turned to vintage, Wachtel lists several reasons: they like the vintage look, they like the price savings over a new watch and they like the search for something special. “They’ll search, say, a 1967 Rolex Submariner in certain condition, a non-date 5513 with meters first [designation on the dial]. These sell for anything between $13,000 and $20,000 – a year ago it was $10,000.” Not that Wachtel sees vintage watches as surefire investments. “Generally they’re not, but are some in this category? Definitely. I personally invest in watches, the key is to buy and sell appropriately and that comes down to analysing historical data then diversifying your portfolio.”</p>

						</div>						
					
						<div className="imgWithCaptionBlock">
							<div className="imgAboveCaption" style={{width:"100%"}}>
								<img src={serverString+"/temp-eugene/jaeger/omega-flightmaster-watch.jpg"} style={{width: "510px"}}/>
							</div>
							<span className="captionBlock" style={{marginTop:"10px", display:"block"}}>Object of desire; multi-hand Omega Flightmaster circa 1969.</span>
						</div>
						<div className="alignTextCol aTCModCurve" style={{width:"60vw", paddingTop:"20px", paddingBottom:"50px"}}>
							<p>While Wachtel singles out Rolex’s Submariner as the solid performer of the past 10 years, he pinpoints Breitling and Tag Heuer as two brands that have recently “gone crazy”. “I blame two things,” he says. “They were affordable so suddenly everyone wants one. Another reason is the role of influencers and Instagram – these impact on what people are buying in a big way. Whoever heard of a wrist-shot before Instagram?”</p>
							<p>If the Submariner is a boat you’ve missed, Wachtel offers a heads-up regarding what could be next. He mentions third-tier brands that made funky chronographs in the ’60s and ’70s, for example, Nivada, Bucherer and Enicar. “Ten years ago these were $200, now they’re approaching $5000 to $6000.” He is most enthusiastic about Omega’s early dress watches, Seamaster​ and Constellation models, believing that collectors are eyeing smaller watches of this style. “As far as quality, these Omegas are better than some Jaeger-LeCoultres of that era. They’re high-grade machines very expensively built and now worth comparatively little because they’re not chunky,” he says.</p>
							<p>Wachtel’s No. 1 rule is “condition”: “If you’re into collecting, it’s the only thing that matters and [great condition] can mean double what you’d normally get for a watch.”</p>
						</div>
					</div>
				<div className="tiny-heading watch-bottom watch-black" style={{position:"relative",transform: "translateY(-60px)", bottom:"0px"}}>Watch.</div>
				</div>
			</div>
              
      )
    }
    
}
export default VintageAllure
