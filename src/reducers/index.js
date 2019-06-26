import { combineReducers } from 'redux';
import { localizeReducer } from 'react-localize-redux';
import configReducer from './configReducer';

export default () => combineReducers({
		localize: localizeReducer,
		config: configReducer
});