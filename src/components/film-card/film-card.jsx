import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import filmsShape from '../../types';

const FilmCard = ({movie}) => {
  const {title, filmPictureSrc, filmId} = movie;
  return (

    <>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={filmPictureSrc} alt="" width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`film/${filmId}`}>{title}</Link>
        </h3>
      </article>
    </>
  );
};

export default FilmCard;

FilmCard.propTypes = {
  movie: PropTypes.arrayOf(filmsShape)
};

