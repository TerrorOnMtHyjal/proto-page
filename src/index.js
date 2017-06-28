import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import seedFonts from './lib/fonts.js';

seedFonts();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
