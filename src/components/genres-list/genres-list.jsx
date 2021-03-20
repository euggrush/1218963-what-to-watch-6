import React, {useState} from 'react';
import PropTypes from 'prop-types';

const GenresList = (props) => {
  const {films} = props;
  const [isActiveGenre, setActiveGenre] = useState(false);

  const filteredFilmsArray = [];

  const genres = films.map((film) => {
    return film.genre;
  });

  const genresUnique = (arr) => {
    return Array.from(new Set(arr));
  };

  const genreFilterHandler = (etv) => {
    etv.preventDefault();
    setActiveGenre(!isActiveGenre);

    films.map((movie) => {
      if (movie.genre === etv.target.textContent) {
        filteredFilmsArray.push(movie);
      }
    });
  };

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {
          genresUnique(genres).map((genre, id) => {

            return (
              <li
                className={`catalog__genres-item ${isActiveGenre ? `catalog__genres-item--active` : null}`}
                key={id}>
                <a href="#"
                  className="catalog__genres-link"
                  onClick={genreFilterHandler}
                >{genre}</a>
              </li>
            );
          })
        }
      </ul>
    </React.Fragment>
  );
};

GenresList.propTypes = {
  films: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};
export default GenresList;
