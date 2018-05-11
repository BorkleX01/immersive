import { combineReducers } from 'redux'
import { UPDATE_BREAKPOINTS, breakpointDefinition } from '../frankensource/actions/breakpoints.js'

import { RETRIEVE_POST, REQUEST_POST, RECEIVE_POST, ERROR_POST, NO_POST } from '../frankensource/actions/post.js'
import { RETRIEVE_POSTS, REQUEST_POSTS, RECEIVE_POSTS, ERROR_POSTS, NO_POSTS } from '../frankensource/actions/related-posts.js'

export const ALL_POSTS = 'ALL_POSTS'
//export const REQUEST_POST = 'REQUEST_POST'
//export const ERROR_POST = 'ERROR_POST'
//export const NO_POST = 'NO_POST'
//export const RECEIVE_POST = 'RECEIVE_POST'
//export const RETRIEVE_POST = 'RETRIEVE_POST'
export const GLOBAL_OPTIONS = 'GLOBAL_OPTIONS'
export const MENU_OBJECT = 'MENU_OBJECT'
export const SITE_INFO = 'SITE_INFO'
export const PATH_SEGMENTS = 'PATH_SEGMENTS'
export const CURRENT_POST = 'CURRENT_POST'




const initialWindowWidth = window.innerWidth
const initialBreakpointState = {
    isMobile: initialWindowWidth <= breakpointDefinition.xs,
    isTablet: initialWindowWidth > breakpointDefinition.sm && initialWindowWidth <= breakpointDefinition.md,
    isDesktop: initialWindowWidth > breakpointDefinition.md && initialWindowWidth <= breakpointDefinition.lg,
    isLarge: initialWindowWidth > breakpointDefinition.lg
}

const INITIAL_STATE = { editionArray: [],
                        acfArray: 0,
                        pageArray: [],
                        campaign: [],
                        segments: [],
                        current: ""};
//const INITIAL_PATHS = { baseSegments: "", endSegment: ""}
const PRESENT_STATE = {}
function allPosts(state = INITIAL_STATE, action) {
    switch (action.type) {
    case MENU_OBJECT:
        console.log("MENU_OBJECT event detected")
        //console.log(action.menu)
        state.editionArray = action.payload
        return Object.assign({} , state, {editionArray:action.payload})
    case ALL_POSTS:
       
        //console.log(action.payload);
        state.pageArray = action.payload
	return Object.assign({}, state, { pageArray:action.payload })
        //return { ...state, editionArray: action.payload };
    case GLOBAL_OPTIONS:
        
        //console.log(action.payload)
        state.acfArray = action.payload
        return Object.assign({}, state, {acfArray:action.payload})
    case SITE_INFO:
        
        //console.log(action.payload)
        state.campaign = action.payload
        return Object.assign({}, state, {campaign:action.payload})
    case PATH_SEGMENTS:
        
        return Object.assign({}, state, {segments: action.payload.segments, current: action.payload.current})
        
    default:
        return state
    }
}

function currentPost(state = INITIAL_STATE, action){
    switch (action.type) {
    case CURRENT_POST:
        
        //console.log(action.payload)
        return Object.assign({}, state , {current: action.payload})
    default:
        return state
    }
    
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

const rootReducer = combineReducers({allPosts, currentPost, breakpoints, relatedPosts, relatedPostsData});
//const rootReducer = allPosts;

export default rootReducer
