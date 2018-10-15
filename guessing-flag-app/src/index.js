import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GuessingFlagApp from './GuessingFlagApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GuessingFlagApp />, document.getElementById('root'));
registerServiceWorker();
