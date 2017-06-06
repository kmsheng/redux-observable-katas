import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import registerServiceWorker from './utils/registerServiceWorker';
import store from './redux/store';
import {Provider} from 'react-redux';
import './index.css';

const component = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(component, document.getElementById('root'));
registerServiceWorker();
