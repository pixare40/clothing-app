import { takeLatest, put, call, all } from "redux-saga/effects";
import { getMonsters } from "../../utils/test-utils/rolodex.utils";
import { fetchRolodexFailed, fetchRolodexSuccess } from "./rolodex.actions";
import { ROLODEX_TYPES } from "./rolodex.types";

export function* rolodexFetchStart() {
  yield takeLatest(ROLODEX_TYPES.START_ROLODEX_FETCH, fetchRolodex);
}

export function* fetchRolodex() {
  try {
    const rolodex = yield call(getMonsters);
    yield put(fetchRolodexSuccess(rolodex));
  } catch (error) {
    yield put(fetchRolodexFailed(error));
  }
}

export function* rolodexSagas() {
  yield all([call(rolodexFetchStart)]);
}
