import {fromJS} from 'immutable';
import {REHYDRATE} from 'redux-persist';

const initialState = fromJS({hydrated: false});

const hydratedReducer = (state = initialState, action) => {
  if (action.type === REHYDRATE) {
    return state.set('hydrated', true);
  }
  return state;
};

export default hydratedReducer;
