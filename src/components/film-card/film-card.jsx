import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import filmsShape from '../../types';
import VideoPlayer from '../video-player/video-player';

const FilmCard = ({movie}) => {

  const [isPlayerActive, setPlayerActive] = useState(false);

  const {title, filmPictureSrc, id, filmVideoSrc} = movie;

  let timerId;

  const handleMouseOver = () => {
    timerId = setTimeout(() => {
      setPlayerActive(true);
    }, 1000);
  };

  const handleMouseOut = () => {
    clearTimeout(timerId);
    setPlayerActive(false);
  };

  return (

    <React.Fragment>
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="small-movie-card__image">
          {
            isPlayerActive
              ? <VideoPlayer
                id={id}
                filmVideoSrc={filmVideoSrc}
                filmPictureSrc={filmPictureSrc}
                isPlaying={isPlayerActive}
              />
              : <img src={filmPictureSrc} alt={title} width="280" height="175" />
          }
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

