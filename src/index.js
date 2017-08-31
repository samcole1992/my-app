import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import options from './options'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App options = {options}/>, document.getElementById('root'));
registerServiceWorker();
