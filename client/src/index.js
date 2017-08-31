import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Helpers from "./util/helpers.js"

ReactDOM.render(<App />, document.getElementById('App'));
registerServiceWorker();
