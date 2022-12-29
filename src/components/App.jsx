import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/Register/RegisterPage';
import LoginPage from 'pages/Login/LoginPage';
import ContactsPage from 'pages/Contacts/ContactsPage';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchContacts } from 'redux/contactsOperations';



export const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className="container">

       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
        </Route>
       </Routes>

      <ToastContainer autoClose={2000} />
    </div>
  );
};
