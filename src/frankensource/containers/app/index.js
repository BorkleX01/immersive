import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions/post.js'
import { fetchPosts, getOnePost } from '../../../actions/fetch-posts.js'

import { updateBreakpoints } from '../../actions/breakpoints.js'
import debounce from 'lodash.debounce'
import NotFound from '../not-found'
import Error from '../error'
import ScrollToTop from '../../components/helpers/scroll-to-top.js'

import Loading from '../../components/loading'
import HeadObject  from '../../client/components/header/Helmet.js'
import Header from '../../components/header'
import SidePanel from '../../components/side-panel'
import Post from '../../components/post'
import RelatedPosts from '../../containers/related-posts'
import Footer from '../../components/footer'
//import '../../App.css';

class AppVertical extends React.Component {
	constructor(props) {
		super(props)
		this.updateBreakpointState = debounce(this.updateBreakpointState.bind(this), 500)
	}

	componentWillMount() {
            const { dispatch } = this.props

            if(window.location.pathname.endsWith(this.props.segment)||window.location.pathname.endsWith(this.props.segment+"/")){
                dispatch(fetchPosts(this.props.segment))
            }else
            {
                var slug = window.location.pathname.split('/').pop()
                dispatch(fetchPosts(this.props.segment , slug))
            }
	    
	}

	componentDidMount() {
		window.addEventListener('resize', this.updateBreakpointState );
	}

	updateBreakpointState() {
		const { dispatch } = this.props
		dispatch(updateBreakpoints())
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.slug !== this.props.match.params.slug) {
			const { dispatch } = nextProps
			dispatch(fetchPost(nextProps.match.params.slug))
		}
	}

	componentDidUpdate (){
	}
    render() {
        if (this.props.currentPost.isFetching == false){
        }
        if (this.props.currentPost.isFetching == false){
		const { data, isFetching, isError, isEmpty } = this.props.currentPost
		const isLoading = isFetching && !isEmpty && !isError
		const slug = this.props.match.params.slug
		return (
			<div id="wrapper">
				<ScrollToTop />
				<Loading isLoading={isLoading} />
				{ !isFetching && !isEmpty && !isError
					? <div>
				      <div className="side-panel-content">
                                            <HeadObject theTitle="Title Vertical" style="vertical"/>
							<Header postData={data} />
							<Post postData={data} />
							<RelatedPosts currentPost={slug} postCategory={data.acf.related_posts_category.term_id} />
							<Footer postData={data} />
						</div>
						
					</div>
					: null }
				{ !isFetching && isEmpty && !isError
					? <NotFound />
					: null }
				{ isError
					? <Error />
					: null }
			</div>
		)
        }else{
            return(<div>SPINNER</div>)
        }
    }
}

AppVertical.propTypes = {
	currentPost: PropTypes.PropTypes.shape({
		slug: PropTypes.string.isRequired,
		data: PropTypes.object.isRequired,
		isFetching: PropTypes.bool.isRequired,
		isError: PropTypes.bool.isRequired,
		isEmpty: PropTypes.bool.isRequired
	}).isRequired
}

function mapStateToProps(state) {
    return {currentPost: state.currentPost.current}
}

export default connect(mapStateToProps)(AppVertical)
