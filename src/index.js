import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import MyFooter from './components/MyFooter';
import MyHeader from './components/MyHeader';
import "./styles/styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyHeader />
    <App />
    <MyFooter />
  </React.StrictMode>
);
