import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import SignIn from '../login/login';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';

const App = (props) => {

  const {title, genre, date, filmsArray} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            title={title}
            genre={genre}
            date={date}
            filmsArray={filmsArray}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/my-list">
          <MyList
            filmsArray={filmsArray}
          />
        </Route>
        <Route exact path="/film/:id">
          <Film />
        </Route>
        <Route exact path="/film/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player
            filmsArray={filmsArray}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  filmsArray: PropTypes.array.isRequired
};
