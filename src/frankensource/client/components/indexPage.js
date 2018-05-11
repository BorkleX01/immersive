// this is our listing page
import React                                from "react"
import { NavLink }                          from "react-router-dom"
import { findObjects }                      from './misc/functions/findObjects.js'
import ImageBlockNoMobile                   from './misc/ImageBlockNoMobile.js'
import Metas                                from './misc/Metas.js'

class Listing extends React.Component {
    constructor(props) {    
        super(props)
          this.state = { 
            margin: '0'
          }
    }

    handleItemClick () {
      this.setState({
        menuOpen: false
      })
    }

    componentWillMount(){
      this.setState({ 
        margin: document.documentElement.scrollTop || document.body.scrollTop
      })

      setTimeout(() => {
        this.setState({
          margin: 0,
          bgClass: 'show'
        })
        window.scrollTo(0, 0)
      }, 1020)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions)
      this.setState({ 
        margin: 0
      })
    }

    render() {
      //collects data and builds out the page using .map
      // when using .map all your items must have a key/ID
      const editionArray = this.props.editionArray
      const pageArray = this.props.pageArray
        const currentUrl = findObjects(pageArray, "slug", 'listing')
      const acfUrl = this.props.ACF
      if (currentUrl == null){
        return null
      }
        return (
            <div className="page">
              <Metas title="ACCELERATING INTELLIGENCE" description="Some description from ACF" theImage={currentUrl.acf.page_background.url}/>
              <div className="theWrap listing" id="inner" style={{marginTop: this.state.margin + "px"}}>
                <div className="outside-bg" style={{backgroundImage: `url(${currentUrl.acf.page_background.url})`}}>
                  <div className="row">
                    <h1>ACCELERATING INTELLIGENCE</h1>
                  </div>
                </div>
                <div className="block-wrap">
                  
                  {editionArray.map((items, key) => {
                      
                      if (items.Show === "yes"){
                        return (
                            <div className="row" key={key}>
                              <NavLink 
                              key={items.id} 
                              to={`${this.props.path}/${items.object_slug}`} 
                              onClick={() => this.handleItemClick()}
                              onMouseOver={() => this.props.handler("slideRight", 0)}
                              className="block animate">
                              {items.theImageID ? 
                                  <div className="medium-4 columns image-wrap">
                                    <ImageBlockNoMobile dataBlock={items.theImageID} title={items.title} pixel={acfUrl.pixel}/>
                                  </div> : <div className="medium-4 columns image-wrap">
                                    <img src="http://via.placeholder.com/636x636" alt="placeholder"/>
                                  </div> }                          
                                <div className="medium-8 small-8 columns">
                                  <span className="theText">
                                    <span className="page-number">Page{key - 1}</span>
                                    <span className="the-title">{items.title}</span>
                                  </span>
                                </div>
                                  <div className="bottom medium-8 small-4">
                                    <span className="time">{items.attr}</span>
                                    <span className="read-more">Read More >></span>
                                  </div>
                              </NavLink>
                            </div>
                        )
                      } else {
                        return null
                      }                     
                  })}
                </div>
              </div>
            </div>
        );
    }
}


export default Listing
