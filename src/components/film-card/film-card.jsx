import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import filmsShape from '../../types';
import VideoPlayer from '../video-player/video-player';

const FilmCard = ({movie}) => {

  const [isPlayerActive, setState] = useState(false);

  const {title, filmPictureSrc, id, filmVideoSrc} = movie;
  return (

    <React.Fragment>
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          isPlayerActive = setState(true);
        }}
        onMouseOut={() => {
          isPlayerActive = setState(false);
        }}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            id={id}
            filmVideoSrc={filmVideoSrc}
            filmPictureSrc={filmPictureSrc}
            isPlaying={isPlayerActive}
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

