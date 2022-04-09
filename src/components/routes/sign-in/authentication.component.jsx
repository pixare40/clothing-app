
import Login from "../../login/login.component";
import SignUp from "../../sign-up/sign-up.component";

import './authentication.styles.scss';

const Authentication = () => {


  return (
    <div>
      <div className="sign-in-container">
        <Login />
        <SignUp />
      </div>
    </div>
  );
};

export default Authentication;
