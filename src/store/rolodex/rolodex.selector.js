import { createSelector } from "reselect";

export const selectRolodex = (state) => state.rolodex;

export const selectRolodexData = createSelector([selectRolodex], (rolodex) => {
  return rolodex.rolodexData;
});
