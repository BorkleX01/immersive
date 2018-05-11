import React from 'react'
import { withRouter } from 'react-router'
import { goToTop } from 'react-scrollable-anchor'

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
	if (this.props.location.pathname !== prevProps.location.pathname) {
            // scroll to top of the page
            //goToTop()
	    window.scrollTo(0, 0)
	}
    }

    render() {
	return (
	    <span></span>
	)
    }
}

export default withRouter(ScrollToTop)
