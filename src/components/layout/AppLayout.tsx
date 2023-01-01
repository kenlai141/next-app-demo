import React from 'react';
import { Container } from '@mui/material';
import NavBar from '@components/layout/NavBar';
import IndexLayout from '@components/layout/IndexLayout';

const pages = ['Movies', 'Actors', 'Reviews'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const AppLayout = ({ children }: any) => {
  return (
    <IndexLayout>
      <NavBar pages={pages} settings={settings} />
      <Container style={{ minHeight: '740px' }}>{children}</Container>
    </IndexLayout>
  );
};

export default AppLayout;
