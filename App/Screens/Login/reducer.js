import {fromJS} from 'immutable';

import {AUTH, AUTH_SUCCESS} from './constants';
import {
  CLOCK_IN_ERROR,
  CLOCK_IN_SUCCESS,
  CLOCK_OUT,
} from '../ClockIn/constants';

const initialState = fromJS({
  token: '',
  clockedIn: false,
  hotel: {},
  user: {},
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return state
        .set('token', '')
        .set('clockedIn', false)
        .set('user', fromJS({}))
        .set('hotel', fromJS({}));
    case AUTH_SUCCESS:
      return state
        .set('token', action.token)
        .set('user', fromJS(action.user))
        .set('hotel', fromJS(action.hotel))
        .set('clockedIn', false);
    case CLOCK_IN_SUCCESS:
      return state.set('clockedIn', true);
    case CLOCK_IN_ERROR:
      return state.set('clockedIn', false);
    case CLOCK_OUT:
      return state.set('clockedIn', false);
    default:
      return state;
  }
};

export default authReducer;
