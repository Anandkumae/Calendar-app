import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './styles/calendar.css';

/**
 * Application Entry Point
 * 
 * This is where our React calendar app boots up.
 * We render the main App component into the DOM root element.
 * StrictMode is enabled for development to catch potential issues.
 */

// Find the root DOM element where our app will be mounted
const rootElement = document.getElementById('root');

// Create a React root and render our app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);