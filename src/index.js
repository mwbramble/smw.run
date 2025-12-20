import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './Components/App/App';
import './fonts/lmsans10-regular.otf';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
  <App />
</BrowserRouter>);