import React from 'react';
import { GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';

import AppBar from 'components/AppBar';


const Layout = () => {
  return (
    <>
      <GridItem pl='2' bg='pink.300' area={'header'}>
    <AppBar/>
    </GridItem>
    <Outlet />
    </>
  )
}


export default Layout;
