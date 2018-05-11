import React                  	from "react"

class Share extends React.Component {

    render() {
        return (
            <div style={{background: this.props.bgColor }}>
	      <div className="row">
	        <div className="share-block large-7 medium-10 small-11 columns small-centered" style={{borderColor: this.props.textColor}}>
	          <div className="the-share">
	            <span style={{color: this.props.textColor}}>Share:</span>
	            <a style={{color: this.props.textColor}} href={"http://www.twitter.com/share?url=" + window.location.href} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter-square" aria-hidden="false"></i></a>
	            <a style={{color: this.props.textColor}} href={"http://www.facebook.com/sharer.php?u=" + window.location.href} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-official" aria-hidden="false"></i></a>
	            <a style={{color: this.props.textColor}} href={"mailto:?Subject=Hey%20-%20Check%20out%20this%20article%21&Body=" + window.location.href}><i className="fa fa-envelope" aria-hidden="false"></i></a>
	          </div>
	          <div className="the-story" style={{color: this.props.textColor}}>
	            Story: {this.props.author}
	          </div>
	        </div>
	      </div>
	    </div>
        );
    }
}

export default Share
