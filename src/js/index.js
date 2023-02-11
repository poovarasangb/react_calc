import '../scss/init.scss';
import 'bootstrap/scss/bootstrap.scss';

import { createRoot } from 'react-dom/client';
import React from 'react';

import { App } from './App';

const mainElement = document.createElement('main');
document.body.appendChild(mainElement);
document.title = 'React Calculator App';

const root = createRoot(mainElement);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
