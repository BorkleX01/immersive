import React                 					from "react"
import ImageBlock                           	from '../misc/ImageBlock.js'
import { Parallax } 		from 'react-scroll-parallax'

class TwoImageOneQuote extends React.Component {

componentDidMount(){
   	setTimeout(function(){ window.ParallaxController.update(); }, 1000);
}
    render() {
        return (
        	<div className="outerQuote">
        		<span className="top-half" style={{background: this.props.topHalf}}></span>
        		<span className="bottom-half" style={{background: this.props.bottomHalf}}></span>
	          	<div className="row">
	          		<div className="large-12 columns TwoImageOneQuote">
	          	    	<Parallax offsetYMax={10} offsetYMin={0} slowerScrollRate className="on-top">
			          		<div className="quote-block">
					          	<span className="quote" dangerouslySetInnerHTML={{__html: this.props.theData.quote}}/>
					        </div>
				        </Parallax>
	          			<Parallax offsetYMax={5} offsetYMin={-10} slowerScrollRate>
	          	    		<ImageBlock dataBlock={this.props.theData.image_one} theClass="first-image animation-element"/>
	          	    	</Parallax>
	          	    	<Parallax offsetYMax={0} offsetYMin={-20} slowerScrollRate>
	          	    		<ImageBlock dataBlock={this.props.theData.image_two} theClass="second-image animation-element"/>
	          	    		<span className="the-caption" style={{color:this.props.theData.caption_color, width: this.props.theData.width}} dangerouslySetInnerHTML={{__html: this.props.theData.second_image_caption}}/>
		          		</Parallax>
				    </div>
	          	</div>
	        </div>
        );
    }
}

export default TwoImageOneQuote
