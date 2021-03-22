import {connect} from "react-redux";
import FilmsList from "./films-list";

const getFilterMovies = (data, filter) => {
  let films = [];
  if (filter === `All genres`) {
    films = data.map((obj) => obj.film);
  } else {
    films = data.filter((obj) => filter === obj.genre).map((obj) => obj.film);
  }
  return films;
};

const mapStateToProps = (state) => ({
  films: getFilterMovies(state.data, state.visibilityFilter)
});

export default connect(mapStateToProps)(FilmsList);
