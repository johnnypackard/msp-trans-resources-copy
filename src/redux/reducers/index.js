import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
// import resources from './resourcesReducer';

const store = combineReducers({
  user,
  login,
  // resources,
});

export default store;
