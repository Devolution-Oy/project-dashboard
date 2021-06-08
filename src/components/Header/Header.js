import React from 'react';
import './Header.css';
import  SignOut from '../Session/SignOut';
import { AuthContext } from '../Session';

function Header() {
  return (
    <header>
      <img src="https://devolution.fi/wp-content/uploads/2020/09/logo-devolution.svg" width="90%"
        height="93px" alt="LogoDevolution"></img>
      <AuthContext.Consumer>
        {authUser => authUser ? <SignOut /> : null}
      </AuthContext.Consumer>
    </header>
  );
}
export default Header;