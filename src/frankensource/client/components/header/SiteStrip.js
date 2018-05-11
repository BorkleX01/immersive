import React         		    from 'react'

class SiteStrip extends React.Component {   
  constructor (props, contex) {
    super(props, contex)
    this.state = {
    	thePercent: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

	componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll)
	}


	handleScroll(event) {
		const inner = document.getElementById('inner')
		// cross browsers!
		const docHeight = inner.clientHeight || inner.offsetHeight || inner.documentElement.clientHeight || 0
	    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 
	    var scrollP = ((scrollTop/(docHeight - window.outerHeight)).toFixed(2) * 100)
	    this.setState({
	      thePercent: scrollP
	    });
	}

    render() {
      return (
        <span className="site-strip" style={{"width": this.state.thePercent + "%" }}></span>
      );
    }
}

export default SiteStrip