import React from 'react'

export default class BlockQuiz extends React.Component {
	constructor(props) {
		super(props)

		this.insertScript = this.insertScript.bind(this)
	}

	insertScript() {
		const { quiz_url, block_key } = this.props

		var script = document.getElementById('block-quiz-' + block_key + '-script');

		if ( script ){
			script.outerHTML = '';
		}

		script = document.createElement('script')
		script.type = 'text/javascript'
		script.async = true
		script.src = quiz_url
		script.id = 'block-quiz-' + block_key + '-script'
		document.getElementById('block-quiz-' + block_key).appendChild(script)
	}

	componentDidMount() {
		this.insertScript()
	}

	componentDidUpdate(prevProps, prevState) {
		if ( this.props.quiz_tag !== prevProps.quiz_tag ){
			console.log('quiz changed')
			this.insertScript()
		}
	}

	render() {
		const { quiz_tag, quiz_url, block_key } = this.props

		if ( !quiz_tag && !quiz_url ) {
			return (null)
		} else {
			return (
				<div className="block-quiz row" id={'block-quiz-' + block_key}>
					<div className="quiz">
						<div className="inner">					
						    <div className="inner" dangerouslySetInnerHTML={{ __html: quiz_tag }}></div>
						</div>
					</div>
				</div>
			)
		}
	}
}