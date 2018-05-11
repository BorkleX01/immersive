import React                   					from "react"
import {Helmet}                                 from "react-helmet"

class Metas extends React.Component {
    render() {return (
        	<div>
        		<Helmet>
            	          <title>{this.props.title.toUpperCase()}</title>
		          <meta property="og:title" content={this.props.title + " | IBM - Accelerating Intelligence"}/>
			  <meta property="og:description" content={this.props.description}/>
			  <meta property="og:image" content={this.props.theImage}/>
			  <meta property="og:image:width" content={this.props.theImage.width ? this.props.theImage.width : 500}/>
			  <meta property="og:image:height" content={this.props.theImage.height ? this.props.theImage.height : 800}/>
			</Helmet>
		</div>
        );}
}

export default Metas
/*
        
    */
