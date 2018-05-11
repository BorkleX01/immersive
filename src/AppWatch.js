import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

//import HeadObject from './frankensource/client/components/header/Helmet.js'
import {Helmet} from "react-helmet";
import ScrollToTop from './frankensource/components/helpers/scroll-to-top.js'
import Arrows from './frankensource/client/components/misc/Arrows.js'
import SideBar from './frankensource/client/components/header/Menu-no-connect.js'
import Swipeable from 'react-swipeable'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import Subpages from "./frankensource/client/components/subpages.js"

import {editionArray , pageArray , path} from './watch-data-mock.js'

import { findObjects } from './frankensource/client/components/misc/functions/findObjects.js'
import { buildRoutes } from './frankensource/client/components/misc/functions/buildRoutes.js'

import ReactPlayer from 'react-player'

import JaegerAd from './AppWatch/AdPage-2.js'
import WatchHome from './AppWatch/HomePage.js'
import Teaser from './AppWatch/Teaser.js'
import EditorsLetter from './AppWatch/EditorsLetter.js'
import WatchContents from './AppWatch/WatchContents.js'
import GreenShoots from './AppWatch/GreenShoots.js'

import TwentyTemptingTickers from './AppWatch/TwentyTemptingTickers/TwentyTemptingTickers.js'
import WhatAboutSmartWatches from './AppWatch/WhatAboutSmartWatches.js'
import HighEnd from './AppWatch/HighEnd.js'
import RicheMont from './AppWatch/RicheMont.js'
import AheadCurve from './AppWatch/AheadCurve.js'
import DressingWrist from './AppWatch/DressingWrist.js'
import VintageAllure from './AppWatch/VintageAllure.js'
import HeritageListed from './AppWatch/HeritageListed.js'
import WhatToBetOn from './AppWatch/WhatToBetOn.js'
import InsideStory from './AppWatch/InsideStory.js'
import NativeBranded from './AppWatch/NativeBranded.js'
import NotGoingOut from './AppWatch/NotGoingOut.js'
import Stockists from './AppWatch/Stockists.js'
import {serverString} from './serverInfo.js';

import SocialSharingModal from './AppWatch/SocialSharingModal.js';

export default class AppWatch extends React.Component {
    constructor(props, contex) {
        super(props, contex)
       
        

        //const currentUrl1 = findObjects(pageArray, "slug", "green-shoots-element")
        //console.log(currentUrl1)        

        this.state = {
            direction: "slideRight",
            underlay: 0,
            pageTitle: 'Immersive',
            pageLoader: true,
            pageWidth: window.innerWidth,
            swipeable: true,
            sharingModalOpen:false
          
        }
        window.yesItsAGlobalDealWithIt = {left:true, right:true}
        this.handler = this.handler.bind(this) //allow context for mouseover handler
        this.passHandler = this.passHandler.bind(this)
        this.swipedLeft = this.swipedLeft.bind(this)
        this.swipedRight = this.swipedRight.bind(this)
        this.openSharingModal = this.openSharingModal.bind(this);
        this.closeSharingModal = this.closeSharingModal.bind(this);
        
    }
    
    //when we mouseover our arrows we change the slide direction
    handler(theDirection, underlay, click) {
         this.setState({
            direction: theDirection,
            underlay: underlay
        })
    }

    //this gets values from the menu
    passHandler(theDirection){
        this.setState({
            direction: theDirection
        })
    }

    onKeyDown(event){
        if (event.key === "ArrowRight"){
           
            var arrowRight = document.getElementById("right-arrow-link")
            if (typeof(arrowRight) !== 'undefined' && arrowRight != null){
                arrowRight.click()
            }
        }

        if (event.key === "ArrowLeft"){
           
            var arrowLeft = document.getElementById("left-arrow-link")
            if (typeof(arrowLeft) !== 'undefined' && arrowLeft != null){
                arrowLeft.click()
            }
        }
    }
    swipedLeft(){
       
        //console.log("swipedLeft: "+ window.yesItsAGlobalDealWithIt.left);
        
        var element = document.getElementById("right-arrow-link")
        //if (typeof(element) !== 'undefined' && element != null && window.location.pathname !== "/watch/dressing-the-wrist"){
        if (typeof(element) !== 'undefined' && element != null && window.yesItsAGlobalDealWithIt.right){
            window.yesItsAGlobalDealWithIt = {left:true, right:true}
            
            element.click()
        }
    }

