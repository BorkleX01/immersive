import 'whatwg-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const ERROR_POSTS = 'ERROR_POSTS'
export const NO_POSTS = 'NO_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RETRIEVE_POSTS = 'RETRIEVE_POSTS'

export function fetchRelatedPosts(category) {
	return (dispatch, getState) => {
		if ( category ){
			const state = getState()
			const data = state.relatedPosts[category]

			if ( data ) {
				return dispatch(retrieveData(category, data))
			} else {
				return dispatch(fetchPostsData(category))
			}
		}
	}
}

function requestData(category) {
	return {
		type: REQUEST_POSTS,
		category
	}
}

function receiveData(category, json) {
	return {
		type: RECEIVE_POSTS,
		category,
		data: json,
		receivedAt: Date.now()
	}
}

function retrieveData(category, data) {
	return {
		type: RETRIEVE_POSTS,
		category,
		data: data.data,
		receivedAt: data.lastUpdated
	}
}

function errorData(category) {
	return {
		type: ERROR_POSTS,
		category
	}
}

function noData(category) {
	return {
		type: NO_POSTS,
		category
	}
}

function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	} else {
		var error = new Error(response.statusText)
		error.response = response
		throw error
	}
}

function fetchPostsData(category) {
	return dispatch => {
		var secure = "https://"
		if (process.env.NODE_ENV === "development"){
			secure = "http://"
		}
	    dispatch(requestData(category))
            var fetchHost = ""
            if (process.env.NODE_ENV === "development") {
               fetchHost = process.env.REACT_APP_LOCAL_SERVER 
            }else{fetchHost = secure + window.location.hostname}
	    return fetch(fetchHost + '/wp-json/wp/v2/posts?categories[]=' + category)
			.then(checkStatus)
			.then(response => response.json())
			.then(
			    json => {
					if (json.length){
						dispatch(receiveData(category, json))
					} else {
						dispatch(noData(category))
					}
				},
				error => {
					dispatch(errorData(category))
				})
	}
}
