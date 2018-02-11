import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// see https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
import { BrowserRouter, Route} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    /************Change when pushing live****************/
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
