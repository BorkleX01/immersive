import React													from "react"
import { Link } 												from "react-router-dom"
import { findObjects }                     		 				from './functions/findObjects.js'


class Arrows extends React.Component {
    constructor (props, context) {
        super(props)
        this.state = {

	}
    	this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    heightMe(){
	const inner = document.getElementById('inner')
	if (inner != null){
	    var docHeight = inner.clientHeight || inner.offsetHeight
	    document.getElementById("outer-container").style.height = docHeight + "px"
	}
    }

    heightAgain(){
    	setTimeout(() => {
    	    this.heightMe()
        }, 2000);
    }

    componentWillMount(){
        
        this.setState({
            margin: document.documentElement.scrollTop || document.body.scrollTop
        })
        setTimeout(() => {
            this.setState({margin: 0})
            window.scrollTo(0, 0)
        }, 1020)
    }

    componentDidMount() {
       
	this.updateWindowDimensions()
	window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions() {
	this.heightMe()
    }

    render() {
	this.heightMe()
	this.heightAgain()
	var leftPage = '/'
	var rightPage = '/'
	const theEdition = this.props.theEdition
	var theEditionLength
	const location = window.location.pathname
        
        
	var currentUrl
	var pageOrder
        
	/*if (theEdition.length > 1){
	    theEditionLength = theEdition.length
	    if (window.location.pathname.split('/').pop() !== theEdition[0].object_slug){
		currentUrl = findObjects(theEdition, "object_slug", location.split('/').pop())
		if (currentUrl){
		    pageOrder = findObjects(theEdition, "order", currentUrl.order)
		    if (pageOrder.order === theEditionLength){
			leftPage = findObjects(theEdition, "order", (currentUrl.order - 1));
			leftPage = leftPage.object_slug
			rightPage = ""
		    } else {
			leftPage = findObjects(theEdition, "order", (currentUrl.order - 1))
			rightPage = findObjects(theEdition, "order", (currentUrl.order + 1))
			if (leftPage.object_slug === null || leftPage.object_slug === "index"){
			    leftPage = ''
			} else {
			    leftPage = leftPage.object_slug
			}
			rightPage = rightPage.object_slug
		    }
		}
	    } else {
		currentUrl = theEdition[0].object_slug
		if (currentUrl){
		    rightPage = "listing"
		    leftPage = null
		}
	    }
	}*/
        if (theEdition.length > 1){
            theEditionLength = theEdition.length
            
            currentUrl = findObjects(theEdition, "object_slug", location.split('/').pop())
            if(currentUrl === null){
                currentUrl = theEdition[0]
            }

            if(currentUrl.order > 1)
            {
                leftPage = findObjects(theEdition, "order", (currentUrl.order - 1)).object_slug
            }else{
                leftPage = ''
            }

            if(currentUrl.order < theEditionLength-1)
            {
	        rightPage = findObjects(theEdition, "order", (currentUrl.order + 1)).object_slug
            }else{
                rightPage = ''
            }

            //console.log(theEditionLength + " " + currentUrl.order + ": " + leftPage + " <> " + rightPage)
            
        }
        
	return currentUrl ? (
	    <div className={"arrow-wrap " + ( leftPage ? "only-left" : "only-right" ) }>
	      <div id="right-arrow" className={"arrow " + ( leftPage ? "only-left" : "only-right" ) } onMouseOver={() => this.props.handler("slideRight", -145)} onMouseOut={() => this.props.handler("slideRight", 0)} onClick={() => this.props.handler("slideRight", 0, true)}>
		<Link to={this.props.path + "/" + rightPage}>
		  <i className="fa fa-angle-right" aria-hidden="true" id="right-arrow-link"></i>
		</Link>
	      </div>
	      {leftPage ? <div id="left-arrow" className="arrow" onMouseOver={() => this.props.handler("slideLeft", 145)} onMouseOut={() => this.props.handler("slideLeft", 0)} onClick={() => this.props.handler("slideLeft", 0, true)}>
		    <Link to={this.props.path + "/" + leftPage}>
			  <i className="fa fa-angle-left" aria-hidden="true" id="left-arrow-link"></i>
			</Link>
	      </div> : null}
	    </div>
	) : null
    }
}

export default Arrows
