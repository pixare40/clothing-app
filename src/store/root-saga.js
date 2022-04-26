import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/categories.saga";
import { rolodexSagas } from "./rolodex/rolodex.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas), call(rolodexSagas)]);
}
