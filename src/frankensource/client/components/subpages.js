import React                                from "react"
// this is for the bottom of the page
import NextPost                             from './misc/NextPost.js'
// this searches our JSON site build for the location slug
import { findObjects }                      from './misc/functions/findObjects.js'
import {Helmet}                             from "react-helmet"
// Our ACF content builder
import Flexible                             from './flexible/Flexible.js'
// Basic social items
import Share                                from './flexible/Share.js'
import Metas                                from './misc/Metas.js'
// Click to scroll
import { scrollTo }                         from './misc/functions/scrollTo.js'
import { ParallaxController }               from 'react-scroll-parallax'

 // The parent needs to initilise the parralax
ParallaxController.init()

class Subpage extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            height: '0',
            margin: '0',
            bgClass: 'none'
          };
          this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
          this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount(){
      this.setState({
        margin: document.documentElement.scrollTop || document.body.scrollTop
      })

      setTimeout(() => {
        this.setState({
          margin: 0,
          bgClass: 'show'
        });
        window.scrollTo(0, 0)
      }, 1020)
    }


    componentDidMount() {
      this.updateWindowDimensions();
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

    handleClick() {
      scrollTo(document.body, (document.getElementById("article").offsetTop - 130), 600) // breathing room
      // use window.ga because using this.ga() or simple ga() is not within scope - it must be global
      //window.ga('send', 'event', 'Continue To Article', 'clicked', this.props.location.pathname)
    }

    render() {
        // current url returns our route and data to accompany it
        const currentUrl = findObjects(this.props.theEdition, "slug", this.props.location.pathname.split('/').pop())
        console.log(this.props.theEdition)
      if (currentUrl == null){
        return null
      }
        return (
          <div className={"page subpages " + ( currentUrl.acf.full_width_hero ? "full-width" : "not" ) }>
                <div id="inner" style={{marginTop: this.state.margin + "px"}}>
                  <div className="inside" id="height">
                    <Metas title={currentUrl.title.rendered} description={currentUrl.acf.description} theImage={currentUrl.acf.hero.url}/>
                    <Helmet>
                      <title>{currentUrl.title.rendered}</title>
                    </Helmet>
                    <div className={"the-top " + (currentUrl.acf.story_by ? "no-video" : "video")} style={{background: currentUrl.acf.radial_background_to, height: this.state.height }}>
                    <div style={{height: this.state.height, backgroundImage: "url(" + currentUrl.acf.hero.sizes.large + ")"}} className={"cover-me "  + this.state.bgClass}></div>
                      <div className="row text-holder">
                        <h1 style={{color: currentUrl.acf.text_color}}>{currentUrl.acf.sub_title}</h1>
                          <div className="large-9 medium-11 columns medium-centered">
                             <p style={{color: currentUrl.acf.text_color}}>{currentUrl.acf.excerpt}</p>
                             {currentUrl.acf.sub_excerpt ?
                                <p className="little" style={{color: currentUrl.acf.text_color}}>{currentUrl.acf.sub_excerpt}</p>
                              : null }
                             {currentUrl.acf.story_by ? <span className="article-btn" onClick={() => this.handleClick()}>CONTINUE TO ARTICLE</span> : null }
                          </div>
                      </div>
                      {currentUrl.acf.story_by ? null : <Flexible flexData={currentUrl.acf.content}/> }
                    </div>
                    {currentUrl.acf.story_by ? <Share author={currentUrl.acf.story_by} bgColor={currentUrl.acf.share_block_background} textColor={currentUrl.acf.share_block_color}/> : null }
                    {currentUrl.acf.story_by ? <Flexible flexData={currentUrl.acf.content}/> : null }
                    {currentUrl.acf.next_post.post_name ? <NextPost path={this.props.base} theEdition={this.props.theEdition} NextPostData={currentUrl.acf.next_post.post_name}/> : null }
                  </div>
                </div>
              </div>
        )
    }
}

export default Subpage
