import React from 'react'

export default class BlockFootnote extends React.Component {
	
	render() {
		const { content } = this.props

		if ( !content ) {
			return (null)
		} else {
			return (
				<div className="row">
					<div className="content">								
						<div className="box-info" dangerouslySetInnerHTML={{ __html: content }}></div>
					</div>
				</div>
			)
		}
	}
}