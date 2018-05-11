'use-strict';

/**
 * make our imports
 * axios is used similar to $ajax get
 */
import axios from 'axios';

import { EDITION_ACTION } from './types';
import { ACF_ACTION }     from './types';
import { PAGE_ACTION }    from './types';


// CORS issues we need to set our datasource relative to the current URL/data source
/*var endpointURL = window.location.hostname;
if (endpointURL == "localhost"){
  endpointURL = "localhost";
}*/
var endpointURL = "immersive/index.php"


/**
 * define our root api route
 */

/**
 * our edition action
 */
export function editionAction() {
  return function(dispatch) {
    axios.get("http://" + endpointURL + "/wp-json/wp-api-menus/v2/menus/3")
    .then(response => {
      dispatch({
        type: EDITION_ACTION,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

/**
 * our ACF options action
 */
export function acfAction() {
  return function(dispatch) {
    axios.get("http://" + endpointURL + "/wp-json/acf/v2/options")
    .then(response => {
      dispatch({
        type: ACF_ACTION,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

/**
 * an action to get mulitple endpoints and merge them using spread and concat
 */
export function pageAction() {
  return function(dispatch) {
    axios.all([
      axios.get("http://" + endpointURL + "/wp-json/wp/v2/posts?per_page=20"),
      axios.get("http://" + endpointURL + "/wp-json/wp/v2/pages")
    ])
    .then(axios.spread(function (pages, ads) {
      let theData = pages.data.concat(ads.data);
      dispatch({
        type: PAGE_ACTION,
        payload: theData
      });
    }))
  }
}
