import {GET_USERS, PROFILE_ERROR, GET_USER} from '../actions/types';
const initialState = {
  users: [],
  user: {},
  error: {},
  loading: true,
};
export default function pro(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
