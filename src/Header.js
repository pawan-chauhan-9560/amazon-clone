import React from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
const Header = () => {
  // const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* Amazon logo */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>

      <div className="header_search">
        {/* Search */}
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_first">Hello Guest</span>
          <span className="header_option_second">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option_first">Returns</span>
          <span className="header_option_second">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_first">Your</span>
          <span className="header_option_second">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="header_option_second header_basketCount">0
              {/* {basket?.length} */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
