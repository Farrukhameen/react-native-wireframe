import {call, put, takeLatest} from 'redux-saga/effects';

import apiCall from '../../Services/ApiCall';
import {AUTH} from './constants';
import {authError, authSuccess} from './actions';
import apiUrl from '../../Config/ApiUrl';

export function* authenticate() {
  const requestUrl = `${apiUrl}/authenticate`;
  try {
    yield call(apiCall, requestUrl);
    yield put(authSuccess());
  } catch (e) {
    yield put(authError(e.message));
    // console.log('err occurred', e);
  }
}

export default function* authenticateSaga() {
  yield takeLatest(AUTH, authenticate);
}
