import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.context";
import { signAuthUserOut } from "../../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";
import { CartContext } from "../../../contexts/cart.context";

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleSignOut = async () => {
    await signAuthUserOut();
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
          <CartIcon />
        </div>
        {
          isCartOpen && <CartDropdown />
        }

      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
