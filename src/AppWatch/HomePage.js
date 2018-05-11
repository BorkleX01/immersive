import React from 'react'
import {serverString} from '../serverInfo.js'
import { addClassToRoot } from './addClassToRoot.js';

class WatchHome extends React.Component {
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
            <div className={"page subpages full-width"}>
              <div id="inner" style={{marginTop: "0px"}}>
               <div id="watch-title"className="introWatchTitle"><img src={serverString + "/temp-eugene/jaeger/WATCH-LOGO.svg"} /></div>
                    <div id="home-page-afr-logo" ><img src={serverString + "/temp-eugene/jaeger/FR-LOGO.svg"}/></div>
                <div id="bg" style={{justifyContent:"space-around" , display:"flex", flexDirection:"column", alignItems:"center", backgroundColor: "#000" , width:"100%" , height:"100vh"}}>
                 <div id="home-page-watch" style={{}}>
                    <img style={{height:"55vh"}} className="rotate-ready" onLoad={this.watchImgLoaded} src={serverString + "/temp-eugene/jaeger/Cover-watch.png"}/>
                  </div>
                </div>
              </div>
            </div>
        )
    }
    
}
export default WatchHome
