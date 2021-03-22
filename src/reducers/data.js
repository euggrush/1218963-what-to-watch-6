import films from '../mocks/films';

const initState = [];

films.map((film) => {
  return initState.push(
      {
        movie: film,
        genre: film.genre
      }
  );
});

const data = (state = initState) => {
  return state;
};

export default data;
