/************************************
LET'S BUILD OUT ALL OF OUR SITE FROM THE FIRST RENDER

************************************/

import React                                        from 'react'
// this controls out routing through the site
import { Route, Switch, Redirect }                  from 'react-router-dom'
import { connect }                                  from 'react-redux'
// this controls our touch gestures
import Swipeable                                    from 'react-swipeable'
// this controls our route transitions
import CSSTransitionGroup                           from 'react-transition-group/CSSTransitionGroup'
//header
import Header                                       from '../client/components/header/Header.js'
import Arrows                                       from '../client/components/misc/Arrows.js'
import PageLoader                                   from '../client/components/misc/PageLoader'
// the head object is all the injected meta
import HeadObject                                   from '../client/components/header/Helmet.js'
import Typekit                                      from 'react-typekit'
// this controls out edition numbering
import SiteUnderlay                                 from '../client/components/misc/SiteUnderlay.js'

// these actions grab our data from the endpoints
//import { editionAction, acfAction, pageAction }     from './actions/index.js'
// this builds out our routes based on a wordpress endpoint
import { buildRoutes }                              from '../client/components/misc/functions/buildRoutes.js'

//route components
import Home                                         from '../client/components/Home.js'
import Listing                                      from '../client/components/indexPage.js'
import Missed                                       from '../client/components/missed.js'

import Subpages                                 from "../client/components/subpages.js"
import Custom                                   from "../client/components/custom"


import { fetchPosts } from '../../actions/fetch-posts.js'


//import '../client/styles/index.css'


var _ = require('lodash');

class AppHorizontal extends React.Component{
    constructor(props) {
        super(props)
        // lets set the initial state of the build. Everytime the state changes the component gets updated, depending on shallow compare, route matching and a couple of factors.
        this.state = {
            direction: "slideRight",
            underlay: 0,
            pageTitle: 'IBM',
            pageLoader: true,
            pageWidth: window.innerWidth,
            
        };
        // this is for binding data to contextually pass props and state through nested components
        this.handler = this.handler.bind(this)
        this.passHandler = this.passHandler.bind(this)
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

    //keyboard event
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

    //swiped events
    swipedLeft(){
        var element = document.getElementById("right-arrow-link")
        if (typeof(element) !== 'undefined' && element != null){
            element.click()
        }
    }

    swipedRight(){
        var element = document.getElementById("left-arrow-link")
        if (typeof(element) !== 'undefined' && element != null){
            element.click()
        }
    }

    componentWillMount(){
        this.props.fetchPosts(this.props.segment);
        document.addEventListener("keydown", this.onKeyDown)
    }

    // when the app is ready lets take off the page loader
    componentDidMount(){
        this.setState({
            pageLoader: false
        })
    }

    // unbind the keyboard event to free up memory
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown)
    }
    componentDidUpdate() {
        if (this.props.edition.editionArray.length > 0){
            //console.log(this.props.match.path+"/"+this.props.edition.editionArray[0].object_slug)
        }
    }
    render() {
        // pageArray is loaded last - once the final endpoint is loaded lets show the page If there is no data then don't render the page....
        //return this.props.edition.acfArray !== 0 ? (
        return this.props.edition.editionArray.length > 0 ? (
            
            <Swipeable onSwipedLeft={this.swipedLeft}  onSwipedRight={this.swipedRight}>
              <Arrows handler = {this.handler} theEdition={this.props.edition.editionArray} path={this.props.match.path}/>
              <div style={{marginLeft: this.state.underlay}} className="page-wrap">
                <PageLoader theClass={ this.state.pageLoader ? "no-fade" : "fade" }/>
                <Typekit kitId="llj0blg" />
                <HeadObject theTitle={this.state.pageTitle} style="horizontal"/>
                <Header passHandler = {this.passHandler} menuData={this.props.edition.editionArray} theEdition={this.props.edition.pageArray} ACF={this.props.edition.acfArray} path={this.props.match.path}/>
                <Route
                  render={({ location }) => (
                      <CSSTransitionGroup
                        transitionName={this.state.direction}
                        transitionEnterTimeout={(this.state.pageWidth > 1024 ? 1000 : 1500)}
                        transitionLeaveTimeout={(this.state.pageWidth > 1024 ? 1000 : 1500)}
                        component="main"
                        id="main">
                        <Switch key={location.key} location={location} direction={this.state.direction} reverse={this.state.reverse}>
                          <Route  path={`${this.props.match.path}/${this.props.edition.editionArray[0].object_slug}`} render={props => (<Home {...props} theEdition={this.props.edition.pageArray} ACF={this.props.edition.acfArray} />)}/>
                          <Route  path={`${this.props.match.path}/listing`} render={props => (<Listing editionArray={this.props.edition.editionArray} ACF={this.props.edition.acfArray} pageArray={this.props.edition.pageArray}  handler = {this.handler} path={this.props.match.path} {...props} /> )}/>
                          {buildRoutes(this.props.edition.editionArray, this.props.edition.pageArray, this.props.match.path)}
                          <Redirect exact from={`${this.props.match.path}`} to={`${this.props.match.path}/${this.props.edition.editionArray[0].object_slug}`} />
                          <Route component={Missed} />q
                          </Switch>
                          </CSSTransitionGroup>
                  )}/>
                <SiteUnderlay wait={1000} theEdition={this.props.edition.editionArray}/>
                </div>
                </Swipeable>
        ) : <div></div>
    }
}

const mapStateToProps = (state) => ({
    edition: state.allPosts
})


export default connect(mapStateToProps, {fetchPosts}, null, {pure:false})(AppHorizontal) //!!!

