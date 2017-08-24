import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {Router, Route, IndexRoute hashHistory} from "react-router";

ReactDOM.render(<App />, document.getElementById('App'));
registerServiceWorker();
