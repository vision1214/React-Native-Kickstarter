import {combineReducers} from 'redux';

import restaurantListReducer from './restaurantList/restaurantListReducer';

const rootReducer = combineReducers({
  restaurantList: restaurantListReducer,
});

export default rootReducer;
