import * as React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './mainNavigation';

const Main = () => {
  return (
    <React.Fragment>
      <h1>Main Page</h1>
      <MainNavigation />
      <Outlet />
    </React.Fragment>
  );
};
export default Main;
