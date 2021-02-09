import {createSelector} from 'reselect';

export const selectAuth = (state) => state.get('auth');

export const makeSelectToken = () =>
  createSelector(selectAuth, (AuthState) => AuthState.get('token'));

export const makeSelectClockedIn = () =>
  createSelector(selectAuth, (AuthState) => AuthState.get('clockedIn'));

export const makeSelectHotel = () =>
  createSelector(selectAuth, (AuthState) => AuthState.get('hotel').toJS());

export const makeSelectUser = () =>
  createSelector(selectAuth, (AuthState) => AuthState.get('user').toJS());
