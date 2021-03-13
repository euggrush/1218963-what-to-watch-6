import React, {Fragment, useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({defaultIsPlaying, filmVideoSrc, filmPictureSrc}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(defaultIsPlaying);
  const audioRef = useRef();

  return (
    <Fragment>
      <video controls width="280" height="175" muted="muted" poster={filmPictureSrc} >

        <source src={filmVideoSrc}
          type="video/mp4" />

      </video>
    </Fragment>
  );
};

VideoPlayer.propTypes = {
  filmVideoSrc: PropTypes.string.isRequired,
  filmPictureSrc: PropTypes.string.isRequired,
  defaultIsPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;
