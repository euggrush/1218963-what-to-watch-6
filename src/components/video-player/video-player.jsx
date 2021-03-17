import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({id, filmVideoSrc, isPlaying}) => {

  const videoRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    }

    return () => videoRef.current.pause();
  }, []);

  return (
    <video className={`video-${id}`} width="280" height="175" muted ref={videoRef} >
      <source src={filmVideoSrc} type="video/mp4" />
    </video>
  );
};

VideoPlayer.propTypes = {
  id: PropTypes.number.isRequired,
  filmVideoSrc: PropTypes.string.isRequired,
  filmPictureSrc: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};


export default VideoPlayer;
