import {combineReducers} from 'redux-immutable';

import authReducer from '../Screens/Login/reducer';
import hydrateReducer from './HydrateReducer';

export default function createReducer() {
  return combineReducers({
    auth: authReducer,
    hydrate: hydrateReducer,
  });
}
