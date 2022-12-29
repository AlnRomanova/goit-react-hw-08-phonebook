import React from 'react';
import { NavLink } from 'react-router-dom';
import css from 'components/Navigation/Navigation.module.css';
import { useAuth } from 'hook/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <>
      <nav className={css.navBox}>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
    </>
  );
};

export default Navigation;
