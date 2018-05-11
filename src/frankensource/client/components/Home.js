import React                                    from "react";
import ReactPlayer                              from 'react-player'
import { findObjects }                          from './misc/functions/findObjects.js';
import Metas                                    from './misc/Metas.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          height: '0',
          opacity: '0'
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.prerenderReady = true;
      window.addEventListener('resize', this.updateWindowDimensions);
        setTimeout(() => {
        this.setState({
          opacity: '1'
        });
      }, 1020)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      this.setState({
        height: window.innerHeight
      });
    }
    componentDidUpdate(){
    }
    render() {
      //hard coded frontpage value
        //console.log(this.props);
        const currentUrl = findObjects(this.props.theEdition, "slug", 'ibm-accelerating-intelligence')
        const acfUrl = this.props.ACF
        return currentUrl !== null ? (
            <div className="page the-home" style={{height: this.state.height, minHeight: "500px", overflow: "hidden"}}>
                <Metas title="" description="The high stakes race to harness cognitive systems" theImage={currentUrl.acf.hero.url}/>
                <div className="theWrap home" id="inner">
                  <div className="inside" id="height">
                    <img src={acfUrl.boss_image.url} alt="BOSS" className="BOSS"/>
                    <a href="http://bs.serving-sys.com/serving/adServer.bs?cn=trd&mc=click&pli=22311234&PluID=0&ord=[timestamp]" rel="noopener noreferrer" target="_blank" className="ibm-text">
                      <span>In partnership with IBM</span>
                      <img src={acfUrl.ibm_text.url} alt="BOSS Text"/>
                    </a>
                      <div className="hide"  style={{opacity: this.state.opacity}}>
                            <ReactPlayer
                            url={acfUrl.movie}
                              config={{ file: { attributes: { poster: "http://specialedition.afr.com/wp-content/uploads/2017/08/IMB-image-Hero-300x272.jpg" } } }}
                              height={"100%"}
                              width={"100%"}
                              playing
                              loop={true}
                              id="HomeVideo"/>
                      </div>
                    <div className="the-bottom">
                      <div className="letters">
                          {currentUrl.acf.letter_repeater.map((items, key) => {
                              return (
                                <span key={key} style={{color: items.color}}>{items.letter}</span>
                              )
                        })}
                          <span className="no-color"> INTELLIGENCE</span><br/>
                      </div>
                      <p className="under">The high stakes race to harness cognitive systems</p>
                    </div>
                  </div>
                </div>
              </div>
        ) : <div></div>
    }
}

export default Home
