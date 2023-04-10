import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import MyFooter from './utils/MyFooter';
import MyHeader from './utils/MyHeader';
import "./styles/styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyHeader />
    <App />
    <MyFooter />
  </React.StrictMode>
);
