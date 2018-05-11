import React from 'react'
import {serverString} from '../serverInfo.js';
import EditorsLetterModal from './EditorsLetterModal.js';
import { addClassToRoot } from './addClassToRoot.js';

class EditorsLetter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            someStateBoolean : true
        };

        this.watchImgLoaded = this.watchImgLoaded.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    watchImgLoaded(e){
        
        e.target.className = "rotate-to-placement"
       
    }

    componentDidMount(){
      addClassToRoot();
    }


    openModal () {
      this.setState({showModal: true})
      
    }

    closeModal (){
      this.setState({showModal: false})
    }
    
    render(){
        return(
            <div className={"page subpages full-width editorsPage"}>
              <div id="inner" style={{marginTop: "0px"}}>
              	<div className="tiny-heading watch-top watch-black" style={{zIndex: "100",top: "10px", left:"0"}}>Watch.</div>
                <div id="bg" className="editorBg editorBgMod" style={{paddingLeft:"5%", paddingTop:"2%",paddingBottom:"2%", paddingRight:"5%",justifyContent: "space-around", display:"flex", flexDirection:"row", alignItems:"top", backgroundColor: "#fff" , width:"100%" }}>
                  <div className="editor-columns left">
                    <div className="editor-portrait">
                      <img src={serverString+"/temp-eugene/jaeger/Bani-McSpedden.jpg"} style={{borderRadius:"50%", width:"180px"}} alt="Bani McSpedden"/>
                      <div className="title-editors"><b>Editor's letter</b></div>
                      <div className="portrait-caption">
                        <b>Bani McSpedden</b>
                        <br/>Watch editor of
                        <br/><i>The Australian Financial Review</i>
                        <br/>and of watch-next.com
                      </div>
                    </div>
               
                    <div className="lower-left modalOpenDesk">
                      <div className="from-cover-linkout">
                        <img src={serverString+"/temp-eugene/jaeger/from-cover-linkout.jpg"} onClick={() => this.openModal()} />
                      </div>
                      <div className="from-the-cover-caption"><b>On the Cover</b></div>
                    </div>
                  </div>
                  <div className="divider-line editorDivider">
							<svg width="50px" height="100%">
								<line x1="25px" y1="0" x2="25px" y2="30px" stroke="#95989A"/>
								<line x2="25px" y2="30px" x1="35px" y1="40px" stroke="#95989A"/>
								<line x1="35px" y1="40px" x2="25px" y2="50px"  stroke="#95989A"/>
								<line x2="25px" y2="50px" x1="25px" y1="100%"  stroke="#95989A"/>
							</svg>
                  </div>
                  <div id="editors-letter" className="editor-columns right rightEditor">
                    <p><strong>Just in time for Christmas it seems</strong> things are looking up a tick in the watch industry, one that’s gone through a slump since 2014. Swiss exports, the barometer, have improved a fraction with a re-sprouting of demand in China (up 17.2 per cent through the first seven months of 2017), and the world’s most important market, Hong Kong, shows signs of recovery, albeit modest. Not that things are expected to return to some heady version of “normal” – there’s too much change in the air, as you’ll see in our opening look at the ebbs and flows the wrist world is experiencing.</p>
                    <p>Those ups and downs can be seen in the watches themselves; looking at this year’s crop you could be forgiven for thinking that brands aren’t sure whether to look to the past – with longing – or the future, as Zenith has done with a revolutionary new movement we take a close look at. In fact, and as you’ll see in these pages, there’s more horological variety and va-voom on offer than ever before be it cog-driven or connected.</p>
                    <p>That said, more brands than usual have ransacked the archives to produce newcomers with the allure of yesteryear mindful, no doubt, that interest in vintage watches – the originals – has never been greater. On that score, keen collectors looking for tips may want to read about the man who’s made trading in old tickers his territory. We also reveal how one retailer of new watches is eyeing a piece of the oldies’ action.</p>
                    <p>Old or new, you’ll find Cartier’s freshened Tank troupe – marking 100 years on the war path – and a host of other newcomers staking a claim for your – or a favourite’s – forearm. In other words, and in more ways than one, that makes this summer edition of Watch a vintage one.</p>
                  </div>
                  
                </div>
                <div className="lower-left modalOpenMob">
                      <div className="from-cover-linkout">
                        <img src={serverString+"/temp-eugene/jaeger/from-cover-linkout.jpg"} onClick={() => this.openModal()} />
                      </div>
                      <div className="from-the-cover-caption"><b>On the Cover</b></div>
                    </div>
              </div>

					<div className="tiny-heading watch-bottom watch-black" style={{    transform: "translateY(-50px)", bottom:"initial"}}>Watch.</div>

              <EditorsLetterModal showModal={this.state.showModal} closeModal={this.closeModal} />
            </div>
        )
    }
    
}
export default EditorsLetter
