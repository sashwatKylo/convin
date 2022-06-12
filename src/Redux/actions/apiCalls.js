import axios from 'axios';
import {GET_USERS, PROFILE_ERROR, GET_USER} from './types';
export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('https://reqres.in/api/users?page=2');
    dispatch({
      type: GET_USERS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err, status: err.status},
    });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err, status: err.status},
    });
  }
};
