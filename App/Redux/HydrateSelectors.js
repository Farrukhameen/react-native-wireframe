import {createSelector} from 'reselect';

export const selectHydrate = (state) => state.get('hydrate');

export const makeSelectHydrated = () =>
  createSelector(selectHydrate, (HydrateState) => HydrateState.get('hydrated'));
