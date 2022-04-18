import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { signAuthUserOut } from "../../../utils/firebase/firebase.utils";

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles";
import { CartContext } from "../../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  const handleSignOut = async () => {
    await signAuthUserOut();
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer className="logo" to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink className="nav-link" to="/shop">
            <div>Shop</div>
          </NavLink>
          {
            currentUser ? (<NavLink as='span' className="nav-link" onClick={handleSignOut}>Sign Out</NavLink>) : (
              <NavLink className="nav-link" to="/auth">
                <div>Sign In</div>
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinksContainer>
        {
          isCartOpen && <CartDropdown />
        }

      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
