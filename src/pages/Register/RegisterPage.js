import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './Register.module.css';

const RegisterPage= () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

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

    dispatch(register({name, email, password}));
    console.log({name, email, password})
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label htmlFor="" className={css.formLabel}>
        Name
        <input
          className={css.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required


        />
      </label>
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
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required

        />
      </label>
      <button className={css.btn}>Sign Up</button>
    </form>
  );
}

export default RegisterPage;
