import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
	return createStore(
		createRootReducer(history), // root reducer with router state
		preloadedState,
		composeEnhancers(
			applyMiddleware(),
		),
	);
}