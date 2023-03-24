import * as React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <React.Fragment>
      <h1>Main Page</h1>
      <Outlet />
    </React.Fragment>
  );
};
export default Main;
