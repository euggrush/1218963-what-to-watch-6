import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';

ReactDOM.render(
    <App
      title={`The Grand Budapest Hotel`}
      genre= {`Drama`}
      date= {2014}
    />,
    document.querySelector(`#root`)
);
