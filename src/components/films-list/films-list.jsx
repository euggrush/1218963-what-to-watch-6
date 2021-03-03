import React from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import filmsShape from '../../types';

const FilmsList = ({films}) => {

  return (

    films.map((movie) => {
      return (
        <FilmCard key={movie.id} movie={movie} />
      );
    })
  );
};

export default FilmsList;

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmsShape)
};
