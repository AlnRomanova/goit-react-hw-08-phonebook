import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from 'hook/useAuth';
import Layout from './Layout';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';

const HomePage = lazy(() => import ('pages/Home/HomePage'));
const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage'));


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
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </>
  );
};
