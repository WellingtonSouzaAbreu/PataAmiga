import React from 'react';
import ReactDOM from 'react-dom';
import {  Link } from 'react-router-dom'


import './styles/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import reportWebVitals from './reportWebVitals';
import Router from './config/router';

ReactDOM.render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
