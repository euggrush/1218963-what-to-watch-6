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
          filmId={item.id}
        />
      );
    })
  );
};

export default FilmList;

FilmList.propTypes = {
  filmsArray: PropTypes.array.isRequired
};
