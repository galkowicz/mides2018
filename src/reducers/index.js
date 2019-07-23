import { combineReducers } from 'redux';
import { localizeReducer } from 'react-localize-redux';
import translationReducer from './translationsReducer';

export default () => combineReducers({
		localize: localizeReducer,
		translations: translationReducer
});