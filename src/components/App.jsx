import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from 'hook/useAuth';
import Layout from './Layout';
import HomePage from 'pages/Home/HomePage';
import RegisterPage from 'pages/Register/RegisterPage';
import LoginPage from 'pages/Login/LoginPage';
import ContactsPage from 'pages/Contacts/ContactsPage';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';



export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
};
