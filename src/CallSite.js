import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch/*, Redirect*/} from 'react-router-dom'
import { fetchPosts, getSites, setPaths} from './actions/fetch-posts.js'
import AppHorizontal from './frankensource/shared/App.js'
import AppVertical from './frankensource/containers/app/index.js'
import { connect } from 'react-redux'
import AppWatch from './AppWatch.js'


var sites = []
//var paths = []
class SiteSelector extends React.Component{
    /*constructor(props){
        super(props)
    }*/
    componentWillMount(){
     
        
        if ((window.location.pathname.split('/').length > 2)&&(window.location.pathname.endsWith('/'))){
            window.location = window.location.pathname.replace(/\/$/,"")
        }
        
        this.props.getSites()
        //this.props.setPaths({segments:["dog", "cat", "wombat"] , current:"dugong"})
        this.props.setPaths({segments: window.location.pathname.split('/').slice(1,window.location.pathname.split('/').length-1) , current:window.location.pathname.split('/').pop()})
    }
    componentDidUpdate(){
        sites = this.props.edition.campaign
    }

    render(){
        const CallSite = (props) => {
            const match = props.match;
            var obj;
            getCampaign(match.params.segment) ? obj = getCampaign(match.params.segment) : window.location = '/';
            return(<div>
                   <p>{obj.name}</p>
                   <ul>
                   {obj.campaigns.map((n, index, o)=>(
                       <li key={index}>
                         <Link to={`${match.url}/${n}`}>
                           {getCampaign(n).name}
                           {((getCampaign(n).style !== '')&&(getCampaign(n).style !== undefined))? ` ${getCampaign(n).style}` : ``}
                         </Link>
                       </li>
                   ))}
                   
                   </ul>
                   <Switch>
                   
                   <Route path={`${match.url}/:segment`} render={props => (<CallSite edition={props.edition} {...props}/>)}/>
                   </Switch>
                   </div>
                  )
        }
        
        if (sites.length >1) {
            var urlArr = ""
            var urlAcc = "/"
            var pathReg = ""
            var paths = []
            var styleReg = ""
            function getRoutes(seg){
                urlAcc = urlAcc + (urlAcc=='/'?'':'/') + seg
                urlArr = getCampaign(seg).campaigns

                
                if ((getCampaign(seg).style == 'horizontal') || (getCampaign(seg).style == 'vertical')){
                    pathReg = urlAcc;
                    urlAcc = '';
                    paths.push({path:pathReg, segment:seg, style:getCampaign(seg).style}) 
                }
                
                if(urlArr.length == 0){urlAcc=""}
                urlArr.map((o)=>getRoutes(o))

            }
            function buildRoutes(){
                getRoutes('')
                return paths.map((o, i) => {
                
                    if (o.style == 'horizontal'){
                        return(<Route key={i} path={`${o.path}`} render={props => (<div id = "outer-container"><AppHorizontal segment={`${o.segment}`} {...props}/></div>)}/>)
                    }
                    else if (o.style == 'vertical'){
                        return(<Route key={i} path={`${o.path}`} render={props => (<div id = "outer-container"><AppVertical segment={`${o.segment}`} {...props}/></div>)}/>)
                    }
                })
                         
            }
            function testReturn(){
                return(<div>DOG</div>)
            }
            return(
                <Router>
                  <Switch>
                    {buildRoutes()}
                    <Route key="wacth" path = '/watch' render={props => (<AppWatch/>)}/>
                    <Route render={props => (<CallSite edition={this.props.edition} match={{params:{segment:''},url:''}}/>)}/>
                  </Switch>
                </Router>
            )
            
        }
        else return (<div>Waiting...</div>)
    }
}
const getCampaign = (str) => sites.find(o => o.url === str)

const TestComponent = (props) => {
    return(<div>RENDER THIS</div>)
}
const mapStateToProps = (state) => ({
    edition: state.allPosts,
})

export default connect(mapStateToProps, {fetchPosts, getSites, setPaths}, null, {pure:false})(SiteSelector) //!!!


