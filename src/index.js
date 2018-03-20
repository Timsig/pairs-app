import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
// see https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

render((
    /************Change when pushing live****************/
    <BrowserRouter basename="/pairs">
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
