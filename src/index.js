import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from '../src/components/app/app';
import films from '../src/mocks/films';
import filmsShape from '../src/types';

ReactDOM.render(
    <App
      title={`The Grand Budapest Hotel`}
      genre= {`Drama`}
      date= {`2014`}
      films= {films}
    />,
    document.querySelector(`#root`)
);

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmsShape)
};
