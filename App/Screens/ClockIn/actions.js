import {
  CLOCK_IN,
  CLOCK_IN_SUCCESS,
  CLOCK_IN_ERROR,
  CLOCK_OUT,
} from './constants';

export const clockIn = (pin) => ({
  type: CLOCK_IN,
  pin,
});

export const clockInSuccess = () => ({
  type: CLOCK_IN_SUCCESS,
});

export const clockInError = (status) => ({
  type: CLOCK_IN_ERROR,
  status,
});

export const clockOut = () => ({
  type: CLOCK_OUT,
});
