import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import filmsShape from '../../types';
import VideoPlayer from '../video-player/video-player';

const FilmCard = ({movie}) => {
  const {title, filmPictureSrc, id, filmVideoSrc} = movie;
  return (

    <React.Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <VideoPlayer
            filmVideoSrc={filmVideoSrc}
            filmPictureSrc={filmPictureSrc}
          />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`film/${id}`}>{title}</Link>
        </h3>
      </article>
    </React.Fragment>
  );
};

export default FilmCard;

FilmCard.propTypes = {
  movie: PropTypes.arrayOf(filmsShape)
};

