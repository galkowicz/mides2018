import {SET_CONFIG} from '../constants';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CONFIG: {
            return Object.assign({}, state, action.payload);
        }

        default:
            return state;
    }
};

export default reducer;