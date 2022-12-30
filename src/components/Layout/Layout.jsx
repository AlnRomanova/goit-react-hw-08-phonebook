import { GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/AppBar';

const Layout = () => {
  return (
    <>
    <GridItem pl="2" bg="pink.200" area={'header'}>
    <AppBar />
    </GridItem>
    <Suspense fallback={null}>
      <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
