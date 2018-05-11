import React                                  from "react"
import { NavLink}                             from 'react-router-dom'
import ImageBlock                           	from './ImageBlock.js'
import { findObjects }                      	from './functions/findObjects.js'

class NextPost extends React.Component {
  handleItemClick () {
    this.setState({
      menuOpen: false
    })
  }
    
    render() {
        console.log(this.props);
    	var thecurrentUrl = this.props.NextPostData;
      	const currentUrl = findObjects(this.props.theEdition, "slug", thecurrentUrl);
        console.log(thecurrentUrl);
      	const theSizes = currentUrl.acf.hero;
        return (
            <div className="footer-block">
              <NavLink to={`${this.props.path}/${currentUrl.slug}`} onClick={() => this.handleItemClick()}>
                <div className="top-strip">
                  {theSizes ? <ImageBlock dataBlock={theSizes} background={true}/> : null }
                  <div className="text-block">
    	            <h3>Next Article</h3>
    	            <h2>{currentUrl.title.rendered}</h2>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
    	          </div>
                </div>
              </NavLink>
              <div className="bottom-strip">
                <span className="small-text">In partnership with IBM</span>
                <a href="http://bs.serving-sys.com/serving/adServer.bs?cn=trd&mc=click&pli=22311238&PluID=0&ord=[timestamp]" target="_blank" rel="noopener noreferrer">
                  <img src={/*this.props.edition.acfArray.ibm_text_white.url*/ "http://specialedition.afr.com/wp-content/uploads/2017/08/IMB-Logo-Rev.svg"} alt="ibm logo"/>
                </a>
              </div>
            </div>
        );
    }
}

export default NextPost
