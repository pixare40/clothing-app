import { signInWithGooglePopup } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup().then((value) => {
      console.log(value);
    });
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Login In with Google</button>
    </div>
  );
};

export default SignIn;
