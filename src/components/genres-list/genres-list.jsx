import React, {useState} from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {films} = props;
  const [isActiveGenre, setActiveGenre] = useState(false);

  const genres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];

  const toggleClass = () => {
    isActiveGenre(!setActiveGenre);
  };

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {
          genres.map((genre, id) => {
            return (
              <li
                className={`catalog__genres-item ${isActiveGenre ? `catalog__genres-item--active` : null}`}
                onClick={toggleClass}
                key={id}>
                <a href="#" className="catalog__genres-link">{genre}</a>
              </li>
            );
          })
        }
      </ul>
    </React.Fragment>
  );
};

GenresList.propTypes = {
  count: PropTypes.number.isRequired,
};
export default GenresList;
