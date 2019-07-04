import { combineReducers } from 'redux';
import { localizeReducer } from 'react-localize-redux';
import configReducer from './configReducer';
import translationReducer from './translationsReducer';

export default () => combineReducers({
		localize: localizeReducer,
		config: configReducer,
		translations: translationReducer
});