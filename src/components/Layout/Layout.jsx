import React from 'react';
import { Container } from './Layout.styled';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container>
      <Header></Header>
      <Outlet />
    </Container>
  );
};

export default Layout;
