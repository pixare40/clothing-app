import { userReducer } from "../user.reducer";
import { USER_ACTION_TYPES } from "../user.types";

describe("userReducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual({
      currentUser: null,
      isLoading: false,
      error: null,
    });
  });
  it("should update state when a valid action is passed", () => {
    expect(
      userReducer(undefined, {
        type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
        payload: "abc",
      })
    ).toEqual({ currentUser: "abc", isLoading: false, error: null });
  });
});
