import * as types from '../actions/actionTypes';

const initialState = {
    isDogListLoaded: false,
    dogList: {},
    isBreedListLoaded: false,
    breedList: {},
};

export default function authReducer(state = initialState, action) {
    //Based the action type get the value from actions and asign it to the states
    switch (action.type) {
        case types.DOG_LIST:
            return Object.assign({}, state, {
                isDogListLoaded: true,
                dogList: action.dogList,
            });
        case types.BREED_LIST:
            return Object.assign({}, state, {
                isBreedListLoaded: true,
                breedList: action.breedList,
            });
        case types.CLEAR_AUTH_REDUCER:
            return Object.assign({}, state, {
                  isBreedListLoaded: false,
                  isDogListLoaded: false,
            });
        default:
            return state;
    }
}
