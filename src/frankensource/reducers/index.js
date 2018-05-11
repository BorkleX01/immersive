import { combineReducers } from 'redux'
import { UPDATE_BREAKPOINTS, breakpointDefinition } from '../actions/breakpoints.js'
import { RETRIEVE_POST, REQUEST_POST, RECEIVE_POST, ERROR_POST, NO_POST } from '../actions/post.js'
import { RETRIEVE_POSTS, REQUEST_POSTS, RECEIVE_POSTS, ERROR_POSTS, NO_POSTS } from '../actions/related-posts.js'

const initialWindowWidth = window.innerWidth
const initialBreakpointState = {
	isMobile: initialWindowWidth <= breakpointDefinition.xs,
	isTablet: initialWindowWidth > breakpointDefinition.sm && initialWindowWidth <= breakpointDefinition.md,
	isDesktop: initialWindowWidth > breakpointDefinition.md && initialWindowWidth <= breakpointDefinition.lg,
	isLarge: initialWindowWidth > breakpointDefinition.lg
}

function breakpoints(state = initialBreakpointState, action) {
	switch (action.type) {
		case UPDATE_BREAKPOINTS:
			let windowWidth = window.innerWidth
			return Object.assign({}, state, {
				isMobile: windowWidth <= breakpointDefinition.xs,
				isTablet: windowWidth > breakpointDefinition.sm && windowWidth <= breakpointDefinition.md,
				isDesktop: windowWidth > breakpointDefinition.md && windowWidth <= breakpointDefinition.lg,
				isLarge: windowWidth > breakpointDefinition.lg
			})
		default:
			return state
	}
}

function currentPost(state = {slug: '', isFetching: true, isError: true, isEmpty: false, data: {}}, action) {
	switch (action.type) {
		case REQUEST_POST:
			return Object.assign({}, state, {
				slug: action.slug,
				isFetching: true,
				isError: false,
				isEmpty: false
			})
		case RECEIVE_POST:
		case RETRIEVE_POST:
			return Object.assign({}, state, {
				slug: action.slug,
				id: action.data.id,
				isFetching: false,
				isError: false,
				isEmpty: false,
				data: action.data,
				lastUpdated: action.receivedAt
			})
		case ERROR_POST:
			return Object.assign({}, state, {
				slug: action.slug,
				isFetching: false,
				isError: true,
				isEmpty: false
			})
		case NO_POST:
			return Object.assign({}, state, {
				slug: action.slug,
				isFetching: false,
				isError: false,
				isEmpty: true
			})
		default:
			return state
	}
}

function relatedPosts(state = {}, action) {
	switch (action.type) {
		case REQUEST_POSTS:
		case RECEIVE_POSTS:
		case RETRIEVE_POSTS:
		case ERROR_POSTS:
		case NO_POSTS:
			return Object.assign({}, state, {
				[action.category]: relatedPostsData(state[action.category], action)
			})
		default:
			return state
	}
}

function relatedPostsData(state = {isFetching: false, isError: true, isEmpty: false, data: []}, action) {
	switch (action.type) {
		case REQUEST_POSTS:
			return Object.assign({}, state, {
				isFetching: true,
				isError: false,
				isEmpty: false
			})
		case RECEIVE_POSTS:
		case RETRIEVE_POSTS:
			return Object.assign({}, state, {
				isFetching: false,
				isError: false,
				isEmpty: false,
				data: action.data,
				lastUpdated: action.receivedAt
			})
		case ERROR_POSTS:
			return Object.assign({}, state, {
				isFetching: false,
				isError: true,
				isEmpty: false
			})
		case NO_POST:
			return Object.assign({}, state, {
				isFetching: false,
				isError: false,
				isEmpty: true
			})
		default:
			return state
	}
}

function allPosts(state = {}, action) {
	switch (action.type) {
		case REQUEST_POST:
		case RECEIVE_POST:
		case RETRIEVE_POST:
		case ERROR_POST:
		case NO_POST:
			return Object.assign({}, state, {
				[action.slug]: action.data
			})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	currentPost,
	relatedPosts,
	allPosts,
	breakpoints
})

export default rootReducer
