import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.scss';
import AppContext from '../context/AppContext';

function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>

      <div className="Header-checkout">
        <Link to="/checkout">
          <i className=" fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
}

export default Header;
