import React from 'react'

export default class BlockText extends React.Component {
	
	render() {
		const { content, background_color, font_color } = this.props

		if ( !content ) {
			return (null)
		} else {
			return (
				<div className="row" style={{backgroundColor: background_color}}>
					<div className="content">
						<div className="content-holder" style={{color: font_color}} dangerouslySetInnerHTML={{ __html: content }}></div>
					</div>
				</div>
			)
		}
	}
}
