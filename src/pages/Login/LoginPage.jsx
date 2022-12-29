import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import css from './Login.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // const user = useSelector(selectUserName);

  const handleNameChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();

    dispatch(login({email, password}));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label htmlFor="" className={css.formLabel}>
        Email
        <input
          className={css.formInput}
          type="email"
          name="email"
          value={email}
          onChange={handleNameChange}

        />
      </label>
      <label htmlFor="" className={css.formLabel}>
       Password
        <input
          className={css.formInput}
          type="password"
          name="password"
          value={password}
          onChange={handleNameChange}
        />
      </label>
      <button className={css.btn}>Add contacts</button>
    </form>
  );
}

export default  LoginPage;
