import React from 'react';
import AuthNav from 'components/AuthNav';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation';

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn)

  return (
    <header>
      <Navigation />
      {isLoggedIn && <AuthNav />}
    </header>
  );
}

export default AppBar;
