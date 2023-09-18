import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer autoClose={1000}/>
  </StrictMode>
);
