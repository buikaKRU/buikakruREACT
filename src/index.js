import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

import WebFont from 'webfontloader';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


WebFont.load({
    google: {
      families: ['Source Serif Pro:400', 'serif']
    }
  });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
