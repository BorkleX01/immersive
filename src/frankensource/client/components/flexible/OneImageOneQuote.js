import React                 					from "react"
import ImageBlock                           	from '../misc/ImageBlock.js'
import { Parallax } 		from 'react-scroll-parallax'

class OneImageOneQuote  extends React.Component {

    componentDidMount(){
   	setTimeout(function(){ window.ParallaxController.update(); }, 1000);
    }
    render() {
        return (
            <div className="outerQuote">
              <span className="top-half" style={{background: this.props.topHalf}}></span>
              <span className="bottom-half" style={{background: this.props.bottomHalf}}></span>
	      <div className="row">
	        <div className="large-12 columns OneImageOneQuote">
	          <Parallax offsetYMax={"70px"} offsetYMin={"-70px"} slowerScrollRate>
	            <ImageBlock dataBlock={this.props.theData.the_image}/>
	          </Parallax>
	          <Parallax offsetYMax={5} offsetYMin={0} slowerScrollRate>
		    <div className="quote-block">
		      <span className="quote" dangerouslySetInnerHTML={{__html: this.props.theData.quote}}/>
		      <span className="quoter">{this.props.theData.quoter}</span>

		    </div>
		  </Parallax>
		</div>
	      </div>
	    </div>
        );
    }
}

export default OneImageOneQuote
