import { applyMiddleware, compose, createStore } from 'redux';
import createRootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
	return createStore(
		createRootReducer(), // root reducer with router state
		preloadedState,
		composeEnhancers(
			applyMiddleware(),
		),
	);
}