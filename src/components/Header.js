import logo from '../images/logo.svg';
import React from "react";
import HeaderProfile from "./HeaderProfile";

function Header({ loggedIn, email, signOut }) {

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип Mesto"/>
      {loggedIn &&
      <HeaderProfile
        className="header__profile"
        email={email}
        signOut={signOut}
      />}
    </header>
  )
}

export default Header;
