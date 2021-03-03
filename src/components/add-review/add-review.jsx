import React from 'react';
import PropTypes from 'prop-types';
import FeedbackForm from '../feedback-form/feedback-form';
import filmsShape from '../../types';
import {useParams} from "react-router-dom";

const AddReview = ({films}) => {

  const {id} = useParams();
  const filmData = films[id];
  const {bgSrc, title, filmPictureSrc} = filmData;

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={bgSrc} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{title}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={filmPictureSrc} alt={title} width="218" height="327" />
          </div>
        </div>

        <FeedbackForm/>

      </section>
    </>
  );
};

export default AddReview;

AddReview.propTypes = {
  films: PropTypes.arrayOf(filmsShape)
};
