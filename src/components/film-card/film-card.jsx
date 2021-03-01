import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const FilmCard = (movie) => {
  const {title, filmPictureSrc, filmId} = movie;
  return (

    <>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={filmPictureSrc} alt="" width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">

          <a className="small-movie-card__link" href="movie-page.html"><Link to={`film/${filmId}`}>{title}</Link></a>
        </h3>
      </article>
    </>
  );
};

export default FilmCard;

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  filmPictureSrc: PropTypes.string.isRequired,
  filmId: PropTypes.number.isRequired
};

