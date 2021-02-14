import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main/main';
import SignIn from '../login/SignIn';
import MyList from '../mylist/MyList';
import Film from '../films/id/Film';
import AddReview from '../films/id/review/AddReview';
import Player from '../player/id/Player';
import NotFoundPage from '../NotFoundPage';

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
        <Route exact path="/films/id">
          <Film />
        </Route>
        <Route exact path="/films/id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/id">
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
