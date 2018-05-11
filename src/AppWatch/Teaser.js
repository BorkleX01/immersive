import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class Teaser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            someStateBoolean : true
        };
    }

    componentDidMount(){
      addClassToRoot();     
    }
    
	render(){
		return(
			<div className={"page subpages full-width"}>
				<div id="inner" style={{marginTop: "0px", backgroundColor: "#000", width: "100vw", height: "100vh", display:"-webkit-inline-box"}}>
					<div id="watch-title" className="introWatchTitle">
						<img src={serverString + "/temp-eugene/jaeger/WATCH-LOGO.svg"} />
					</div>
					<div id="home-page-afr-logo" >
						<img src={serverString + "/temp-eugene/jaeger/FR-LOGO.svg"}/>
					</div>
					<div id="bg" style={{backgroundColor: "#000" , width:"100%" , height:"100vh", color:"#ffffff", position:"relative", backgroundImage: "url(" + serverString + "/temp-eugene/jaeger/watch-moreto-come.jpg)", backgroundRepeat:"no-repeat", backgroundPosition:"center center", backgroundSize: "contain"}}>
						<div className="teaserBox" style={{position:"absolute",top:"300px",left:"10%",display:"flex",flexDirection:"row"}}>

							<div className="divider-line" style={{marginTop:"0px", marginBottom:"10px"}}>
								<svg width="50px" height="100%">
									<line x1="25px" y1="0" x2="25px" y2="30px" stroke="#95989A"/>
									<line x2="25px" y2="30px" x1="35px" y1="40px" stroke="#95989A"/>
									<line x1="35px" y1="40px" x2="25px" y2="50px"  stroke="#95989A"/>
									<line x2="25px" y2="50px" x1="25px" y1="100%"  stroke="#95989A"/>
								</svg>
							</div>
							<div>
								<p className="trailer" style={{textAlign:"left !important",fontSize:"34px",fontWeight:"bold", margin:"0 0 20px"}}>Watch this space</p>
								<p>There are more pieces to come in this special<br/>
								2017 summer edition of Watch. Please come<br/>
								back shortly for more features, including<br/>
								Twenty tempting tickers, Vintage allure and<br/>
								What to bet on.</p>
							</div>

						</div>
					</div>
				</div>
			</div>
		)
	}
    
}
export default Teaser
