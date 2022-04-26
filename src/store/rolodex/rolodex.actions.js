import { createAction } from "../../utils/reducer/reducer.utils";
import { ROLODEX_TYPES } from "./rolodex.types";

export const startRolodexFetch = () =>
  createAction(ROLODEX_TYPES.START_ROLODEX_FETCH);

export const fetchRolodexFailed = (error) =>
  createAction(ROLODEX_TYPES.ROLODEX_FETCH_FAILED, error);

export const fetchRolodexSuccess = (rolodexData) =>
  createAction(ROLODEX_TYPES.ROLODEX_FETCH_SUCCESS, rolodexData);
