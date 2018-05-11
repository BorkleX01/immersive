import React                   	from "react"

class Text extends React.Component {

    render() {
        return (
            <div className="text-block" id={"block" + this.props.order} style={{background: this.props.theData.section_colour}}>
	      <div className="row">
	        <div className="large-7 medium-10 small-11 columns small-centered">
		  {this.props.theData.small_heading ? <h3 style={{color: this.props.theData.heading_colour}}>{this.props.theData.small_heading}</h3> : null }
		  <div dangerouslySetInnerHTML={ {__html: this.props.theData.content} } style={{color: this.props.theData.text_colour}}></div>
		</div>
	      </div>
            </div>
        );
    }
}

export default Text
