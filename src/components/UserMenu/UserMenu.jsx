import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <div>
      <p> Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
