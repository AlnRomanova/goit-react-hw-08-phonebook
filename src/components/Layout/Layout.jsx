import React from 'react';
import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import AuthNav from 'components/AuthNav';


const Layout = () => {
  return (
    <>
    <AuthNav/>
    <Navigation/>
    <Outlet />
    </>
  )
}


export default Layout;
