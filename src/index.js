import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import AlternativeApp from './app/AlternativeApp';

ReactDOM.render(
  <React.StrictMode>
    <AlternativeApp />
  </React.StrictMode>,
  document.getElementById('root')
);

