import React from 'react'

export default class Loading extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			showLoading: true
		}
	}

	componentWillReceiveProps(nextProps) {
		if ( !nextProps.isLoading ){
			setTimeout(function(){
				this.setState({
					showLoading: false
				})
			}.bind(this), 3000)
		} else if ( !this.state.showLoading ) {
			this.setState({
				showLoading: true
			})
		}
	}

	render() {
		var classes = this.props.isLoading ? 'loading is-loading' : 'loading'

		if ( this.state.showLoading ){
			classes += ' show-loading'
		}

		return (
			<div className={classes}>
				<div className="loading-bar"><div></div></div>
				<div className="loading-overlay"></div>
			</div>
		)
	}
}