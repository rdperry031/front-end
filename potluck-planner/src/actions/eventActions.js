import axiosWithAuth from "../utilities/axiosWithAuth";
import { useHistory } from "react-router";
export const ADD_EVENT = 'ADD_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const SET_ID = 'SET_ID';


export const postEvent = (formValues) => dispatch => {
    dispatch (fetchStart());
    axiosWithAuth()
    .post(`/potlucks`, formValues)
    .then(res => {
          console.log(res)
          dispatch(addEvent(res.data))
      })
      .catch((error) => {
          dispatch({ type: fetchFail(error.res.data.message)})
      })
}
export const addEvent = (event) => {
  return { type: ADD_EVENT, payload: event };
};

export const deleteEvent = (id) => {
  return { type: DELETE_EVENT, payload: id };
};

export const setError = (errorMessage) => {
  return { type: SET_ERROR_MESSAGE, payload: errorMessage };
};
export const fetchStart = () => ({ type: FETCH_START });

export const fetchSuccess = (event) => {
  return { type: FETCH_SUCCESS, payload: event };
};
export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};
export const setId = (id) => {
    return { type:  SET_ID, payload: id}
}
