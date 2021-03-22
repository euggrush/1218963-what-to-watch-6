import React from 'react';
import PropTypes from 'prop-types';
import filmsShape from '../../types';
import {connect} from "react-redux";
import setVisibilityFilter from "../../actions/filter";

const getFilterByGenres = (data) => {
  let arrGenres = [`All genres`];
  data.forEach((item) => {
    if (arrGenres.indexOf(item.genre) === -1) {
      arrGenres.push(item.genre);
    }
  });
  return arrGenres;
};

const mapStateToProps = (state) => ({
  movies: getFilterByGenres(state.data),
  active: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  onClickHandler: (movieItem) => dispatch(setVisibilityFilter(movieItem))
});

const GenresList = ({movies, active, onClickHandler}) => {

  console.log(movies);

  const renderGenres = movies.map((movieItem) => {

    return (

      <li
        className={`catalog__genres-item catalog__genres-item--active`}
        key={movieItem}>
        <a href="#"
          className={`catalog__genres-link ${active === movieItem ? `catalog__genres-item--active` : ``}`}
          onClick={() => {
            event.preventDefault();
            onClickHandler(movieItem);
          }}
        >{movieItem}</a>
      </li>
    );
  });
  return <ul className="catalog__genres-list">{renderGenres}</ul>;
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

GenresList.propTypes = {
  movies: PropTypes.arrayOf(filmsShape),
  active: PropTypes.arrayOf(filmsShape),
  onClickHandler: PropTypes.arrayOf(filmsShape),
};

