import { combineReducers } from 'redux';
import { localizeReducer } from 'react-localize-redux';

export default () => combineReducers({
		localize: localizeReducer
});