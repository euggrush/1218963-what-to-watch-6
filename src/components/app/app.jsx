import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main/main';

const App = (props) => {

  const {title, genre, date} = props;

  return (
    <MainPage
      title = {title}
      genre={genre}
      date={date}
    />
  );
};

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired
};
