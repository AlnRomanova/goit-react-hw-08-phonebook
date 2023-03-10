import React from 'react';
import { NavLink } from 'react-router-dom';
import css from 'components/Navigation/Navigation.module.css';
import { useAuth } from 'hook/useAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
        <NavLink className={css.title}  to="/">Home</NavLink>
        {isLoggedIn && <NavLink className={css.title} to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
