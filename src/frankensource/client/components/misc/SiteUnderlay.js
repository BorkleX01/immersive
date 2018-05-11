import React													from "react"
import { findObjects }                     		 				from './functions/findObjects.js'

class SiteUnderlay extends React.Component {
    constructor (props, context) {
            super(props)
            this.state = {
            		show: 0
	            }
	        }

	componentDidMount(){
		this.delayState()
	}

	delayState() {
        setTimeout(() => {
            this.setState({
            	show: 1
          })
        }, 2000)
    }

	render() {
		const theEdition = this.props.theEdition
		const location = window.location.pathname
		var currentUrl
		if (theEdition.length > 1){
		    if (window.location.pathname.split('/').pop() !== "ibm-accelerating-intelligence"){
				currentUrl = findObjects(theEdition, "object_slug", location.split('/').pop())
			} else {
				currentUrl = findObjects(theEdition, "object_slug", 'index')
			}
		}
		return currentUrl ? (
			<div id="underlay" style={{opacity: this.state.show}}> 
				<div className="left" style={ {background: `linear-gradient(90deg, rgba(220,245,248,1) 0%, rgba(183, 213, 216,1) 100%)`}}>
			    	<span className="the-number">{currentUrl.order - 1}</span>
			    </div>
			    <div className="right" style={ {background: `linear-gradient(90deg, rgba(183, 213, 216,1) 0%, rgba(220,245,248,1) 100%)`}}>
			    	<span className="the-number">{currentUrl.order + 1}</span>
			    </div>
			</div>
		    ) : null
		}
}

 export default SiteUnderlay
