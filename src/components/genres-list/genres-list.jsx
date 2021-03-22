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
  genresList: getFilterByGenres(state.data),
  active: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  onClickHandler: (genre) => dispatch(setVisibilityFilter(genre))
});

const GenresList = ({genresList, active, onClickHandler}) => {

  console.log(active);

  const renderGenres = genresList.map((genre) => {

    return (

      <li
        className={`catalog__genres-item ${active === genre ? `catalog__genres-item--active` : ``}`}
        key={genre}>
        <a href="#"
          className={`catalog__genres-link`}
          onClick={(event) => {
            event.preventDefault();
            onClickHandler(genre);
          }}
        >{genre}</a>
      </li>
    );
  });
  return <ul className="catalog__genres-list">{renderGenres}</ul>;
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

GenresList.propTypes = {
  genresList: PropTypes.arrayOf(filmsShape),
  active: PropTypes.arrayOf(filmsShape),
  onClickHandler: PropTypes.arrayOf(filmsShape),
};

