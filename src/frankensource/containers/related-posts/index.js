import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRelatedPosts } from '../../actions/related-posts.js'
import { setPaths } from '../../../actions/fetch-posts.js'
import Carousel from '../../components/carousel'
import RelatedPostsCarouselItem from '../../components/related-posts/item.js'

class RelatedPosts extends React.Component {
	componentWillMount() {
		const { dispatch, postCategory } = this.props
		dispatch(fetchRelatedPosts(postCategory))
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.postCategory !== this.props.postCategory) {
			const { dispatch } = nextProps
			dispatch(fetchRelatedPosts(nextProps.postCategory))
		}
	}

    render() {
	const { data, currentPost } = this.props

	if ( data.length ) {
	    const slidesToShow = {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4
	    }

	    var posts = data.filter((post, i) => {
		return post.slug !== currentPost
	    })
            posts.map((item) => {
                console.log(this.props.segments + " ; " + this.props.current)
            })

            var carouselItems = posts.map((item, i) =>
		                          <RelatedPostsCarouselItem content={item} key={i} basePath={"/dog/cat"}/>
            )

            console.log(carouselItems)
            
	    return (
		<div>
		  { posts.length ?
		      <section id="related-posts" className="related-posts container-fluid">
			    <div className="row text-center related-posts-title">
				  <h2 className="h1">More in the series</h2>
				</div>
				<div className="related-posts-inner">
				      <Carousel items={carouselItems} id="related-posts-carousel" slidesToShow={slidesToShow} arrows="white" hasPager={false} />
				    </div>
			  </section>
		      : null }
		</div>
	    )
	} else {
	    return (null)
	}
    }
}

RelatedPosts.propTypes = {
	relatedPosts: PropTypes.object.isRequired,
	data: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	isError: PropTypes.bool.isRequired,
	isEmpty: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps) {
    const { relatedPosts } = state
    const {
	isError,
	isFetching,
	isEmpty,
	data
    } = relatedPosts[ownProps.postCategory] || {
	data: [],
	isFetching: true,
	isError: false,
	isEmpty: false
    }
    const {segments, current} = state.allPosts

    return {
	relatedPosts,
	data,
	isFetching,
	isError,
	isEmpty,
        segments,
        current
    }
}

export default connect(mapStateToProps)(RelatedPosts)
