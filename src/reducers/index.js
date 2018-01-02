import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { localeReducer } from 'react-localize-redux';
import configReducer from './configReducer';

export default combineReducers({
    routing: routerReducer,
    locale: localeReducer,
    config: configReducer
});