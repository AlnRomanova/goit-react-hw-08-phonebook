import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hook/useAuth';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const {user} = useAuth();
  return (
    <div className={css.userMenu} >
      <p className={css.userName}> Welcome, {user.name}</p>
      <button className={css.btnLogOut} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
