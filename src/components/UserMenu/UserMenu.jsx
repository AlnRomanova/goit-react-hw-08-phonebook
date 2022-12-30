import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <div className={css.userMenu} >
      <p className={css.userName}> Welcome, {userName}</p>
      <button className={css.btnLogOut} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
