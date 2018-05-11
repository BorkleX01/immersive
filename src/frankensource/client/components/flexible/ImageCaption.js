import React                 					from "react"
import ImageBlock                           	from '../misc/ImageBlock.js'

class ImageCaption extends React.Component {

    render() {
        return (
        	<div className="outerQuote">
        		<span className="top-half" style={{background: this.props.topHalf}}></span>
        		<span className="bottom-half" style={{background: this.props.bottomHalf}}></span>
	          	<div className="row">
	          		<div className="large-12 columns Caption">
	          	    	<ImageBlock dataBlock={this.props.theData.the_image}/>
	          	    	<span className="caption" style={{color:this.props.theData.caption_color}} dangerouslySetInnerHTML={{__html: this.props.theData.caption}}/>
				    </div>
	          	</div>
	        </div>
        );
    }
}

export default ImageCaption