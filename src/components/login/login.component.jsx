import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { signInAuthUserEmailAndPassword } from "../../utils/firebase/firebase.utils";

import "./login.styles.scss";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

const defaultLoginInput = {
  password: "",
  email: "",
};

const Login = () => {
  const dispatch = useDispatch();

  const [loginFields, setLoginField] = useState(defaultLoginInput);

  const { email, password } = loginFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginField({ ...loginFields, [name]: value });
  };

  const logGoogleUser = async (event) => {
    event.preventDefault();
    dispatch(googleSignInStart());
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("user not found");
          break;
        default:
          console.log(error);
      }
      console.log("An error happened");
    }
  };

  return (
    <div className="login-container">
      <h2>I already have an account</h2>
      <h4>Sign in with your email and password</h4>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          onChange={handleChange}
          required
          name="password"
          type="password"
          value={password}
        />
        <div className="login-button-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logGoogleUser}
          >
            Login In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
