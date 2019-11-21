import * as types from '../actions/actionTypes';

const initialState = {
  isDogListLoaded: false,
  dogList: {},
  isBreadListLoaded: false,
  breadList: {},
};

export default function authReducer(state = initialState, action) {
  //Based the action type get the value from actions and asign it to the states
  
  switch (action.type) {
    case types.DOG_LIST:
      return Object.assign({}, state, {
        isDogListLoaded: true,
        dogList: action.dogList,
      });
    case types.BREAD_LIST:
      return Object.assign({}, state, {
        isBreadListLoaded: true,
        breadList: action.breadList,
      });
    case types.CLEAR_AUTH_REDUCER:
      return Object.assign({}, state, {
        isBreadListLoaded: false,
        isDogListLoaded: false,
      });
    default:
      return state;
  }
}
