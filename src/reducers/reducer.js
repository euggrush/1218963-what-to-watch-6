import data from './data';
// import visibilityFilter from './visibilityFilter';
import {combineReducers} from "redux";

const visibilityFilter = (state = `All genres`, action) => {
  switch (action.type) {
    case `SET_VISIBILITY_FILTER`:
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  data,
  visibilityFilter
});
