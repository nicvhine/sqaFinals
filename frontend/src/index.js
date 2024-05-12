import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reportWebVitals } from './reportWebVitals'; // Modify import statement

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // Call reportWebVitals function

