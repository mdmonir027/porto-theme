import '@fortawesome/fontawesome-free/css/all.css';
import Header from 'components/header/Header';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'routes/Router';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router Header={Header} />
  </React.StrictMode>,
  document.getElementById('root')
);
