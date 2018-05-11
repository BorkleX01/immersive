// advertisement page
import React, { Component } 					          from "react"
import { findObjects }                          from './misc/functions/findObjects.js'
import {Helmet}                                 from "react-helmet"
// show a loading spinner before the page renders?
import LoadingSpinner                           from './misc/LoadingSpinner'


class Custom extends Component {
    constructor(props) {    
        super(props)
        this.state = { 
            height: '0',
            margin: '0'
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentWillMount(){
        this.setState({ 
            margin: document.documentElement.scrollTop || document.body.scrollTop
        })
        setTimeout(() => {
            this.setState({margin: 0});
            window.scrollTo(0, 0);
        }, 1020)
    }

    componentDidMount() {
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
        this.setState({ 
            margin: 0
        })
    }

    updateWindowDimensions() {
        this.setState({ 
            height: window.innerHeight
        })
    }

    render() {
	      const currentUrl = findObjects(this.props.theEdition, "slug", "ad-page")
              return currentUrl ? (
      		  <div className="page subpages custom">
              	    <Helmet>
              	      <title>Advertisement</title>
                      {/*<meta property="og:title" content={this.props.title.rendered}/>
        	      	  <meta property="og:description" content={this.props.excerpt}/>
        	      	      <meta property="og:image" content={this.props.theImage}/>
        	      		  <meta property="og:image:width" content={this.props.theImage.width ? this.props.theImage.width : 500}/> 
        	      		      <meta property="og:image:height" content={this.props.theImage.height ? this.props.theImage.height : 800}/>
                                      */}
              			      <style type="text/css">{currentUrl.acf.styles}</style>	
              	    </Helmet>
              	    <div className="the-top" id="inner" style={{height: this.state.height, marginTop: this.state.margin + "px"}}>
                      <div className="inside" id="height">
        	        <div className="row">             
        		  <div dangerouslySetInnerHTML={{__html: currentUrl.acf.html}}/>
        	        </div>
                      </div>
                    </div>
              	  </div>
              ) : <LoadingSpinner />
             }
}
export default Custom
