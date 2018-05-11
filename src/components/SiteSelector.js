import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import AppHorizontal from '../frankensource/shared/App.js'
const sites = [
    {url: '', name: 'Immersive Landing', campaigns: ['boss', 'vodafone', 'disney']},
    {url: 'boss', name: 'Boss', campaigns: ['ibm']},
    {url: 'disney', name: 'Disney', campaigns: ['star-wars']},
    {url: 'star-wars', name: 'Star Wars', campaigns: []},
    {url: 'ibm', name: 'IBM Landing', campaigns: ['accelerating-intelligence']},
    {url: 'accelerating-intelligence', name: 'Accelerating Intelligence', campaigns: []},
    {url: 'vodafone', name: 'Vodafone Landing', campaigns: ['readyapps']},
    {url: 'readyapps', name: 'Vodafone ReadyApps', campaigns: []},
]
const getCampaign = (str) => sites.find(o => o.url === str)

const SiteSelector = () => (
    <Router>
      <CallSite match={{ params: { url:''}, url:''}}/>
    </Router>
)

const CallSite = ({match}) => {
    const obj = getCampaign(match.params.url)

    return(<div>
           <p>{obj.name}</p>
           <ul>
           {obj.campaigns.map((n, index)=>(
               <li key={index}>
                 <Link to={`${match.url}/${n}`}>
                   {getCampaign(n).name}
                 </Link>
               </li>
           ))}
           </ul>

           <Route exact path="/boss/ibm/accelerating-intelligence" render={props=>(<div id = "outer-container"><AppHorizontal edition={this.props.edition} {...props}/></div>)}/>
           <Route path={`${match.url}/:url`} component={CallSite}/>
           </div>
          )
}

export default SiteSelector
