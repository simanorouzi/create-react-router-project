import * as React from 'react';
import MainNavigation from './mainNavigation';
import * as Router from 'react-router-dom';

const ErrorPage = () => {
  const navigate = Router.useNavigate();
  const navigateHandler = () => {
    navigate('/');
  };
  return (
    <React.Fragment>
      <MainNavigation />
      <div>an Error accoured! </div>
      <button onClick={navigateHandler}>Go To Home</button>
    </React.Fragment>
  );
};

export default ErrorPage;
