import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main/main';
import SignIn from '../login/login';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFoundPage from '../not-found-page/not-found-page';

const App = (props) => {

  const {title, genre, date} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="">
          <MainPage
            title={title}
            genre={genre}
            date={date}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/film">
          <Film />
        </Route>
        <Route exact path="/review">
          <AddReview />
        </Route>
        <Route exact path="/player">
          <Player />
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
  date: PropTypes.number.isRequired
};
