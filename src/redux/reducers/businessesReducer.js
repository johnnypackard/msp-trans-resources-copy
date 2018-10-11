import { combineReducers } from 'redux';

const businesses = (state = [], action) => {
    switch (action.type) {
        case BUSINESSES_ACTIONS.SHOW_BUSINESSES:
            return action.payload
        case BUSINESSES_ACTIONS.POST_BUSINESSES:
            return [action.payload]
        case BUSINESSES_ACTIONS.DELETE_BUSINESS:
            return [action.payload]
        
    }
};

export default combineReducers({
    businesses,
});