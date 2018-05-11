import { combineReducers } from 'redux';

/**
 * import our reducers here
 */
import AuthReducer from './auth_reducer';

/**
 * combine the reducers
 */
 const rootReducer = combineReducers({
   edition: AuthReducer,
   acf: AuthReducer,
   pages: AuthReducer
 });

 export default rootReducer;