    swipedRight(){
        //console.log("swipedRight: " + window.yesItsAGlobalDealWithIt.right)
       
        
        var element = document.getElementById("left-arrow-link")
        //if (typeof(element) !== 'undefined' && element != null && window.location.pathname !== "/watch/dressing-the-wrist"){
        if (typeof(element) !== 'undefined' && element != null && window.yesItsAGlobalDealWithIt.left){
            window.yesItsAGlobalDealWithIt = {left:true, right:true}
          
            element.click()
        }
    }

    swipeableYesNo(yn){
       
        this.setState({yn})
        return yn
    }
    
    swiped(e, deltaX, deltaY, isFlick, velocity) {
        
    }

    componentDidUpdate() {
        
        //document.removeEventListener("keydown", this.onKeyDown)
        //window.yesItsAGlobalDealWithIt = {left:true, right:true}
        //console.log(window.yesItsAGlobalDealWithIt)
    }
    componentWillMount(){
       
        document.addEventListener("keydown", this.onKeyDown)
    }
    componentWillUnmount() {

        
    }

  openSharingModal () {
    this.setState({sharingModalOpen: true});
  }

  closeSharingModal() {
    this.setState({sharingModalOpen: false});
  }

    //<Arrows handler = {this.handler} theEdition={editionArray} path={path}/>
    //<SideBar menuHandler = {menuHandler} path={path} editionArray={editionArray}/>
    render() {
       
        return(
            <div id = "outer-container">
              <ScrollToTop />
              <Swipeable onSwipedLeft={this.swipedLeft}  onSwipedRight={this.swipedRight}>
                <Arrows handler = {this.handler} theEdition={editionArray} path={path}/>
              

                <Helmet>
                  <meta charSet="utf-8" />
                  <title>AFR Watch</title>
                  <link rel='stylesheet' type='text/css' href={process.env.PUBLIC_URL + "/css/watch.css"}/>
                  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
                </Helmet>
                
                <SideBar menuHandler={menuHandler} path={path} editionArray={editionArray}/>

            {/* Social Sharing Button */}
                

                  <div className="sharingPopupButton" onClick={() => this.openSharingModal()} >
                  <img style={{fill:"#c6c9ce", width:'100%', height:'100%'}} src={`${serverString}/temp-alex/watches/share.svg`} />
                  </div>
                  
                  

                <Route
                  render={({ location })=>(
                      <CSSTransitionGroup
                        transitionName={this.state.direction}
                        transitionEnterTimeout={(this.state.pageWidth > 1024 ? 500 : 750)}
                        transitionLeaveTimeout={(this.state.pageWidth > 1024 ? 500 : 750)}
                        component="main"
                        id="main">
                        <Switch key={location.key} location={location} direction={this.state.direction} reverse={this.state.reverse}>
                          <Redirect exact from={`${path}`} to={`${path}/home`}/>
                          <Route path={`${path}/home`} render = {props => (<WatchHome {...props}/>)}/>
                          <Route path={`${path}/jaeger`} render = {props => (<JaegerAd state={this.state} handleClickVideo={this.handleClickVideo}  onProgressVideo={this.onProgressVideo} buttonClickVideo={this.buttonClickVideo} {...props}/>)} />
                          <Route path={`${path}/editors-letter`} render = {props => (<EditorsLetter {...props}/>)}/>
                          <Route path={`${path}/contents`} render = {props => (<WatchContents {...props}/>)}/>
                          <Route path={`${path}/green-shoots`} render = {props => (<GreenShoots {...props}/>)}/>
                          <Route path={`${path}/what-about-smart-watches`} render = {props => (<WhatAboutSmartWatches {...props}/>)}/>
                          <Route path={`${path}/high-end-on-a-high`} render = {props => (<HighEnd {...props}/>)}/>
                          <Route path={`${path}/richemont-royalty-ramps-up-on-retail`} render = {props => (<RicheMont {...props}/>)}/>
                          <Route path={`${path}/twenty-tempting-tickers`} render = {props => (<TwentyTemptingTickers {...props}/>)}/>
                          <Route path={`${path}/ahead-of-the-curve`} render = {props => (<AheadCurve {...props}/>)}/>
                          <Route path={`${path}/dressing-the-wrist`} render = {props => (<DressingWrist swipeYesNo={this.swipeableYesNo.bind(this)} {...props}/>)}/>
                          <Route path={`${path}/vintage-allure`} render = {props => (<VintageAllure {...props}/>)}/>
                          <Route path={`${path}/heritage-listed`} render = {props => (<HeritageListed {...props}/>)}/>
                          <Route path={`${path}/what-to-bet-on`} render = {props => (<WhatToBetOn {...props}/>)}/>
                          <Route path={`${path}/inside-story`} render = {props => (<InsideStory {...props}/>)}/>
                          <Route path={`${path}/time-to-get-personal`} render = {props => (<NativeBranded {...props}/>)}/>
                          <Route path={`${path}/youre-not-going-out-like-that`} render = {props => (<NotGoingOut {...props}/>)}/>
                          <Route path={`${path}/stockists`} render = {props => (<Stockists {...props}/>)}/>
                          <Route path={`${path}/teaser`} render = {props => (<Teaser {...props}/>)}/>
                          {getRoutes(editionArray, pageArray, path)}
                      
                          <Route  render = {props => (<div>No Route</div>)}/>
                          </Switch>
                          </CSSTransitionGroup>
                  )}/>
                </Swipeable>
             
                {/* Social Sharing Modal */}
                <SocialSharingModal serverString={serverString} sharingModalOpen={this.state.sharingModalOpen} closeSharingModal={this.closeSharingModal} title={'TwentyTemptingTickers'} url={window.location.pathname} />
             
            


                </div>)

    }
    
}

