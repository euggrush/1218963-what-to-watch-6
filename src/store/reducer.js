import {films} from '../mocks/films';
import {ActionType} from './action';

const initialState = {
  genre: `All genres`,
  filmsList: films
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        change: state.change + action.payload
      };

    case ActionType.FILTER_FILMS_LIST:
      return {
        ...state,
        filter: state.filter + action.payload
      };
  }

  return state;
};


export {reducer};
