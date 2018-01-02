import {GET_CONFIG} from '../constants';
import isMobile from 'ismobilejs';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CONFIG: {
            return Object.assign({}, state, isMobile);
        }

        default:
            return state;
    }
};

export default reducer;