import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../Style/styles";
import CartIcon from "../Data/imgs/cart.png";
import Logo from "../Data/imgs/logo.png";

const NavBar = ({ cartItems }) => {
  const showItems = () => {
    let num = 0;
    for (let i = 0; i<cartItems.length; i++){
      num += Number(cartItems[i].quantity);
    }
    return num
  };

  return (
    <Nav>
      <Link to="/shopping-cart">
        <img className="logo" src={Logo} alt="Rezze" />
      </Link>
      <ul>
        <Link to="/shopping-cart">
          <li>Home</li>
        </Link>
        <Link to="/shopping-cart/shop">
          <li>Shop</li>
        </Link>
        <Link to="/shopping-cart/cart">
          <li className="cartContainer">
            <img src={CartIcon} alt="Cart" />
            <p className="itemNumber">{showItems()}</p>
          </li>
        </Link>
      </ul>
    </Nav>
  );
};

export default NavBar;
