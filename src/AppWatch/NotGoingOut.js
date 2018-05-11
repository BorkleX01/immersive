import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class NotGoingOut extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            someStateBoolean : true
        };

        this.watchImgLoaded = this.watchImgLoaded.bind(this)


        // page has loaded, lets try and apply a css fix
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
            <div className={"page subpages full-width heightIt17"}>
              <div id="inner" className="inner18" style={{marginTop: "0px", backgroundColor: "#000"}}>
               <div className="tiny-heading watch-top watch-white" style={{zIndex: "100",top: "30px", left:"0"}}>Watch.</div> 
                <div className="watch17Holder">

                   <div className="w17HEROMOBILE">
                      <img className="w17HeroImgMOBILE" src={serverString+"/temp-eugene/jaeger/notgoingout/hero.jpg"}/>
                    </div>

                    <div className="w17WdivideL" id="w17WdivideL" style={{lineHeight:"1em", textAlign:"left",  paddingTop:"5vh", paddingBottom:"5vh", color:"#fff"}}>
                     <h1 className="notgoingout-heading" style={{fontWeight: 700}}>You’re not going out in that?</h1>
                     <p><em>Words</em> <strong>BANI McSPEDDEN</strong></p>
                   
                         <p>The press release for this gruesome gimmick invites one to “imagine this bloodthirsty Raging Skull on your wrist!”, a thought many of us might find a challenge.</p>
                         <p>Described as indicative of watchmaker Yvan Arpa’s​ “genius” at combining creativity and complexity, the ArtyA Son of a Gun Raging Skull mixes silver bullets and skulls with blood, “while at the same time showcasing the high-end automatic Swiss movement inside this beast”.</p>
                         <p>That may be difficult  to spot, but apparently every detail is worked on with “precision, artistry and the highest level of craftsmanship” which begs the question, why?</p>
                         <p>We agree, though, with Arpa’s pitch: “So much is going on, you will notice something different every time you look at it – and you won’t be able to stop looking at it!”,</p>
                         <p>Spanning 47mm helps, and how else to get your money’s worth? Especially given the ask is around $26,000 thank you.</p>
              
                   </div>
                    <div className="w17WdivideR">
                      <img className="w17HeroImg" src={serverString+"/temp-eugene/jaeger/notgoingout/hero.jpg"}/>
                    </div>
                </div>
                <div className="tiny-heading watch-bottom watch-white" style={{    transform: "translateY(-50px)", bottom:"initial"}}>Watch.</div>
              </div>
            </div>
        )
    }
    
}
export default NotGoingOut
