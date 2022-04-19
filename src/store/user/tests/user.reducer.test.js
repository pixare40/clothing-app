import { userReducer } from "../user.reducer";
import { USER_ACTION_TYPES } from "../user.types";

describe("userReducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({ currentUser: null });
  });
  it("should update state when a valid action is passed", () => {
    expect(
      userReducer(undefined, {
        type: USER_ACTION_TYPES.SET_CURRENT_USER,
        payload: "abc",
      })
    ).toEqual({ currentUser: "abc" });
  });
});
