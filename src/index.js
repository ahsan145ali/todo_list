import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import { Provider } from 'react-redux';
import Redux_Main from "./Redux/Redux_Main";

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={Redux_Main}>
      <App />
    </Provider>
);
