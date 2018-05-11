import React from 'react'

//lets inject some header tags into the site
import {Helmet} from "react-helmet"

import PostHeader from '../../components/post/header.js'
import PostShare from '../../components/post/share.js'
import PostBody from '../../components/post/body.js'

export default class Post extends React.Component {
	render() {
		const { postData } = this.props

		const headerTags = postData.acf.og_tags
		var theHeaderTags = headerTags.map((theData, i) =>
			<meta property={theData.property} content={theData.content} key={i} />
		)

		return (
			<main id="main" role="main">
				<Helmet>

	                <link rel="canonical" href={postData.acf.canonical_url} />
					{theHeaderTags}
	            </Helmet>
				<article className="post">

					<PostHeader postData={postData} />

					<div id="content" className="container-fluid">

						<div className="content">

								<div className="box-tools row">

									<PostShare postData={postData} />

									{postData.acf.series_author ?
									<div className="author col-xs-12 col-sm-6">
										<span>Story by&nbsp;</span>&nbsp;{postData.acf.series_author.display_name}
									</div>
									: null}

								</div>
						</div>

						<PostBody postData={postData} />

					</div>
				</article>
			</main>
		)
	}
}
