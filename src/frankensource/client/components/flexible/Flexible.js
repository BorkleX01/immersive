/**************************************

This is where the magic happens - Grab the ACF array for the page, look through the content, using a case and switch, and then deliver
the content. It's very similar to an ACF loop.

**************************************/
import React                  					from "react"
import { connect }                          	from 'react-redux'
import Text                           			from './Text.js'
import OneImageOneQuote                         from './OneImageOneQuote.js'
import TwoImageOneQuote                         from './TwoImageOneQuote.js'
import ImageCaption                         	from './ImageCaption.js'
import Video                         			from './Video.js'

class Flexible extends React.Component {
    render() {
    	let AcfData = this.props.flexData    
    	var count = 0
        console.log(AcfData)
	for (var k in AcfData) {
	    if (AcfData.hasOwnProperty(k)) count++
	}	
    	var pageData = Object.keys(AcfData).map(function(s, key){
    	    var top = (AcfData[s - 1])
    	    var bottom
    	    if (AcfData[s] <= count){
    		bottom = AcfData[s + 1]
    	    } else {
    		bottom = AcfData[s]
    	    }
    	    switch(AcfData[s].acf_fc_layout) {    	      	
	    case 'text': 
		return(
		    <Text key={key} theData={AcfData[s]} order={key}/>
		)
	    case 'One_image_one_quote': 
		return(
		    <OneImageOneQuote key={key} theData={AcfData[s]} topHalf={top.section_colour} bottomHalf={bottom.section_colour} />
		)
	    case 'two_images_one_quote': 
		return(
		    <TwoImageOneQuote key={key} theData={AcfData[s]} topHalf={top.section_colour} bottomHalf={bottom.section_colour}/>
		)
	    case 'image_caption': 
		return(
		    <ImageCaption key={key} theData={AcfData[s]} topHalf={top.section_colour} bottomHalf={bottom.section_colour}/>
		)
	    case 'video': 
		return(
		    <Video key={key} theData={AcfData[s]}/>
		);
	    default:
		return(
		    <div></div>
		)
	    }
    	});
        return (
            <div id="article">
              {pageData}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
	edition: state.edition
    }
} 

export default connect(mapStateToProps)(Flexible)
