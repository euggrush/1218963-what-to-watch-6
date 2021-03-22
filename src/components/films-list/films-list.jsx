import React from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import filmsShape from '../../types';
import {connect} from "react-redux";

const getFilterMovies = (data, filter) => {
  let films = [];
  if (filter === `All genres`) {
    films = data.map((obj) => obj.movie);
  } else {
    films = data.filter((obj) => filter === obj.genre).map((obj) => obj.movie);
  }
  return films;
};

const mapStateToProps = (state) => ({
  films: getFilterMovies(state.data, state.visibilityFilter)
});

const FilmsList = ({films}) => {

  return (
    films.map((movie) => {
      return (
        <FilmCard key={movie.id} movie={movie} />
      );
    })
  );
};

export default connect(mapStateToProps)(FilmsList);

FilmsList.propTypes = {
  films: PropTypes.arrayOf(filmsShape)
};
