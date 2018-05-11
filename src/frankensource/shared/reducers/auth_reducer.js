/**
 * import our action type
 */
import { EDITION_ACTION } 		from '../actions/types';
import { ACF_ACTION }       from '../actions/types';
import { PAGE_ACTION }       from '../actions/types';

/**
 * define the initial state of our auth reducer
 */
const INTIAL_STATE = { editionArray: [], acfArray: [], pageArray: []};

/**
 * switch statement checks to see if the dispatched action requires any work from
 * this reducer
 */
export default function (state = INTIAL_STATE, action) {
  switch(action.type) {
    case EDITION_ACTION:
      return { ...state, editionArray: action.payload.items };
    case ACF_ACTION:
      return { ...state, acfArray: action.payload.acf };
    case PAGE_ACTION:
      return { ...state, pageArray: action.payload };
    default:
      break;
  }

  /**
   * return the state to the reducer index.js
   */
  return state;
}