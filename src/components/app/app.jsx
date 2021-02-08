import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main/main';

const App = (props) => {

  return (
    <MainPage
      title = {props.title}
      genre ={ props.genre}
      date = {props.date}
    />
  );
};

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired
};
