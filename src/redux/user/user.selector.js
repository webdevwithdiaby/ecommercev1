import { createSelector } from 'reselect';

const selectUserReducer = store => store.userReducer;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  userReducer => userReducer.currentUser
);
