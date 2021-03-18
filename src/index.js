import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from '../src/components/app/app';
import films from '../src/mocks/films';
import filmsShape from '../src/types';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App
        title={`The Grand Budapest Hotel`}
        genre={`Drama`}
        date={`2014`}
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmsShape)
};
