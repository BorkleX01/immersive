import React         		    from 'react'
import SideBar              from './Menu.js'
import SiteStrip            from './SiteStrip.js'
import { findObjects }      from '../misc/functions/findObjects.js'


class Header extends React.Component {
    constructor(props) {
	super(props)
	this.state = {
            direction: ""
        }
        this.menuHandler = this.menuHandler.bind(this)
    }

    //when we mouseover our arrows we change the slide direction
    menuHandler(linkOrder) {
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

    render() {
        var thePath = window.location.pathname
        if (window.location.pathname === "/"){
            thePath = "index"
        } else {
            //thePath = window.location.pathname.replace(/\//g, '').replace('/', '')
            thePath = window.location.pathname.split('/').pop();
        }
        if (thePath === 'accelerating-intelligence'){thePath = 'ibm-accelerating-intelligence'}
        const currentUrl = findObjects(this.props.theEdition, "slug", thePath)
        const ACF = this.props.ACF
        return currentUrl ? (
            <header id="header">
              <div className="inside">
                <span className="top"><span>{ACF.breadcrumb_title}</span> <span className="no-mobile">{currentUrl.acf.sub_title ? "| " + currentUrl.acf.sub_title : null}</span> <span className="on-mobile">&nbsp;| BOSS</span></span>
              </div>
              <SideBar menuHandler = {this.menuHandler} path={this.props.path}/>
              <SiteStrip/>
            </header>
        ) : <header id="header">
            <div className="inside">
            <span className="top"><span>{ACF.breadcrumb_title}</span></span>
          </div>
              <SideBar menuHandler = {this.menuHandler} path={this.props.path}/>
              <SiteStrip/>
        </header>
  }
}

 export default Header
