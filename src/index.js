import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import GlopalStyle from './styles/glopalStyle';
import {store} from "./store/store"
import { ToastProvider } from 'react-toast-notifications';
ReactDOM.render(
  <React.StrictMode>
    <GlopalStyle />
    
    <Provider store={store} >
      <ToastProvider
          autoDismiss
          autoDismissTimeout={4000}
          placement="top-center" >
      <App />
      </ToastProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

