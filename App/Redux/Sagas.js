import {fork, all} from 'redux-saga/effects';

import authenticateSaga from '../Screens/Login/saga';

export default function* rootSaga() {
  yield all([fork(authenticateSaga)]);
}
