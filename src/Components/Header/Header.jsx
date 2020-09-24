import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="data:image/png;base64,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"
          alt="amazoneLogo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              {" "}
              {user?.email ? user.email : "Hello Guest"}
            </span>
            <span className="header__optionLineTwo">
              {" "}
              {user === null ? "Sign In" : "Sing Out"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne"> Returns</span>
            <span className="header__optionLineTwo"> Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne"> Your</span>
          <span className="header__optionLineTwo"> Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
