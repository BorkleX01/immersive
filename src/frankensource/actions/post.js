import 'whatwg-fetch'

export const REQUEST_POST = 'REQUEST_POST'
export const ERROR_POST = 'ERROR_POST'
export const NO_POST = 'NO_POST'
export const RECEIVE_POST = 'RECEIVE_POST'
export const RETRIEVE_POST = 'RETRIEVE_POST'

export function fetchPost(slug) {
    return (dispatch, getState) => {
	if ( slug && slug.length ){
	    const state = getState()
	    const data = state.allPosts[slug];
	    if ( data ) {
		return dispatch(retrieveData(slug, data))
	    } else {
		return dispatch(fetchPostData(slug))
	    }
	} else {
	    dispatch(noData(''))
	}
    }
}

function requestData(slug) {
    return {
	type: REQUEST_POST,
	slug
    }
}

function receiveData(slug, json) {
    return {
	type: RECEIVE_POST,
	slug,
	data: json[0],
	receivedAt: Date.now()
    }
}

function retrieveData(slug, data) {
    return {
	type: RETRIEVE_POST,
	slug,
	data: data,
	receivedAt: data.lastUpdated
    }
}

function errorData(slug) {
    return {
	type: ERROR_POST,
	slug
    }
}

function noData(slug) {
    return {
	type: NO_POST,
	slug
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

function fetchPostData(slug) {
    return dispatch => {
	var secure = "http://";
        var apacheIssue = "/index.php";
        var localVHost = "immersive";
	if (process.env.NODE_ENV === "development" || window.location.hostname === "localhost"){
	    secure = "http://" ;
            apacheIssue = "/index.php";
            localVHost = "immersive"; //whatever your vhost is
	}
  	dispatch(requestData(slug));//doesn't do anything
        return fetch(secure + localVHost + apacheIssue + '/wp-json/wp/v2/posts?slug=' + slug)
	    .then(checkStatus)
	    .then(response => response.json())
	    .then(
		json => {
		    if (json.length){
			dispatch(receiveData(slug, json))
		    } else {
			dispatch(noData(slug))
		    }
		},
		error => {
		    dispatch(errorData(slug))
		})
    }
}
