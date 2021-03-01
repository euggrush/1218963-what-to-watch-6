import React from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import filmsShape from '../../types';

const FilmsList = ({films}) => {

  return (

    films.map((movie) => {
      return (
        <FilmCard
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          date={movie.date}
          filmPictureSrc={movie.filmPictureSrc}
          filmId={movie.id}
        />
      );
    })
  );
};

export default FilmsList;

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmsShape)
};
