import React from 'react';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/authSelectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn)

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
