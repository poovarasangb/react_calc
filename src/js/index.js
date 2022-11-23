import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

const mainElement = document.createElement('main');
document.body.appendChild(mainElement);
document.title = 'React Calculator App';

const root = ReactDOM.createRoot(mainElement);
root.render(
  <React.StrictMode>
    <App name="PGB"/>
  </React.StrictMode>
);
