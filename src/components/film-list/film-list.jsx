import React from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';

const FilmList = (props) => {

  const {filmsArray} = props;

  return (

    filmsArray.map((item) => {
      return (
        <FilmCard
          key={item.id}
          title={item.title}
          genre={item.genre}
          date={item.date}
          filmPictureSrc={item.filmPictureSrc}
        />
      );
    })
  );
};

export default FilmList;

FilmList.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  filmsArray: PropTypes.array.isRequired,
  filmPictureSrc: PropTypes.string.isRequired
};
