import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

 const AuthNav = ()  => {
  return (
    <>
    <NavLink className={css.titleAuth} to="/register">
      Register
    </NavLink>
    <NavLink className={css.titleAuth} to="/login">
      Log In
    </NavLink>
  </>
  )
}

export default AuthNav;
