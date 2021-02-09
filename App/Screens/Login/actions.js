import {AUTH, AUTH_SUCCESS, AUTH_FAILED} from './constants';

export const authSuccess = (token, user, hotel) => ({
  type: AUTH_SUCCESS,
  token,
  user,
  hotel,
});

export const authError = (status) => ({
  type: AUTH_FAILED,
  status,
});

export const auth = () => ({
  type: AUTH,
});
