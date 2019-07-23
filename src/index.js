import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { LocalizeProvider } from 'react-localize-redux';
import configureStore from './configureStore';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore(/* provide initial state if any */);

const target = document.querySelector('#root');

ReactDOM.render(
	<Provider store={store}>
			<LocalizeProvider store={store}>
					<BrowserRouter>
									<App />
					</BrowserRouter>
			</LocalizeProvider>
	</Provider>,
	target
);

registerServiceWorker();
