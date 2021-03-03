import React from 'react';

const RATING_AMOUNT = 10;

const FeedbackForm = () => {
  const [userFeedback, setUserFeedback] = React.useState({
    rating: RATING_AMOUNT,
    feedback: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setUserFeedback({...userFeedback, [name]: value});
  };

  return (
    <>
      <div className="add-review">
        <form onSubmit={handleSubmit} action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {[...Array(10).keys()].map((id) => (
                <React.Fragment key={`star-${id}`}>
                  <input onChange={handleFieldChange} className="rating__input" id={`star-${id + 1}`} type="radio" name="rating" value={id + 1} />
                  <label className="rating__label" htmlFor="star-1">Rating {id + 1}</label>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea onChange={handleFieldChange} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
