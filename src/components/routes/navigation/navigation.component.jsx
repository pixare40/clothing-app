import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signAuthUserOut } from "../../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {

  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    const response = await signAuthUserOut();
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <div>Shop</div>
          </Link>
          {
            currentUser ? (<span className="nav-link" onClick={handleSignOut}>Sign Out</span>) : (
              <Link className="nav-link" to="/auth">
                <div>Sign In</div>
              </Link>
            )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
