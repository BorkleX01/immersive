import React from 'react'
import { Link } from 'react-router-dom'

export default class RelatedPostsPost extends React.Component {
    
    render() {console.log(this.props.basePath)
	      const { content } = this.props

	      var style = {}

	      if ( content.acf.carousel_image ){
		  style = {
		      backgroundImage: `url(${content.acf.carousel_image})`
		  }
	      }
	      return (
		  <div className="related-posts-post">
		    <div className="overlay-bg" style={style}></div>
		    <div className="overlay">
		      <h3 className="h2">{content.title.rendered}</h3>
		      <Link to={'/' + content.slug} className="btn btn-primary">Read more</Link>
		    </div>
		  </div>
	      )
	     }
}
