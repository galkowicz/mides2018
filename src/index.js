import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { initialize, addTranslation } from 'react-localize-redux';
import store, { history } from './store';
import isMobile from 'ismobilejs';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import translations from './translations/index';
import {SET_CONFIG} from './constants';

import registerServiceWorker from './registerServiceWorker';

const languages = [
    { name: 'עברית', code: 'he' },
    { name: 'English', code: 'en' }
];
store.dispatch(initialize(languages));
store.dispatch(addTranslation(translations));
store.dispatch({type: SET_CONFIG, payload: isMobile});

const target = document.querySelector('#root');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);

registerServiceWorker();
