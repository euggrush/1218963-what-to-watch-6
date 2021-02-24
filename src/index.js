import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from '../src/components/app/app';
import filmsArray from '../src/mocks/films';

ReactDOM.render(
    <App
      title={`The Grand Budapest Hotel`}
      genre= {`Drama`}
      date= {`2014`}
      filmsArray= {filmsArray}
    />,
    document.querySelector(`#root`)
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  filmsArray: PropTypes.array.isRequired
};
