import * as ActionTypes from './ActionTypes';

// reducer function takes the current state and action and then creates a new state
export const Promotions = (state = { isLoading: true,
    errMess: null,
    promotions: [] }, action) => { 
    switch (action.type) { 
        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOTIONS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []};

        case ActionTypes.PROMOTIONS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};