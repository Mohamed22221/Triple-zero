import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import GlopalStyle from './styles/glopalStyle';
import {store} from "./store/store"

ReactDOM.render(
  <React.StrictMode>
    <GlopalStyle />
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

