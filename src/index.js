import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Abc from './components/abc';
import store from './store';
import { Provider } from 'react-redux';

//comment

// store.subscribe(()=>( 
//   console.log(store.getState())
// ))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Abc />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
