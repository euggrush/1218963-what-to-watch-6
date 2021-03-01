import PropTypes from 'prop-types';

export const filmsShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  filmPictureSrc: PropTypes.string.isRequired
});
