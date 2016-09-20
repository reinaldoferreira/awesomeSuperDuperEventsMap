import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducerName = (state, action) => {
  switch (action.type) {
    case 'ACTION_NAME':
      return action.data;
    default:
      return state || '';
  }
};

const rootReducer = combineReducers({
  state: (state = {}) => state,
  routing: routerReducer,
  name: reducerName
});

export default rootReducer;
