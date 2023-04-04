import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);