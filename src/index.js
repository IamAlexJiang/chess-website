import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { OpeningsProvider } from './contexts/categories.context';
import { EndgameProvider } from './contexts/endgame.context';

import './index.css';

const rootElement = document.getElementById('root');


render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <OpeningsProvider>
          <EndgameProvider>
            <App />
          </EndgameProvider>
        </OpeningsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
