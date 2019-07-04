import {SET_TRANSLATION} from '../constants';

const reducer = (state = {}, action) => {
		switch (action.type) {
				case SET_TRANSLATION: {
						return Object.assign({}, state, action.payload);
				}

				default:
						return state;
		}
};

export default reducer;

/*
		Actions:
*/

export const setTranslation = (payload)  => {
		return {
				type: SET_TRANSLATION,
				payload
		}
};