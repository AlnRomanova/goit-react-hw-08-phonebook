import React from 'react';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation';
import css from './AppBar.module.css'

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <header  className={css.header} >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
