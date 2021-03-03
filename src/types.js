import PropTypes from 'prop-types';

export const filmsShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
  bgSrc: PropTypes.string.isRequired,
  filmPictureSrc: PropTypes.string.isRequired,
  filmVideoSrc: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
});
