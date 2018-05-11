import React from 'react'
import Facebook from '../../images/Facebook.svg'
import Twitter from '../../images/Twitter.svg'
import Email from '../../images/Email.svg'

export default class PostShare extends React.Component {
	render() {
		const { title } = this.props.postData
		const url = window.location.href
		const encodeURL = encodeURI(url)
		const encodeTitle = encodeURI(title.rendered)
		return (
			<div className="social-networks col-xs-12 col-sm-6">
				<h4 className="text-uppercase"><span>Share:</span></h4>
				<ul>
					<li><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURL}&title=${encodeTitle}`} target="_blank">
						<img src={Facebook} alt="" className="svg-icon big" />
						<span className="sr-only">Facebook</span>
					</a></li>
					<li><a href={`https://twitter.com/share?url=${encodeURL}&text=${encodeTitle}&via=smh`} target="_blank">
						<img src={Twitter} alt="" className="svg-icon big" />
						<span className="sr-only">Twitter</span>
					</a></li>
					<li><a href={`mailto:?subject=${encodeTitle}&body=I%20would%20like%20to%20share%20something%20with%20you%0A%0D${encodeURL}`}>
						<img src={Email} alt="" className="svg-icon big mail" />
						<span className="sr-only">Email</span>
					</a></li>
				</ul>
			</div>
		)
	}
}