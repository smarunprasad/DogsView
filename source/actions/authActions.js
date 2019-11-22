import * as types from './actionTypes';
import axios from 'axios';
import { actionConstants } from './actionConstants';
import { alertMessages } from '../constants/constants';

export function getDogList() {
    return async dispatch => {
        const response = await axios.get(actionConstants.dogsListUrl);
        const data = response;
        debugger;
        if (data.status === 200) {
            dispatch({
                //Dispatch the data to update the UI
                type: types.DOG_LIST,
                dogList: data.data.message,
            });
        } 
        else {
            dispatch({
                //Dispatch to show alert
                type: types.SHOW_NOTIFICATION,
                message: alertMessages.someThingWentWrong,
            });
        }
    };
}

export function getBreedList(breedName) {
    return async dispatch => {
        const response = await axios.get(
            actionConstants.breedListUrl + breedName[0] + '/images',
        );
        const data = response.data;
        if (data.status === 'success') {
            dispatch({
                //Dispatch the data to update the UI
                type: types.BREED_LIST,
                breedList: data.message,
            });
        }
        else {
            dispatch({
               //Dispatch to show alert
                type: types.SHOW_NOTIFICATION,
                message: alertMessages.someThingWentWrong,
            });
        }
    };
}

export function clearAuthReducer() {
    return dispatch => {
        dispatch({
            type: types.CLEAR_AUTH_REDUCER,
        });
    };
}