function menuHandler(linkOrder) {
    //const currentUrl = findObjects(this.props.theEdition, "object_slug", window.location.pathname.replace(/\//g, '').replace('/', ''))
    const currentUrl = findObjects(this.props.theEdition, "object_slug", window.location.pathname.split('/').pop())
    var theDirection
    if (currentUrl !== null){
        if (currentUrl.order > linkOrder){ theDirection = "slideLeft" } else { theDirection = "slideRight" }
    } else {
        theDirection = "slideLeft"
    }
    
    this.props.passHandler(theDirection)
}

function getRoutes(data, acfData, path){
    if (data.length !== 0){
            return data.map((page) => {//console.log(page.object_slug)
            	if (page.object_slug === "ad-page"){
            	    return(<Route key={page.id} exact path={`${path}/${page.object_slug}`} render={props => ( <WatchArticle theEdition={acfData} order={page.order} base={path} {...props}/> )}/>)
	        } else  {
	            return(<Route key={page.id} exact path={`${path}/${page.object_slug}`} render={props => ( <WatchArticle theEdition={acfData} pageArray={data} order={page.order} base={path} {...props}/> )}/>)
	        }
            })
        }
}





const TestComponent = (props) => {
    console.log(props)
    return(<div>WATCH APP</div>)
}



const Listing = (props) => {
    console.log(props)
    return(<div>Listing</div>)
}

const WatchArticle = (props) => {
    console.log(props.match.path.split('/').pop())
    return(
        <div className={"page subpages full-width"}>
          <div id="inner" style={{marginTop: "0px", height:window.innerHeight+"px", display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
            <div>Article slug: {props.match.path.split('/').pop()}</div>
            <svg width="100" height="100"  style={{border:"1px solid black", width:"75vw", height:"75vw"}}>
              <circle cx="50%" cy="50%" r="25%" stroke="black" fill="none"/>
              <line x1="0%" x2="25%" y1="50%" y2="50%" stroke="black"/>
              <line x1="50%" x2="50%" y1="100%" y2="75%" stroke="black"/>
            </svg>
          </div>
        </div>
    )
}

const WatchArticleDummy = (props) => {
    return(
        <div className={""} style={{position:"fixed", height:"100%"}}>
          <div id="inner" style={{marginTop: "0px", height:window.innerHeight+"px", display:"flex", alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
            <div></div>
            <svg width="100" height="100"  style={{border:"1px solid black", width:"75vw", height:"75vw"}}>
              <circle cx="50%" cy="50%" r="25%" stroke="black" fill="none"/>
              <line x1="0%" x2="25%" y1="50%" y2="50%" stroke="black"/>
              <line x1="50%" x2="50%" y1="100%" y2="75%" stroke="black"/>
            </svg>
          </div>
        </div>
    )
}

const WatchListing = (props) => {
    console.log(props)
    return(<div>Watch Listing</div>)
}

