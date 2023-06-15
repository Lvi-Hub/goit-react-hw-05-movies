import React, { Suspense } from 'react';
import { Container } from './Layout.styled';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Header></Header>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
  );
};

export default Layout;
