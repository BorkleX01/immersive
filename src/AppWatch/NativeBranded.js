import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class NativeBranded extends React.Component {
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
				<div id="inner" className="nativeInner" style={{marginTop: "0px"}}>
				  <div className="tiny-heading watch-top watch-white" style={{zIndex: "100",top: "10px", position:"absolute", background:"none"}}>Watch.</div>
					<div className="nativeHeroOverlay">
						<div className="nativeVertSplit35"> 
							<div className="nativeSubTop">
								<p><i>This article was produced in partnership with Jaeger-LeCoultre</i></p>
							</div>
						</div>
						<div className="nativeVertSplit30">
							<h1> Time to get personal </h1>
						</div>
						<div className="nativeVertSplit35">
						</div>
					</div>
					<div className="nativeHeroCon">
						<img className="nativeHeroImg jlcHeroDesktopImg" src={serverString+"/temp-eugene/jaeger/nativeAdd/carHero.jpg"}/>
						<img className="nativeHeroImg jlcHeroTabletImg" src={serverString+"/temp-eugene/jaeger/nativeAdd/carHeroTab.jpg"}/>
						<img className="nativeHeroImg jlcHeroMobileImg" src={serverString+"/temp-eugene/jaeger/nativeAdd/carHeroMob.jpg"}/>
					</div>
					<div className="nativeBody">
						<div className="nativeBodyCol">
							<p><b>The ability to personalise the Jaeger-LeCoultre Reverso timepiece has made it and its pivoting dial famous.</b></p>
							<p>The Reverso is a watch with a story to tell. Its legacy began in 1931 when British polo players in India found that their wristwatches were not withstanding the knockabouts of the sport. A British Army officer challenged Swiss businessman César de Trey to create a more robust watch. De Trey then partnered with Jacques-David LeCoultre, who invented a case that could pivot 180 degrees to protect the dial.</p>
							<p>Today it’s not protection the Reverso is best known for, but projection, the opportunity to reflect something important to the wearer.</p>
							<p>In searching for a man that fully appreciates the possibilities offered by Jaeger-LeCoultre’s Reverso watch, you could do worse than discover Maxence Kinget, and not because he’s the maison’s managing director for South East Asia.</p>
							<p>While by day Kinget is an immaculately turned-out businessman, his Reverso Ultra Thin gives a clue to his adventurous side, the timepiece featuring a perfectly etched red Renault on the flip side, a car he drove across a desert in Morocco for a charity race in 2004.</p>
							<p>The sentiment behind the engraving and the skill required to capture it is an example of “the beauty that JLC can create”, says Kinget, in this case a memory right there on your wrist.</p>
							<p>No doubt the little red Renault has been a sales aid to a man whose enthusiasm for the brand – and the watch – is infectious. After all, the Reverso is one watch that’s not just about time-telling; rather, it offers clients a rare canvas for marking a special occasion or even possession.</p>
							<p>Some clients, Kinget notes, choose to reproduce their favourite artworks on the caseback of their Reverso watches while others have used the space to engrave a marriage proposal.</p>


							<div className="imagHolderNativeCon">
								<img className="nativeSubImg1" src={serverString+"/temp-eugene/jaeger/nativeAdd/sub1.jpg"}/>
								<span className="captionBlock">Maxence Kinget, Jaeger-LeCoultre's managing director for South East Asia.</span>
							</div>

							<p>It is this ability to personalise, and for its wearers to showcase what’s special to them – even who they are –  that has made the timepiece with its pivoting dial famous and easily recognisable since its launch in 1931.</p>
							<p>While the blank space it offers is ideal for engraving, it’s also the ideal home for gem setting, lacquering or enamelling, or in the case of the Duo and Duetto models, a second watch face and second time zone provide a practical solution for the traveller.</p>
							<p>Mostly, though, Kinget believes the Reverso’s appeal is personal: “Watch enthusiasts want to tell a special story about themselves, their experience, their adventure, their lifestyle, what they have on their mind.”</p>
							<p>Aside from that, he notes the distinctively rectangular watch’s understated design and its Art Deco aesthetic with clean lines and the three parallel gadroons that traditionally surround the dial.</p>
							<p>Then there are the complications that the maison’s “crazy watchmakers” continue to add to the piece, including the 2006 Reverso Grande Complication a Triptyque, the first watch to have three dials powered by the same movement.</p>
							<p>But it’s the double-faced Duo line Introduced in 1994 that Kinget says best meets the demands of a busy modern life.</p>
							<p>You might be on the work trip to New York, say, but also want to know when it’s dinnertime in Sydney. It has a double watch face, with one movement for two time zones.</p>
							<div className="imagHolderNativeCon"><img className="nativeSubImg2" src={serverString+"/temp-eugene/jaeger/nativeAdd/sub2.jpg"}/></div>
							<p>In 2016, the year Reverso turned the grand age of 85, a limited-edition advancement on the Reverso Tribute Gyrotourbillon was introduced. At the front, a sleek sunray guilloche pattern gives the watch a luxe look while on the reverse a skeleton movement and a double axis tourbillon in a spherical cage that appears to float in space offer a mesmerising spectacle.</p>
							<p>The Duetto concept was introduced in 1997 for women, again with two watch faces, a more casual white face for the day and a dressier black face on the flipside for gallivanting into the night.</p>
							<p>Even the basic detail is impressive. The watch case alone has more than 50 components, making it one of the most complex in the world, while in the cradle of the watch are the round scale-like decorations that women in the atelier apply by hand.</p>
							<p>“They are so skilled, it looks like the precision of a machine,” notes Kinget, adding that for Jaeger-LeCoultre, which still does all of its manufacturing in-house, craftsmanship is at the heart of everything that it produces.</p>
							<p>A Reverso, says Kinget, “is more than a timepiece, it is an object that is connecting the past with the future”.</p>
							<p>“Look at the Reverso from the 30s, the 40s, the 50s,” Kinget suggests. “You will recognise it in a second, but year after year we find new ideas, new details. You won’t see it but there is permanent evolution toward reaching higher quality.”</p>
							<br/><br/>
							<div className="jLogoContainer">
								<img className="jLogo" src={serverString+"/temp-eugene/jaeger/nativeAdd/jLogo.svg"}/>
							</div>
						</div>
					</div>
					<div className="tiny-heading watch-bottom watch-black" style={{position:"relative",top:"0px"}}>Watch.</div>
				</div>
			</div>
        )        
    }
    
}
export default NativeBranded
