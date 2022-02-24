import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom'


import './styles/global.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import reportWebVitals from './reportWebVitals';
import Auth from './pages/Auth';
import AuthRouter from './config/authRouter.jsx'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthRouter>
        <Auth />
      </AuthRouter>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
